from rest_framework.routers import DefaultRouter
from .views import JobTemplateViewSet, AnalysisViewSet

router = DefaultRouter()
router.register("jobs", JobTemplateViewSet)
router.register("analysis", AnalysisViewSet)

urlpatterns = router.urls
