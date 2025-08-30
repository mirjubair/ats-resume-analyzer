from rest_framework import serializers
from .models import JobTemplate, Analysis

class JobTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobTemplate
        fields = "__all__"

class AnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analysis
        fields = "__all__"
