FROM nginx:latest

# Nginx default configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files for serving with Nginx
COPY /path/to/static/files /usr/share/nginx/html

# Expose ports
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]