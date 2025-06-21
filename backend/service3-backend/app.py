from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Service 3 Backend Running"

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    # Simulate saving to DB (print/log here)
    print(f"Received message from {name} ({email}): {message}")

    return jsonify({
        "status": "success",
        "message": f"Thank you, {name}! Your message has been received."
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)
