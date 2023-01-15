from flask import Flask
import numpy as np
from flask_cors import CORS
from infer import Inferrer

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
inferrer = Inferrer()

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/predict", methods=["POST"])
def predict():
    # Get array from request body
    data = request.get_json()

    # Convert to numpy array
    data = np.array(data)

    # Resize to (256, 256, 3)
    data = cv2.resize(data, (256, 256))

    # Change from (256, 256, 3) to (1, 256, 256, 3)
    data = np.expand_dims(data, axis=0)
    
    # Get prediction
    prediction = inferrer.infer(data)
    print(prediction)
    return jsonify(prediction)
    
