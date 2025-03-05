# TO-DO App


A full-stack Todo application with a backend built using Node.js, Express.js, and TypeScript, and a frontend built with React.js, Redux Toolkit, and TypeScript.

## Technologies Used:
- Backend: Node.js, Express.js, TypeScript
- Frontend: React.js, Redux Toolkit, TypeScript
- Database: In-memory (PostgreSQL can be added later if needed)
- Additional Tools: Zod for validation, UUID for unique ID generation

## Features:
- Add, update, delete, and list Todos.
- Categorize todos.
- Sort todos by creation or due date.
- Filter todos by their completion status.

## Setup Instructions

### Set Up Development Environment on Linux 

1. Update Packages:

   ```bash
   sudo apt update && sudo apt upgrade -y

   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs
   node -v  # Verify installation
   npm -v   # Verify installation
   npm install --global yarn

### Set Up the Backend

   mkdir todo-backend && cd todo-backend
   yarn init -y  # Initialize project

   yarn add express cors dotenv helmet morgan zod

   yarn add -D typescript ts-node nodemon @types/node @types/express @types/cors @types/morgan @types/dotenv

   npx tsc --init

   mkdir -p src/controllers src/routes src/models src/middleware src/config
   touch src/server.ts src/config/db.ts src/routes/todoRoutes.ts src/controllers/todoController.ts

## Set Up the Frontend

### Navigate to the Frontend Folder:
  cd ..
  npx create-vite todo-frontend --template react-ts
  cd todo-frontend
  yarn install

### Install Required Dependencies

  yarn add redux react-redux @reduxjs/toolkit axios react-router-dom

## Run the Application
  ### Start the Backend Server:
  ### Navigate to the backend folder and start the server:
  cd todo-backend
  yarn dev

  ### Start the Frontend Server:
  ### Navigate to the frontend folder and start the frontend:
  cd ../todo-frontend
  yarn dev

  In your browser, navigate to: http://localhost:5173/

## Frontend Overview:
    Todo List: Display, edit, delete, and sort todos by creation or due date.
    Filter & Sort: Filter todos based on their completion status and sort by due date or creation date.
    Add Todo: Add a new todo, assign a category, set a due date, and more.









