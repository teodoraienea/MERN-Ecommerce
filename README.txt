# Full-Stack Application with Node.js/Express and React

This repository contains a full-stack web application built with Node.js/Express for the backend and React for the frontend.

## Features

- **Backend (Node.js/Express):**
  - RESTful API endpoints to interact with the application.
  - Serve static files and handle API requests.

- **Frontend (React):**
  - User interface built with React components.
  - Consumes API endpoints provided by the backend.

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd IBM  # Navigate into the project directory

2. Install dependencies for both backend and frontend:

        # Install backend dependencies
        cd backend
        npm install

        # Install frontend dependencies
        cd ../frontend
        npm install
Running the Application
Start both the backend and frontend servers concurrently:

        # From the root directory (IBM folder)
        npm start
This command uses concurrently and nodemon to run the backend server and the React development server concurrently.