# Docker

[`Docker`](https://www.docker.com/) is an open-source platform that enables developers to automate the deployment of applications within lightweight, portable containers. Containers are standalone, executable packages that include everything needed to run a piece of software, including the code, runtime, libraries, and system tools. Docker makes it easy to develop, deploy, and scale applications consistently across different environments.
<br/>

Docker uses a client-server architecture, where the Docker client communicates with the Docker daemon to build, run, and manage containers. It leverages containerization technology to isolate applications and their dependencies, ensuring consistency and reproducibility across various environments. Docker images, the blueprints for containers, are versioned, shareable, and can be distributed through container registries like Docker Hub.

<br/>

Docker is :

- containerized: Utilizes containerization to package applications and their dependencies in isolated, lightweight containers.
- portable: Ensures consistency across different environments, from development to testing and production.
- scalable: Enables easy scaling of applications by deploying and orchestrating containers using tools like Docker Compose and Kubernetes.

<br/>

## Example

```ts
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

```

>     Docker is an open-source platform for automating the deployment of applications in lightweight, portable containers, ensuring consistency and scalability across different environments.
