# 🗳️ Polling App

A full-stack polling system where users can create polls, vote, and view results — built using **Spring Boot**, **ReactJS**, **MySQL**, and **Docker** with Cypress test coverage.

---

## 🚀 Features

- Create polls with 4 options  
- Vote on any poll  
- View real-time vote counts  
- Delete unwanted polls  
- Clean UI with Bootstrap styling  
- Data persistence via Docker volumes  
- End-to-end Cypress tests (manual run)

---

## 🛠️ Tech Stack

**Frontend**:  
- ReactJS  
- Axios  
- Bootstrap

**Backend**:  
- Java 21 + Spring Boot  
- Spring Data JPA  
- RESTful APIs

**Database**:  
- MySQL 8 (Dockerized)

**Testing**:  
- Cypress (UI E2E)

**DevOps**:  
- Docker  
- Docker Compose

---

## 🐳 Run with Docker

> Ensure Docker is installed & running

```bash
docker-compose up --build
```

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/polls
- **Database**: MySQL 8 (on port 3308)

> Data is saved via Docker volume `polling_mysql_data`

---

## ✅ Run Cypress Tests

```bash
cd frontend/polling-ui
npx cypress open
```

> Cypress UI will open. Run the tests under `PollFlow.cy.js`

### Test Cases:

- Create a new poll
- Vote on a poll
- Navigate to results
- Delete a poll

---

## 📂 Project Structure

```
polling-app/
├── backend/
│   └── polling-backend/         # Spring Boot Backend
│       └── Dockerfile
├── frontend/
│   └── polling-ui/              # ReactJS Frontend
│       ├── cypress/             # Cypress tests
│       └── Dockerfile
├── docker-compose.yml           # Docker Orchestration
└── README.md
```

---

## ✨ Screenshots

> (Optional) Add UI preview images or Cypress test run screenshots here

---

## 👨‍💻 Author

**Manish Kumar**  
*Full Stack Developer | SDET*

GitHub: [ManishKumar-1972](https://github.com/ManishKumar-1972)

---

> ⭐ If you like this project, consider giving it a star on GitHub!
