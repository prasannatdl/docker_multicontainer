# Docker Assignments - Summary Report

## Task 1: Multi-Container Application
- *Objective*: Setup Node.js backend with MongoDB (and optionally React)
- *Tools*: Node.js, MongoDB, Docker Compose
- *Steps*:
  - Built backend and frontend Dockerfiles
  - Connected services using Docker Compose
- *Outcome*: Containers run together, backend connects to MongoDB

---

## Task 2: Docker Security
- *Objective*: Harden a Node.js container
- *Tools*: Docker, node:alpine
- *Steps*:
  - Used non-root user
  - Applied resource limits
- *Outcome*: Secure app runs on port 8080 with limited access

---

## Task 3: Optimized Docker Image
- *Objective*: Reduce image size using multi-stage build
- *Tools*: Docker, node:alpine
- *Steps*:
  - Created build and production stages
  - Added .dockerignore
- *Outcome*: Lightweight image created successfully

---

## Task 4: Custom Python Flask Image
- *Objective*: Build a Flask app container from scratch
- *Tools*: Python, Flask, Docker
- *Steps*:
  - Created app.py and requirements.txt
  - Built a Python image using slim base
- *Outcome*: Flask API runs and performs basic math operations

---

## Task 5: Docker Networking (Nginx + Flask)
- *Objective*: Setup inter-container communication
- *Tools*: Docker Compose, Flask, Nginx
- *Steps*:
  - Created a reverse proxy using Nginx
  - Routed traffic to Flask app
- *Outcome*: Accessed Flask app via port 80 using Nginx

---

## Task 6: Report & Documentation
- *Objective*: Summarize tasks and learning
- *Tools*: Markdown, GitHub
- *Outcome*: All tasks documented in one repo