# Use lightweight NGINX image
FROM nginx:alpine

# Clear default NGINX HTML folder
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to NGINX HTML root
COPY . /usr/share/nginx/html


# Expose port 80
EXPOSE 80
