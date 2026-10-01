from app.schemas.placement import JobProfile, MatchReport, ResumeProfile, SkillMatch


def match_profile(profile: ResumeProfile, job: JobProfile) -> MatchReport:
    evidence_by_skill = {item.name.casefold(): item.evidence.strip() for item in profile.skills}
    strong: list[SkillMatch] = []
    weak: list[SkillMatch] = []
    missing: list[SkillMatch] = []

    for required in job.required_skills:
        evidence = evidence_by_skill.get(required.casefold())
        if evidence:
            strong.append(SkillMatch(skill=required, category="strong_match", evidence=evidence))
        elif required.casefold() in evidence_by_skill:
            weak.append(SkillMatch(skill=required, category="weak_evidence"))
        else:
            missing.append(SkillMatch(skill=required, category="missing_skill"))

    total = len(job.required_skills)
    alignment = round(100 * len(strong) / total) if total else 0
    return MatchReport(
        strong_matches=strong,
        weak_evidence=weak,
        missing_skills=missing,
        alignment_percent=alignment,
        explanation=(
            f"{len(strong)} of {total} required skills have explicit profile evidence. "
            "This is an explainable skills comparison, not a hiring prediction."
        ),
    )
