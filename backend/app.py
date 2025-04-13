from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    print("Root was hit")
    return "Flask app is running!"

@app.route("/api/hello", methods=["GET"])
def hello():
    print("/api/hello was hit")
    return jsonify({"message": "Hello Amanda!"})

if __name__ == "__main__":
    print("Starting Flask app...")
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)