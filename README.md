# TodoList

A simple full-stack Todo application built with the MERN-style stack (MongoDB, Express, React, Node.js).

Add tasks, view them in a list, and delete completed ones — clean and minimal.

## Features

- Add tasks with a title and description
- View all tasks in a list
- Delete tasks
- Fast, lightweight React frontend built with Vite

## Tech Stack

**Frontend**
- React 19
- React Router DOM
- Vite

**Backend**
- Node.js
- Express 5
- MongoDB (via the official `mongodb` driver)
- CORS
- dotenv

## Project Structure

```
todomern/
├── README.md
├── backend/
│   ├── .env.example
│   ├── dbconfig.js
│   ├── index.js
│   └── package.json
└── frontend/
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        ├── components/
        │   ├── AddTask.jsx
        │   ├── List.jsx
        │   └── NavBar.jsx
        └── style/
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

### 1. Clone the repo

```bash
git clone https://github.com/realmayanknarang/TodoList.git
cd TodoList/todomern
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:3200`.

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

## API Endpoints

| Method | Endpoint      | Description       |
|--------|---------------|-------------------|
| GET    | `/tasks`      | Get all tasks     |
| POST   | `/add-task`   | Add a new task    |
| DELETE | `/delete/:id` | Delete a task by ID |

## Future Improvements

- [ ] Edit/update existing tasks
- [ ] Mark tasks as complete/incomplete
- [ ] Add form validation and error messages on the frontend
- [ ] Add pagination or search for large task lists

## Author

**Mayank Narang**

## License

This project is licensed under the ISC License.
