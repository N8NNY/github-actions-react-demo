FROM nginx:1.20.1-alpine

COPY build /usr/share/nginx/html
COPY scripts/nginx.conf /etc/nginx/conf.d/

