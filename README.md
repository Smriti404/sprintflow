# SprintFlow

SprintFlow is a Jira-inspired Agile project management platform for teams to manage projects, sprints, tasks, and collaboration with a modern Kanban workflow.

## Features
- JWT authentication with role-based access
- Projects, sprints, tasks, and team management
- Drag-and-drop Kanban board
- Dashboard analytics with charts
- Responsive SaaS-style UI

## Tech Stack
**Frontend**: React (Vite), React Router, Tailwind CSS, shadcn/ui, Redux Toolkit, Axios, Recharts, Framer Motion, dnd-kit

**Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, dotenv, cors

## Folder Structure
```
client/
  src/
    api/
    assets/
    components/
    layouts/
    pages/
    hooks/
    redux/
    routes/
    utils/
    context/
    constants/
    styles/
    main.jsx
server/
  config/
  controllers/
  middleware/
  models/
  routes/
  services/
  utils/
  validators/
  app.js
  server.js
```

## Setup
### 1) Backend
```
cd server
npm install
npm run dev
```

### 2) Frontend
```
cd client
npm install
npm run dev
```

## Environment Variables
### Server (.env)
```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/projects
- POST /api/projects
- PUT /api/projects/:id
- DELETE /api/projects/:id
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
- GET /api/sprints
- POST /api/sprints
- PUT /api/sprints/:id
- GET /api/users
- PUT /api/users/profile

## Seed Data
```
cd server
npm run seed
```

## Deployment
**Frontend**: Vercel

**Backend**: Render or Railway

**Database**: MongoDB Atlas

## Demo Credentials
- Email: admin@sprintflow.dev
- Password: Password123!

## Screenshots
Add your screenshots here.
