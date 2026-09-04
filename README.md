# 🏍️ ApexRiders — Premium Sports Bike Booking Platform

A fully responsive, dark-themed superbike rental booking website — built with vanilla HTML/CSS/JS, containerized with Docker, and deployed with **Docker Swarm** for horizontal scalability.

> Browse a curated fleet of hypersport, supersport, track-spec, and naked superbikes, compare specs side-by-side, and complete a full multi-step booking flow — from date selection to a digital reservation pass.

---

## 📖 Overview

ApexRiders is a front-end e-commerce–style booking experience for a fictional premium motorcycle rental brand. It simulates a real-world rental platform: users can search and filter a bike fleet, view detailed telemetry/specs, compare multiple bikes, add gear/insurance add-ons, and walk through a guided booking wizard that ends in a shareable digital booking pass.

The project doubles as a DevOps exercise — the static site is packaged into an Nginx-based Docker image and deployed as a **replicated service across a Docker Swarm cluster**, demonstrating a full path from static front-end code to a scaled, fault-tolerant deployment.

---

## ✨ Features

### Rider-Facing
- **Superbike fleet catalog** — dynamically rendered bike cards with filtering by category (Hypersport, Supersport, Track-Spec, Naked Superbike)
- **Live search & sort** — search by name/brand, sort by price or horsepower
- **Spec sheet modal** — power, torque, top speed, 0–100 km/h, engine CC, weight, and electronics/rider-aid details per bike
- **Side-by-side comparison tool** — select multiple bikes and compare telemetry in a sticky comparison bar + modal
- **5-step booking wizard**:
  1. Pickup hub & rental dates
  2. Gear & add-ons (helmet, leather suit, GoPro kit, zero-deductible waiver)
  3. Rider info & license verification
  4. Live cost breakdown (rental cost, deposit, tax, grand total)
  5. Digital booking pass with a unique confirmation code (printable)
- **My Bookings panel** — view all confirmed reservations
- **Pickup hub locator** — track circuit hubs, downtown HQ, and airport express pickup
- **Rider reviews & FAQ accordion** — licensing requirements, deposits, gear policy, track access

### Engineering
- Fully responsive layout built on **Bootstrap 5**
- Custom dark "glassmorphism" UI theme with gradient accents
- Containerized with a lightweight **Nginx Alpine** image
- Deployed as a **replicated Docker Swarm service** (3 replicas, auto-restart on failure)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup / Styling | HTML5, CSS3, [Bootstrap 5.3.2](https://getbootstrap.com/) |
| Icons | [Font Awesome 6.4.2](https://fontawesome.com/) |
| Interactivity | Vanilla JavaScript |
| Web Server | Nginx (Alpine) |
| Containerization | Docker |
| Orchestration | Docker Swarm |

---

## 📁 Project Structure

```
Sports_Bike_Booking/
├── images/              # Fleet & UI imagery
├── index.html           # Main site markup (fleet, booking wizard, modals)
├── styles.css           # Custom dark theme styling
├── app.js               # Fleet rendering, filtering, booking logic
├── Dockerfile            # Nginx Alpine build for the static site
├── docker-compose.yml    # Docker Swarm service definition
└── .dockerignore
```

---

## 🚀 Getting Started

### Run locally (no Docker)
Just open `index.html` in a browser — no build step required.

```bash
git clone https://github.com/GideonRabi1319/Sports_Bike_Booking.git
cd Sports_Bike_Booking
open index.html   # or double-click the file
```

### Run with Docker

```bash
# Build the image
docker build -t gideonrabi1319/sports-booking:v1 .

# Run a single container
docker run -d -p 8085:80 gideonrabi1319/sports-booking:v1
```

Visit **http://localhost:8085**

### Deploy with Docker Swarm

```bash
# Initialize a swarm (if not already active)
docker swarm init

# Deploy the stack (3 replicas, auto-restart on failure)
docker stack deploy -c docker-compose.yml apexriders
```

`docker-compose.yml`:
```yaml
version: "3.8"
services:
  web:
    image: gideonrabi1319/sports-booking:v1
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
    ports:
      - "8085:80"
```

Check the running service:
```bash
docker stack services apexriders
docker service ps apexriders_web
```

---

## 🧭 Roadmap

- [ ] Backend API for persistent bookings (currently front-end only)
- [ ] Payment gateway integration
- [ ] CI/CD pipeline (Jenkins/GitHub Actions) for automated image builds
- [ ] Multi-node Swarm cluster with load balancing across servers
- [ ] Infrastructure-as-Code setup with Terraform/Ansible

---

## 👤 Author

**Gideon Rabi**
GitHub: [@GideonRabi1319](https://github.com/GideonRabi1319)

---

## 📄 License

This project is available for personal/portfolio use. Add a license of your choice (MIT recommended) if you plan to open it up further.
