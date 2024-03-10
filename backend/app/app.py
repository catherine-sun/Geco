import fastapi
import model
from utils.image import load_url, download, draw_boxes

app = fastapi.FastAPI()
model = model.Model()
handle = "https://tfhub.dev/google/faster_rcnn/openimages_v4/inception_resnet_v2/1"

@app.on_event('startup')
async def startup():
  model.load_model(handle)

@app.post("/upload")
async def upload_img(path):
  try:
    img = load_url(path)
    w,h = img.size
    h = int(1080 * h / w)
    path = download(img, (1080, h))
    img, result = model.detect(path)

    result = {key:value.numpy() for key,value in result.items()}
    objects = draw_boxes(np.uint8(img.numpy()), result["detection_boxes"], result["detection_class_entities"], result["detection_scores"])
    for key in objects.keys():
      download(objects[key]["image"], objects[key]["image"].size)

    return create_response(200, "Success", { "response": objects })
  except Exception as e:
    return create_response(500, "Img upload failed: " + str(e))

def create_response(status_code, message, data={}):
  return fastapi.responses.JSONResponse(
    status_code=status_code,
    content={
      "message": message,
      "data": data
    }
  )
