# 🛡 ENTERPRISE SOAR v3 — Live SOC Command Center

> AI-Powered Security Orchestration, Automation & Response (SOAR) Platform  
> Real-Time Threat Monitoring • IOC Enrichment • SOC Visualization

---

## 📖 Overview

Enterprise SOAR v3 is a full-stack cybersecurity project that simulates a real-world Security Operations Center (SOC) environment.

The system ingests Indicators of Compromise (IOCs), enriches them using threat scoring logic, stores incidents in MongoDB, and streams real-time updates to a live SOC dashboard using WebSockets.

This project demonstrates real-time monitoring, event-driven architecture, and incident lifecycle modeling.

---

## ✨ Features

### 🚨 Alert Ingestion
- Submit:
  - Source IP
  - Username
  - Description
- Backend processes and scores the incident
- Stores it in MongoDB
- Broadcasts live updates via WebSocket

---

### ⚡ Real-Time Updates (WebSocket)
- Powered by Socket.io
- No page refresh required
- Instantly updates:
  - Live SOC event terminal
  - AI Threat Score animation
  - Severity counters
  - Analytics chart
  - Global threat map

---

### 🧠 AI Threat Score Animation
- Displays dynamic anomaly percentage
- Smooth animated scoring effect
- Simulates automated threat intelligence engine

---

### 📊 Threat Analytics Dashboard
- Doughnut chart visualization (Chart.js)
- Displays severity distribution:
  - Low
  - Medium
  - High
  - Critical
- Live incident counters

---

### 🌍 Global Threat Map
- Leaflet.js integration
- Real-time threat plotting
- Severity color-coded markers:
  - 🟢 Low
  - 🟡 Medium
  - 🟠 High
  - 🔴 Critical (blinking + sound alert)

---

### 🔊 Critical Alert System
- Visual blinking escalation
- Sound notification trigger
- SOC-style immediate alert simulation

---

## 🏗 Tech Stack

### Frontend
- HTML5
- Vanilla JavaScript
- Chart.js
- Leaflet.js
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io

---

## 🗂 Project Structure

```
enterprise-soar/
│
├── server.js
├── models/
│   └── Incident.js
├── routes/
│   └── alerts.js
├── services/
│   └── enrichment.js
├── public/
│   └── index.html
└── package.json
```

---

## ⚙ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/enterprise-soar.git
cd enterprise-soar
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Ensure MongoDB is running locally:

```bash
mongod
```

Or configure MongoDB Atlas and update your connection string.

---

### 4️⃣ Start Backend Server

```bash
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

### 5️⃣ Open Application

Navigate to:

```
http://localhost:5000
```

You should now see the Live SOC Command Center.

---

## 🧪 Example Test IPs

Safe:
```
8.8.8.8
1.1.1.1
```

Suspicious:
```
185.220.101.1
45.146.165.37
```

Observe:
- AI score animation
- Severity classification
- Real-time terminal logs
- Chart updates
- Threat map plotting
- Critical alert (visual + sound)

---

## 🔍 Severity Logic

| Combined Score | Severity |
|---------------|----------|
| 0 – 10        | Low      |
| 11 – 25       | Medium   |
| 26 – 50       | High     |
| 51+           | Critical |

---

## 🧠 Skills Demonstrated

- Event-driven architecture
- WebSocket real-time communication
- REST API development
- MongoDB schema design
- Security incident lifecycle modeling
- SOC dashboard visualization
- Threat classification logic
- Full-stack system integration

---

## 🚀 Future Improvements

- VirusTotal API integration
- AbuseIPDB enrichment
- Geo-IP backend integration
- Heatmap visualization
- JWT authentication
- Role-based access control
- Dockerized deployment
- Cloud deployment (AWS/GCP)

---

## 👨‍💻 Author

Cybersecurity-focused full-stack project simulating enterprise-grade SOC monitoring systems.
