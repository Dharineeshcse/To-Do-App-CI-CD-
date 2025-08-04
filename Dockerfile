# Simple static HTML site using Nginx
FROM nginx:alpine
COPY . /usr/share/nginx/html
