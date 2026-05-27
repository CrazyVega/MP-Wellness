from rest_framework.routers import DefaultRouter

from .views import ServicioViewSet, CitaViewSet


router = DefaultRouter()

router.register(r'servicios', ServicioViewSet)

router.register(r'citas', CitaViewSet)

urlpatterns = router.urls