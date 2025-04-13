from flask import Flask, jsonify
from flask_cors import CORS
import os

print("app.py was imported")

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

@app.route("/routes")
def list_routes():
    print("/routes was hit")
    return jsonify([str(rule) for rule in app.url_map.iter_rules()])