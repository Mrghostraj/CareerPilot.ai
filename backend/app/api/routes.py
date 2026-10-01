from fastapi import APIRouter

from app.schemas.placement import (
    JobDescriptionInput,
    JobProfile,
    MatchReport,
    ResumeProfile,
)
from app.services.matching import match_profile

router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "careerpilot-api"}


@router.post("/profiles/preview", response_model=ResumeProfile)
def preview_profile(profile: ResumeProfile) -> ResumeProfile:
    """Validate and echo a user-confirmable profile; document extraction is a later slice."""
    return profile


@router.post("/jobs/preview", response_model=JobProfile)
def preview_job(job: JobDescriptionInput) -> JobProfile:
    """Create a deterministic preview from pasted job text."""
    title = job.title or "Target role"
    skills = sorted({skill.strip() for skill in job.required_skills if skill.strip()})
    return JobProfile(title=title, company=job.company, required_skills=skills, preferred_skills=[])


@router.post("/matching/preview", response_model=MatchReport)
def preview_match(profile: ResumeProfile, job: JobProfile) -> MatchReport:
    """Explain skill evidence overlap without claiming hiring probability or ATS equivalence."""
    return match_profile(profile, job)
