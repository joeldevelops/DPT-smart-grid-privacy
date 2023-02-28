# Cloud Server

This project serves as the entrypoint for the energy usage data. It is responsible for receiving the data from the detector for user's usage data, building, and sending the response.

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
│   ├── energy
│   │   ├── energy.router.v1.ts
│   │   ├── energy.service.ts
│   │   ├── energy.types.ts
│   │   └── index.ts
│   └── index.ts
└── tsconfig.json
```

---

# Endpoints

## GET `/api/v1/energy/usage`

This endpoint is used to get the energy usage data from the fog nodes and users. 

No headers or auth are required for this endpoint.

### Usage

```bash
curl -X GET http://localhost:3000/api/v1/energy/usage
```