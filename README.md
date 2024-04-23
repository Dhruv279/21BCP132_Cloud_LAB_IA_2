# Three-Tier Application with Docker

This repository contains a three-tier application built using Docker, consisting of frontend, backend, and MongoDB database.

## Prerequisites

- Docker installed on your machine: [![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://docs.docker.com/get-docker/)
- Docker Compose (usually comes with Docker installation): [![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Ready-blue?logo=docker)](https://docs.docker.com/compose/install/)

## Components

1. **Frontend**: A simple web frontend built with [![React.js](https://img.shields.io/badge/React.js-16.13.1-blue?logo=react)](https://reactjs.org/).
2. **Backend**: A Node.js backend API.
3. **Database**: MongoDB as the database.

## Running the Application

1. Clone this repository:
   ```bash
   git clone https://github.com/Dhruv279/21BCP132_Cloud_LAB_IA_2.git
   cd 21BCP132_Cloud_LAB_IA_2
   ```

2. Build and start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build Docker images for the frontend and backend (if Dockerfiles are provided).
   - Start containers for the frontend, backend, and MongoDB.
   - Expose the frontend on port 3000.

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Docker Compose Configuration

The `docker-compose.yml` file defines the services and their configurations:

- **frontend**:
  - Builds the frontend image using `Dockerfile.frontend`.
  - Exposes port 3000.
  - Links to the backend service.
- **backend**:
  - Builds the backend image using `Dockerfile.backend`.
  - Exposes port 5000.
  - Links to the MongoDB service.
- **mongo**:
  - Uses the official MongoDB image.
  - Exposes port 27017.

## Project Structure

```
21BCP132_CLOUD_LAB_IA2
├── backend
│   ├── Dockerfile
│   ├── server.js
├── frontend
│   ├── Public
│   ├── src
│   │   ├── Components
│   └── package.json
├── database
│   ├── Dockerfile
│   └── init.js
└── docker-compose.yml

```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
