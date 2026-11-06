# Card Collection API

A REST API to manage a personal trading card collection, built with **Node.js**, **Express** and **MongoDB**.

You can list all your cards in alphabetical order, search them by name, and fetch a single card by its id. This project is part of my journey learning the MERN stack.

## Tech stack

- Node.js
- Express 5
- MongoDB Atlas
- Mongoose
- ES Modules (`import` / `export`)

## Getting started

### Prerequisites

- Node.js 20.6 or later (required for the built-in `--env-file` option)
- A MongoDB database (for example a free cluster on MongoDB Atlas)

### Installation

```bash
git clone https://github.com/simonesbds/card-collection-api.git
cd card-collection-api
npm install
```

### Environment variables

Create a `.env` file in the project root with these variables:

```
PORT=3000
MONGODB_URI=your-mongodb-connection-string
```

The connection string must include the database name after `.mongodb.net/`, otherwise MongoDB will use a default database called `test`.

### Running the server

```bash
npm run dev    # development mode, restarts on file changes
npm start      # standard mode
```

The server starts only after the database connection succeeds, and exits with an error if the connection fails.

## API endpoints

| Method | Endpoint           | Description                             | Success response |
| ------ | ------------------ | --------------------------------------- | ---------------- |
| GET    | `/`                | Welcome message                         | Text             |
| GET    | `/api/cards`       | Returns all cards, sorted by name       | JSON array       |
| GET    | `/api/cards?name=` | Case-insensitive search by name         | JSON array       |
| GET    | `/api/cards/:id`   | Returns a single card by its MongoDB id | JSON object      |

### Error responses

| Status | When                                   |
| ------ | -------------------------------------- |
| 400    | The id is not a valid MongoDB ObjectId |
| 404    | No card exists with that id            |
| 500    | Internal server error                  |

A search with no results returns `200` with an empty array.

### Example

`GET /api/cards?name=dragon`

```json
[
  {
    "_id": "672b1f3e8c4d2a1b9e7f0a12",
    "name": "Blue-Eyes White Dragon",
    "game": "Yu-Gi-Oh",
    "rarity": "Ultra Rare",
    "quantity": 3
  },
  {
    "_id": "672b1f3e8c4d2a1b9e7f0a0e",
    "name": "Shivan Dragon",
    "game": "Magic",
    "rarity": "Rare",
    "quantity": 2
  }
]
```

`GET /api/cards/invalid-id`

```json
{
  "message": "Invalid Card ID format"
}
```

## Data model

| Field      | Type   | Required | Notes   |
| ---------- | ------ | -------- | ------- |
| `name`     | String | Yes      | Trimmed |
| `game`     | String | Yes      | Trimmed |
| `rarity`   | String | No       | Trimmed |
| `quantity` | Number | Yes      |         |

`createdAt` and `updatedAt` are added automatically for cards created through the API.

## Project structure

```
card-collection-api/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── cardController.js   # request handling logic
├── models/
│   └── Card.js             # Mongoose schema and model
├── routes/
│   └── cardRoutes.js       # card endpoints (Express Router)
├── server.js               # app setup and entry point
└── package.json
```

## What I learned

- Connecting an Express server to MongoDB with Mongoose
- Using environment variables to keep credentials out of the code
- Defining schemas and models with validation rules
- Building filters from query strings and sorting results
- Validating ObjectIds and returning meaningful status codes
- Keeping a clean Git history with Conventional Commits

## Next steps

- [ ] Add POST, PATCH and DELETE endpoints
- [ ] Add validation rules such as a minimum quantity
- [ ] Filter cards by game
- [ ] Build a React frontend for the collection
