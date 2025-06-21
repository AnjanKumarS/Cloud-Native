# Use lightweight Nginx image
FROM nginx:alpine

# Remove the default nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy all frontend files into nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
