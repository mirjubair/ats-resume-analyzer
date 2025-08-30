import pdfplumber, pytesseract
from pdfminer.high_level import extract_text
from PIL import Image
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import JobTemplate, Analysis
from .serializers import JobTemplateSerializer, AnalysisSerializer
from .utils.embeddings import match_skills
from .utils.normalizer import normalize_resume
from .utils.exporter import export_docx, export_pdf

class JobTemplateViewSet(viewsets.ModelViewSet):
    queryset = JobTemplate.objects.all()
    serializer_class = JobTemplateSerializer

class AnalysisViewSet(viewsets.ModelViewSet):
    queryset = Analysis.objects.all()
    serializer_class = AnalysisSerializer

    @action(detail=False, methods=["post"])
    def analyze(self, request):
        resume_file = request.FILES.get("resume")
        job_id = request.data.get("job_id")
        job = JobTemplate.objects.get(id=job_id)

        text = ""
        if resume_file.name.endswith(".pdf"):
            text = extract_text(resume_file)
        elif resume_file.name.endswith(".docx"):
            import docx
            doc = docx.Document(resume_file)
            text = "\n".join(p.text for p in doc.paragraphs)

        normalized = normalize_resume(text)
        score, suggestions = match_skills(normalized, job.skills)

        analysis = Analysis.objects.create(
            user=request.user if request.user.is_authenticated else None,
            resume_text=normalized,
            job_template=job,
            score=score,
            suggestions=suggestions
        )
        return Response(AnalysisSerializer(analysis).data)

    @action(detail=True, methods=["get"])
    def export(self, request, pk=None):
        fmt = request.query_params.get("format", "pdf")
        analysis = self.get_object()
        if fmt == "docx":
            file_path = export_docx(analysis)
        else:
            file_path = export_pdf(analysis)
        with open(file_path, "rb") as f:
            return Response(f.read(), content_type="application/octet-stream")
