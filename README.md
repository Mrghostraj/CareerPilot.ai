# CareerPilot AI — AI Placement OS

CareerPilot is being built as a personalized placement preparation workspace. This first slice establishes the web dashboard, API contracts, and a deterministic skills comparison that makes its evidence visible instead of presenting a hiring probability or opaque ATS score.

## Current MVP foundation

- Next.js dashboard shell with daily preparation, readiness, target job, and progress sections.
- FastAPI service with versioned endpoints and typed profile, job, and matching schemas.
- Deterministic matching preview that distinguishes explicit evidence from missing skills.
- Docker Compose development setup.

Document extraction, authentication, persistence, and AI generation are not connected yet. Extracted profile data must be user-confirmed before it is used for matching.

## Run locally

With Docker: `docker compose up --build`

If Docker is unavailable, install the services separately (use two terminals):

- Backend: `cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && uvicorn app.main:app --reload`
- Frontend: `cd frontend && npm install && npm run dev`

The API docs are at `http://localhost:8000/docs`.
