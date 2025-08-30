# 🚀 MJ's ATS Resume Analyzer

An AI-powered **ATS Resume Analyzer** built with **Django (backend)** and **React + Vite + Tailwind (frontend)**.  
This tool evaluates resumes against job descriptions, calculates **ATS match scores**, highlights missing skills, and provides **actionable improvement suggestions** — presented with a **modern, interactive UI**.

---

## ✨ Features
- 📂 **Upload Resumes** (PDF/DOC/DOCX)
- 📝 **Paste Job Descriptions**
- 🤖 **AI/ML-powered Resume Analysis**
  - Semantic skill matching (using `sentence-transformers`)
  - ATS score calculation
  - Missing vs matched skills
  - Resume formatting normalization
  - Improvement suggestions
- 🎨 **Modern UI/UX**
  - Glassmorphism design
  - Gradient progress bars
  - Smooth animations
  - Professional report-style output
- 📊 **Visual Report**
  - ATS score progress bar
  - Detailed suggestions list
  - Skills matched vs missing

---

## 📂 Project Structure

ats-resume-analyzer/
│── backend/ # Django backend
│ ├── ats_analyzer/ # Main project settings
│ ├── core/ # App for resume analysis
│ ├── manage.py
│ └── .env # Backend environment variables
│
│── frontend/ # React + Vite + Tailwind frontend
│ ├── src/
│ │ ├── components/ # React components (Upload, AnalysisResults, etc.)
│ │ └── App.jsx
│ ├── index.html
│ └── package.json
│
│── README.md
│── .gitignore


---

## ⚡ Installation & Setup

### 1️⃣ Backend (Django + Python)
```bash
# Go to backend folder
cd backend

# Create virtual env with uv
uv venv

# Activate virtual environment
# Windows (PowerShell):
.\.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Install dependencies
uv pip install -r requirements.txt

# Run migrations
uv run --active python manage.py migrate

# (Optional) Create superuser
uv run --active python manage.py createsuperuser

# Run backend server
uv run --active python manage.py runserver

2️⃣ Frontend (React + Vite + Tailwind)
# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev


➡ Frontend will be running at:
http://127.0.0.1:5173/

🔑 Environment Variables
Backend .env
SECRET_KEY=your-django-secret-key
DEBUG=True

# Using SQLite (simple, no setup needed)
DATABASE_URL=sqlite:///db.sqlite3

Frontend .env (optional if you want custom API URL)
VITE_API_URL=http://127.0.0.1:8000/api