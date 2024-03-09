import tensorflow_hub as hub
import numpy as np
import utils.image as Img
import utils.detection as Detect

class Model:

  def __init__(self):
    self.detector = None

  def load_model(self, handle):
    print('loading model from handle. This will take a while')
    self.detector = hub.load(handle).signatures['default']
    print('finished loading model')

  def detect(self, img):
    if self.detector is None: return {}
    return Detect.detect(self.detector, img)
