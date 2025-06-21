from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Service 2 Backend Running"

@app.route('/products', methods=['GET'])
def get_products():
    products = [
        {"id": 1, "name": "Milk", "price": 40},
        {"id": 2, "name": "Bread", "price": 30},
        {"id": 3, "name": "Eggs", "price": 60}
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
