# Use official lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx website content
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend files to Nginx's public directory
COPY . /usr/share/nginx/html


# Expose port 80 to the host
EXPOSE 80
