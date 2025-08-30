from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer("all-MiniLM-L6-v2")

def match_skills(resume_text, required_skills):
    resume_embedding = model.encode(resume_text, convert_to_tensor=True)
    required_embeddings = model.encode(required_skills, convert_to_tensor=True)
    similarities = util.cos_sim(resume_embedding, required_embeddings)
    
    matched = []
    for i, skill in enumerate(required_skills):
        score = float(similarities[0][i])
        if score > 0.5:
            matched.append(skill)
    percentage = (len(matched) / len(required_skills)) * 100
    suggestions = [s for s in required_skills if s not in matched]
    return percentage, suggestions
