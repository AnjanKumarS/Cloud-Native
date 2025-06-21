from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Microservices to check - using Kubernetes service names
services = {
    "Login Service": "http://service1-backend-service:5001/",
    "Product Service": "http://service2-backend-service:5002/",
    "Contact Service": "http://service3-backend-service:5003/"
}


@app.route('/')
def status():
    results = {}
    for name, url in services.items():
        try:
            response = requests.get(url, timeout=2)
            results[name] = "✅ Online" if response.status_code == 200 else "⚠️ Error"
        except Exception:
            results[name] = "❌ Offline"
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)
