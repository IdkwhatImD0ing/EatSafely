import tensorflow as tf
from keras.applications.mobilenet_v2 import preprocess_input

class Inferrer:

    def __init__(self):
        self.saved_path = 'model'
        self.model = tf.saved_model.load(self.saved_path)

        self.predict = self.model.signatures['serving_default']

    # Preprocesses the image
    def preprocess(self, image):
        # Normalizes the 2d array
        image = image / 127.5 - 1
        return image

    def infer(self, image=None):
        # Preprocesses the image
        image = preprocess_input(image)
        # Converts the image to a tensor
        image = tf.convert_to_tensor(image, dtype=tf.float32)
        
        # Gets the prediction)
        prediction = self.predict(image)['dense_8']
        # Gets the prediction
        prediction = prediction.numpy()
        # Get highest element in prediction
        percentage = prediction.max()
        # Gets the prediction
        prediction = prediction.argmax()
        return [int(prediction), float(percentage)]
