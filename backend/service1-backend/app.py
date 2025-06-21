from flask import Flask, jsonify, request
from flask_cors import CORS  # <-- Add this

app = Flask(__name__)
CORS(app)  # <-- Enable CORS for all routes

@app.route('/')
def home():
    return "Service 1 Backend Running"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    if username == "admin" and password == "admin123":
        return jsonify({"status": "success", "message": "Login successful"})
    else:
        return jsonify({"status": "fail", "message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
