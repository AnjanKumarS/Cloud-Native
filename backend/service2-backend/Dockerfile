FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install flask flask-cors

EXPOSE 5002

CMD ["python", "app.py"]
