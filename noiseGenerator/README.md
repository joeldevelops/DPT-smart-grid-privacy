# Noise Generation Service

This service generates noise for the simulation. It is a simple service that generates random numbers according to a Gaussian Distribution whenever users make a request for them.

---

# Project Structure

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
│   └── noise
│       ├── index.ts
│       ├── noise.router.v1.ts
│       └── noise.service.ts
└── tsconfig.json
```

---

# Endpoints

## GET `/api/v1/noise`

This endpoint is used to get the noise data for the users.

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:5005/api/v1/noise
```