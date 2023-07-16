
# Microservices - Marketplace

This project is a demonstration for microservices use.

We have 2 'domain' services (product and order), with an authentication service directly connected to the API Gateway.
Databases are runned through *Docker* (MariaDB) and all services are connected using *Protocol Buffers* and *gRPC*.




## Run Locally

Clone the project

```bash
  git clone https://github.com/twiney94/microservices-4S2
```

Go to the project directory

```bash
  cd microservices-4S2
```

Install dependencies

```bash
  npm i && cd api-gateway && npm i && cd .. && cd auth-service && npm i && cd .. && cd order-service && npm i && cd .. && cd product-service && npm i && cd ..
```

Start the databases

```bash
  cd db && docker-compose up -d && cd ..
```

Run the API and the related microservices

```bash
For this you must open 5 bash and cd inside each running directory (API Gateway and services) and run this command:
npm run start:dev
```


## Requirements

- Node.js (18.6.x)
- npm (9.6.x)
- Docker (20.10.x)
## API Diagram

![Logo](https://i.ibb.co/tz2zmz7/Diagramme-sans-nom-drawio.png)


## API Reference

BASE URI : http://localhost:3000

#### Register a new user

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**. User email   |
| `password`| `string` | **Required**. Password     |

#### Log In

```http
  PUT /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**. User email   |
| `password`| `string` | **Required**. Password     |

Returns a JWT Token for use in secured routes.

#### Create Product

```http
  POST /product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`   | `string` | **Required**. Product name   |
| `ref`| `string` | **Required**. Serial reference for the product     |
| `price`   | `float` | **Required**. Price in USD   |
| `stock`| `integer` | **Required**. Amount of available units     |

#### Create Order

```http
  POST /order
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productId`   | `number` | **Required**. User email   |
| `quantity`| `number` | Quantity to be decreased (default = 1) |

Creates an order for the desired product. Be careful if the product stock is 0 it will return an error of this type:
```json
{
    "status": 409,
    "error": [
        "Stock too low"
    ]
}
```



## Authors

- [@twiney94](https://www.github.com/twiney94)
- [@danielamoudokpo](https://www.github.com/danielamoudokpo)
- [@fodekar](https://www.github.com/fodekar)
