import tempfile
from urllib.request import urlopen
from io import BytesIO
from PIL import Image, ImageColor, ImageDraw

def download(img, size):
  _, filename = tempfile.mkstemp(suffix=".jpg")
  img = img.resize(size, Image.LANCZOS).convert("RGB")
  img.save(filename, format="JPEG", quality=90)
  return filename

def load(data):
  return Image.open(BytesIO(data))

def load_url(url):
  data = urlopen(url).read()
  return load(data)

def draw_box(img, ymin, xmin, ymax, xmax, fill):
  draw = ImageDraw.Draw(img)
  w, h = img.size
  (left, right, top, bottom) = (xmin * w, xmax * w, ymin * h, ymax * h)
  draw.line([(left, top), (left, bottom), (right, bottom), (right, top), (left, top)], width=4, fill=fill)

def draw_boxes(img, boxes, names, scores):
  objects = {}
  colors = list(ImageColor.colormap.values())

  for i in range(min(boxes.shape[0], 10)):
    if scores[i] >= 0.1:
      ymin, xmin, ymax, xmax = tuple(boxes[i])
      name = names[i].decode("ascii")
      if name not in objects:
        objects[name] = {
          "scores": [],
          "fill": colors[hash(names[i]) % len(colors)],
          "count": 0,
          "image": Image.fromarray(img).convert("RGB")
        }
      objects[name]["scores"].append(int(scores[i] * 100))
      objects[name]["count"] += 1
      draw_box(objects[name]["image"], ymin, xmin, ymax, xmax, objects[name]["fill"])

  return objects
