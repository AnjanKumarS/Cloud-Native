FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install flask flask-cors requests

EXPOSE 5004

CMD ["python", "app.py"]
