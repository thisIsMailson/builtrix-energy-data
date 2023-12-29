Fullstack rest API in TypeScript and Go(Next 14, Go, Postgres, Docker)
Overview

Hey there! Welcome to our awesome project! 🚀 This project is a cool mix of a Go backend, a PostgreSQL database, and a Next.js 14 frontend. Together, they create a magical experience for handling users with all the CRUD (Create, Read, Update, Delete) actions.
Getting Started
Prerequisites

To join the fun, make sure you have the following installed on your machine:

    Docker
    Docker Compose

Quick Setup

    Clone this project to your local machine.
    Navigate to the project directory.

Starting the Show
Running the Application

Execute the following commands to start the application:
docker-compose up -d db  # Start the database
docker-compose up        # Start the Go backend, PostgreSQL, and Next.js frontend

Database Connection

To connect to the PostgreSQL database, use the following command:
docker exec -it db psql -U postgres

docker exec -it db psql -U postgres
Environment Variables
Next.js (nextapp)

    NEXT_PUBLIC_API_URL: URL for the Go backend API (default: http://localhost:8000)

Go Backend (goapp)

    DATABASE_URL: PostgreSQL database connection URL

PostgreSQL Database (db)

    POSTGRES_USER: PostgreSQL username (default: postgres)
    POSTGRES_PASSWORD: PostgreSQL password (default: postgres)
    POSTGRES_DB: PostgreSQL database name (default: postgres)

Additional Notes

    Ensure that the necessary dependencies, such as Docker and Docker Compose, are installed on your machine.
    The project contains Dockerfiles (next.dockerfile and go.dockerfile) for building the Next.js frontend and Go backend images.