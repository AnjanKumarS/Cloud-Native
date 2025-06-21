FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install flask flask-cors

EXPOSE 5003

CMD ["python", "app.py"]
