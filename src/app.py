import numpy as np
import PIL
from PIL import Image

import tensorflow as tf
import tensorflow_hub as hub

from flask import Flask, send_file
import numpy as np
import io

latent_dim = 512

progan = hub.load("https://tfhub.dev/google/progan-128/1").signatures['default']

def get_module_space_image():
  vector = tf.random.normal([1, latent_dim])
  images = progan(vector)['default'][0]
  return images

app = Flask(__name__)

@app.route('/image')
def serve_image():
    # Example NumPy array representing an image
    # Replace this with your actual NumPy array
    image_array = get_module_space_image()
    image_array = image_array.astype(np.uint8)

    # Convert the NumPy array to a PIL Image
    image = Image.fromarray(image_array)

    # Save the PIL Image to a bytes buffer
    buffer = io.BytesIO()
    image.save(buffer, format='PNG')
    buffer.seek(0)

    # Serve the image as a PNG file
    return send_file(buffer, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)


"""Instructions to Use API
  --> Run this app using python app.py.
  --> Open a web browser and go to http://127.0.0.1:5000/image to see the image served as a PNG file.
"""