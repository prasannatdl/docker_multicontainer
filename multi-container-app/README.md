# Multi-Container Docker Application

This is a simple multi-container application using Docker Compose that includes:

- A Node.js backend
- A React frontend
- A MongoDB database

## Folder Structure

```
multi-container-app/
├── backend/
│   └── Dockerfile
├── frontend/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Instructions

1. Build and run the app locally:

```bash
docker-compose up -d --build
```

2. Access the services:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017

Make sure to map your backend API and MongoDB connection accordingly in your app code.

## Deploy to AWS EC2

1. Launch an EC2 Ubuntu instance.
2. Install Docker and Docker Compose.
3. Upload this project folder.
4. Run: `docker-compose up -d --build`

