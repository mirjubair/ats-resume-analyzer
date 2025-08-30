from django.db import models
from django.contrib.auth.models import User

class JobTemplate(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    skills = models.JSONField(default=list)

    def __str__(self):
        return self.title

class Analysis(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    resume_text = models.TextField()
    job_template = models.ForeignKey(JobTemplate, on_delete=models.CASCADE)
    score = models.FloatField()
    suggestions = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
