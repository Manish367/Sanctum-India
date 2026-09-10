# Deploying Sanctum India

Monorepo: `client/` (Vite + React) → Vercel, `server/` (Express + Mongoose) → Render,
database → MongoDB Atlas.

---

## 1. MongoDB Atlas

- A cluster already exists (`Cluster0`, database name `sanctum-india`).
- **Network Access** must allow Render's outbound IPs. The simplest option is to keep
  `0.0.0.0/0` in the IP Access List (already added). It's acceptable for a portfolio project
  because the database user's credentials still gate access; tighten it later if you want.
- The backend **auto-seeds all 65 temples on first boot** if the `temples` collection is empty,
  so there's nothing to import manually.
- Free (M0) clusters **auto-pause after 60 days with no connections**. If the site ever shows
  empty cards, check the Atlas console and click *Resume*.

## 2. Backend → Render

Create a new **Web Service** from this repo.

| Setting | Value |
| --- | --- |
| Root Directory | `server` |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Node version | 20+ (set by `engines` in `server/package.json`) |

Environment variables:

| Key | Value |
| --- | --- |
| `USE_MEMORY_MONGO` | `false` |
| `MONGO_URI` | `mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/sanctum-india?retryWrites=true&w=majority` |
| `CLIENT_ORIGIN` | `https://<your-app>.vercel.app` (comma-separate to allow more than one, e.g. add `http://localhost:5190` for local testing against prod) |

Do **not** set `PORT` — Render provides it and the server reads `process.env.PORT`.

After deploy, the API base is `https://<your-service>.onrender.com/api`
(health check: `GET /api/health` → `{"status":"ok"}`).

> Render's free tier sleeps after ~15 min idle; the first request after that takes ~50s to wake.

## 3. Frontend → Vercel

Import the repo as a new project.

| Setting | Value |
| --- | --- |
| Root Directory | `client` |
| Framework Preset | Vite (auto-detected) |
| Build Command | `npm run build` (default) |
| Output Directory | `dist` (default) |

Environment variable:

| Key | Value |
| --- | --- |
| `VITE_API_URL` | `https://<your-service>.onrender.com/api` — **required**; without it the deployed app calls `/api` on the Vercel domain and gets 404s |

`client/vercel.json` already handles SPA routing (deep links like `/jyotirlingas/somnath` won't 404 on refresh).

## 4. Order of operations

1. Push to GitHub.
2. Deploy the backend on Render, copy its URL.
3. Deploy the frontend on Vercel with `VITE_API_URL` = `<render-url>/api`.
4. Set `CLIENT_ORIGIN` on Render to the Vercel URL, redeploy the backend (or trigger a restart).
5. Load the Vercel URL — temple cards should populate from Atlas.

## Local development (unchanged)

```bash
# terminal 1
cd server && cp .env.example .env && npm install && npm run dev
# terminal 2
cd client && npm install && npm run dev   # http://localhost:5190
```

No `client/.env` is needed locally — Vite proxies `/api` to `http://localhost:4100`.
