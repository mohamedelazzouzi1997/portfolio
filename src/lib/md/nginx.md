# NGINX

[`NGINX`](https://www.nginx.com/) is a high-performance open-source web server and reverse proxy server. It is known for its speed, efficiency, and versatility, making it a popular choice for serving static content, handling SSL/TLS termination, load balancing, and acting as a reverse proxy for dynamic web applications. NGINX is widely used in both small-scale projects and large-scale deployments.
<br/>

NGINX is designed to efficiently handle concurrent connections and serve static content with minimal resource usage. It also excels in proxying requests to backend applications, distributing traffic among multiple servers, and providing various features to optimize web server performance. NGINX can be extended using modules and is often used as a frontend server in combination with backend application servers.

<br/>

NGINX is :

- high-performance: Optimized for handling a large number of concurrent connections and serving static content efficiently.
- versatile: Used as a web server, reverse proxy, load balancer, and more, making it suitable for various use cases.
- scalable: Scales well in both small and large-scale deployments, providing performance and reliability.

<br/>

## Example

```ts
server {
    listen 80;
    server_name example.com;

    root /var/www/html;

    index index.html;

    error_page 404 /404.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }

    location = /robots.txt {
        access_log off;
        log_not_found off;
    }

    location /404.html {
        internal;
    }

}

```

> NGINX is a high-performance web server and reverse proxy known for its speed, efficiency, and versatility, widely used for serving static content, load balancing, and more.
