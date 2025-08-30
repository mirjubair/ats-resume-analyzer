import re

def normalize_resume(text: str):
    text = re.sub(r"\s+", " ", text).strip()
    sections = re.split(r"(Experience|Education|Skills|Projects|Certifications)", text, flags=re.I)
    return "\n".join(s.strip() for s in sections if s.strip())
