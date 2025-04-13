from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello Amanda!"})

if __name__ == "__main__":
    print("Starting Flask app...")
    app.run(debug=True)