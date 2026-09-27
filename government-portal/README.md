# Government Portal – Full Stack Starter

A complete MVP government portal based on the six requested sections:
Home, Cabinet, Institutions, About, Media, Contact.

## Stack
- Frontend: React + Vite + React Router
- Styling: Tailwind CSS v4
- Backend: Node.js + Express
- Database: PostgreSQL
- Authentication: JWT + bcrypt
- API client: fetch

## Run

### 1. Database
Create a PostgreSQL database named `government_portal`, then run:

```bash
psql -U postgres -d government_portal -f backend/database.sql
```

### 2. Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Edit `.env` with your PostgreSQL credentials.

### 3. Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

### Default admin
Username: `admin`
Password: `Admin@123`

Change the password before production.

## API
GET /api/cabinet
GET /api/institutions
GET /api/media
POST /api/contact
POST /api/auth/login

Admin CRUD endpoints require JWT:
POST/PUT/DELETE for cabinet, institutions and media.

## Frontend styling
The frontend uses Tailwind CSS v4 with the Vite plugin. No TypeScript is used.

## Deploy frontend to Vercel

The React frontend is configured for Vercel with `frontend/vercel.json` so routes such as `/cabinet` work after refresh.

1. Push the project to GitHub.
2. In Vercel, import the repository.
3. Set **Root Directory** to `frontend`.
4. Use these settings:
	- Framework preset: `Vite`
	- Build command: `npm run build`
	- Output directory: `dist`
5. Add this Vercel environment variable:

```text
VITE_API_URL=https://your-deployed-backend-domain.com/api
```

Deploy the backend separately on a Node-compatible host such as Render, Railway, or Fly.io. Set its `DATABASE_URL` and `JWT_SECRET` environment variables, then use its public URL for `VITE_API_URL`. The local `localhost` API URL will not work from the deployed Vercel site.
