from pydantic import BaseModel, Field


class SkillEvidence(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    evidence: str = Field(default="", max_length=500)


class Project(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    summary: str = Field(default="", max_length=1000)
    skills: list[str] = Field(default_factory=list)


class ResumeProfile(BaseModel):
    name: str | None = Field(default=None, max_length=120)
    headline: str | None = Field(default=None, max_length=160)
    skills: list[SkillEvidence] = Field(default_factory=list)
    projects: list[Project] = Field(default_factory=list)
    education: list[str] = Field(default_factory=list)
    extraction_status: str = "user_confirmed"


class JobDescriptionInput(BaseModel):
    title: str | None = Field(default=None, max_length=160)
    company: str | None = Field(default=None, max_length=160)
    text: str = Field(min_length=1, max_length=30000)
    required_skills: list[str] = Field(default_factory=list)


class JobProfile(BaseModel):
    title: str
    company: str | None = None
    required_skills: list[str] = Field(default_factory=list)
    preferred_skills: list[str] = Field(default_factory=list)


class SkillMatch(BaseModel):
    skill: str
    category: str
    evidence: str = ""


class MatchReport(BaseModel):
    strong_matches: list[SkillMatch]
    weak_evidence: list[SkillMatch]
    missing_skills: list[SkillMatch]
    alignment_percent: int = Field(ge=0, le=100)
    explanation: str
