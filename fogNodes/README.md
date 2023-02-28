# Fog Nodes

This service is a NodeJS express application that simulates edge computing nodes. It is responsible for retrieving the data from the users and sending it to the Cloud Server.

---

# Project Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yaml
├── migrations
│   └── 20230228115239-user-registration.js
├── package-lock.json
├── package.json
├── seeders
│   └── 20230228115655-test-registers.js
├── src
│   ├── config.ts
│   ├── db
│   │   ├── config.js
│   │   └── index.ts
│   ├── index.ts
│   ├── register
│   │   ├── index.ts
│   │   ├── register.model.ts
│   │   ├── register.router.v1.ts
│   │   └── register.service.ts
│   └── usage
│       ├── index.ts
│       ├── usage.router.v1.ts
│       ├── usage.service.ts
│       └── usage.types.ts
└── tsconfig.json
```

---

# Endpoints

## GET `/api/v1/usages`

This endpoint is used to get the energy usage data from the registered users. 

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:4000/api/v1/usages
```

## GET `/api/v1/usages/:userId`

This endpoint is used to get the energy usage data from a single registered user. 

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:4000/api/v1/usages/1
```

## POST `/api/v1/register`

This endpoint is used to register a user with the fog node. Can be called many times by the same user without conflicts. 

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X POST http://localhost:4000/api/v1/register -d '{"userId": 1, "name": "John Doe", "registeredDomain": "user.1.region.TLD.com"}'
```