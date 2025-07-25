# Jenius Website

Production: [https://jenius-demo.vercel.app/](https://jenius-demo.vercel.app/)

## Getting Started

### Prerequisites

- **IDE Recommendation:** We recommend using Visual Studio Code (VSCode) as it offers great extensions for TypeScript and Tailwind CSS, which are automatically suggested when the project is opened.
- **Package Manager:** Ensure you have [bun](https://bun.sh/) installed.

### Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone [https://github.com/ufsasewebmaster/UF-SASE-Website](https://github.com/TheRickyZhang/JeniusDemo)
cd Jenius-Demo
```

### Installing Dependencies

After cloning the repository, install the required dependencies:

```bash
bun install
```

### Setting Up the Environment Variables

Create a `.env` file in the root directory of the project with this format. For production values, refer to our env document, or otherwise refer to the corresponding documentation for generation. 
```
// file:local.db for locan database
DATABASE_URL=""
DATABASE_AUTH_TOKEN=""
```

### Initializing the Local Database/Environment

To set up the local SQLite database (the `file:local.db` outlined above) and apply the schema, run:

```bash
bun db:all
```
Note in the package.json that this sets up everything related to the database.

To start the development server:

```bash
bun dev
```

The application should now be running at `http://localhost:3000`.

**Note:** Ensure that you are generally not on the production database unless necessary for development.

### Deploying to Vercel

1. We automatically deploy the project to Vercel by pushing changes to the main branch. 

## Project Structure

### Shared

The `shared` directory contains code that is used by both the frontend and backend, including environment variable validation using Zod.

### Server

The backend entry point is `./server/index.ts`. It initializes the Hono app and sets up the database client. The database schema is defined in `./server/db/schema.ts`.

### Frontend

The frontend entry point is `./client/index.tsx`, which serves as the main React entry point. Routes are defined in the `./client/routes` folder, following the structure recommended by Tanstack Router. All static assets are located in the `./public` folder.
