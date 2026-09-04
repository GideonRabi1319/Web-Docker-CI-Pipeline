<div align="center">

# Web-Docker-CI-Pipeline

**A Dockerized web application with an automated Jenkins CI pipeline**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://hub.docker.com/r/gideonrabi13/sports-booking)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)](#ci-pipeline)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)](#tech-stack)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](#license)

[![Docker Pulls](https://img.shields.io/docker/pulls/gideonrabi13/sports-booking?style=flat-square)](https://hub.docker.com/r/gideonrabi13/sports-booking)
![Last Commit](https://img.shields.io/github/last-commit/GideonRabi1319/Web-Docker-CI-Pipeline?style=flat-square)

[Overview](#overview) • [Tech Stack](#tech-stack) • [CI Pipeline](#ci-pipeline) • [Getting Started](#getting-started) • [Roadmap](#roadmap)

</div>

---

## Overview

**ApexRiders** is a front-end superbike rental booking platform, built to demonstrate a complete path from application code to a containerized, automatically-built deployment artifact.

This repository packages the application into an **Nginx Alpine** Docker image and automates the build process using a **Jenkins CI pipeline**. On every push to `main`, Jenkins checks out the latest code, builds a new image, and pushes it to Docker Hub — without any manual intervention.

This project focuses on the **CI** stage of CI/CD: automated build, tag, and push. A deployment stage is planned as a future enhancement (see [Roadmap](#roadmap)).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup / Styling | HTML5, CSS3, Bootstrap 5 |
| Interactivity | Vanilla JavaScript |
| Web Server | Nginx (Alpine) |
| Containerization | Docker |
| CI Automation | Jenkins (Declarative Pipeline) |
| Version Control | Git, GitHub |

---

## Project Structure

```
Web-Docker-CI-Pipeline/
├── index.html          # Main site markup
├── styles.css           # Styling
├── app.js               # Front-end logic
├── Dockerfile            # Nginx Alpine build definition
├── Jenkinsfile           # CI pipeline definition
├── docker-compose.yml    # Local multi-container reference (optional)
└── .dockerignore
```

---

## CI Pipeline

The `Jenkinsfile` defines a declarative pipeline with the following stages:

| Stage | Description |
|---|---|
| **Checkout** | Pulls the latest code from GitHub |
| **Build Docker Image** | Builds the image from the `Dockerfile`, tagged with the Jenkins build number and `latest` |
| **Login to Docker Hub** | Authenticates using credentials stored in Jenkins' Credentials Store |
| **Push Docker Image** | Pushes both tags to Docker Hub |

**Trigger:** the pipeline runs automatically on every push to `main`, via a GitHub webhook configured against Jenkins' `/github-webhook/` endpoint.

**Credential management:** Docker Hub authentication is handled entirely through Jenkins' Credentials Store. No secrets are hardcoded in the pipeline or repository.

---

## Getting Started

### Run locally (no Docker)
```bash
git clone https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline.git
cd Web-Docker-CI-Pipeline
open index.html
```

### Build and run with Docker
```bash
# Build the image
docker build -t gideonrabi13/sports-booking:latest .

# Run a container
docker run -d -p 8085:80 gideonrabi13/sports-booking:latest
```
The application will be available at `http://localhost:8085`.

### Pull the CI-built image directly
```bash
docker pull gideonrabi13/sports-booking:latest
docker run -d -p 8085:80 gideonrabi13/sports-booking:latest
```

---

## Roadmap

- [ ] Automated GitHub webhook trigger (in progress, currently tested via ngrok)
- [ ] Multibranch Pipeline support
- [ ] Deployment stage (Docker Swarm / Kubernetes)
- [ ] Build notifications (Slack / email)
- [ ] Infrastructure-as-Code setup with Terraform/Ansible

---

## Author

**Gideon Rabi S**

[GitHub](https://github.com/GideonRabi1319) · [LinkedIn](https://www.linkedin.com/in/gideonrabi1319/)

---

## License

This project is available for personal and portfolio use. A formal license (MIT recommended) can be added if the project is opened up for broader use.
