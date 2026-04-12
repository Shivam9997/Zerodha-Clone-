# Zerodha Clone

A full-stack online trading platform clone with a landing page, a trading dashboard, and an Express/MongoDB backend.

## Project Structure

```
├── Backend/      → Express API (Node.js + MongoDB)
├── dashboard/    → Trading dashboard (React + Vite)
└── frontend/     → Landing page (React + Vite + Bootstrap)
```

---

## Deploy on Render (Free Tier)

### Step 1 — Connect GitHub repo
Go to [render.com](https://render.com) → **New → Blueprint** → connect your GitHub repo.  
Render will detect `render.yaml` and create all 3 services automatically.

### Step 2 — Set environment variables

#### Backend service (`zerodha-backend`)
| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string |
| `TOKEN_KEY` | A long random secret string |
| `ALLOWED_ORIGINS` | Comma-separated deployed URLs, e.g. `https://zerodha-dashboard.onrender.com,https://zerodha-frontend.onrender.com` |

#### Dashboard service (`zerodha-dashboard`)
| Key | Value |
|-----|-------|
| `VITE_API_URL` | e.g. `https://zerodha-backend.onrender.com` |

#### Frontend service (`zerodha-frontend`)
| Key | Value |
|-----|-------|
| `VITE_API_URL` | e.g. `https://zerodha-backend.onrender.com` |
| `VITE_DASHBOARD_URL` | e.g. `https://zerodha-dashboard.onrender.com` |

### Step 3 — Deploy
Click **Apply** — Render will build and deploy all 3 services.

---

## Local Development

```bash
# Backend (port 3000)
cd Backend
npm install
npm run dev

# Dashboard (port 5173)
cd dashboard
npm install
npm run dev

# Frontend (port 5174)
cd frontend
npm install
npm run dev
```

Create `Backend/.env`:
```
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
```
