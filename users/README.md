# Users Simulation Service

This service simulates users for the application. It is a simple service that generates a base number of users, and then continues to spawn new users at a random interval. Each user has a random interval for when they will make a request for energy usage data. The users will continue to make requests until they are killed by the service.

---

## Project Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yaml
├── package-lock.json
├── package.json
├── src
│   ├── config.ts
│   ├── index.ts
│   └── users
│       ├── index.ts
│       ├── user.ts
│       ├── users.router.v1.ts
│       ├── users.service.ts
│       └── users.types.ts
└── tsconfig.json
```

---

# Endpoints

## GET `/api/v1/users`

This endpoint is used to get the list of users that are currently registered with the service.

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:6000/api/v1/users
```

## GET `/api/v1/users/:userId`

This endpoint is used to get the information for a single user.

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:6000/api/v1/users/1
```