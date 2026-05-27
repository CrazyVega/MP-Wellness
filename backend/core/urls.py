from rest_framework.routers import DefaultRouter

from .views import ServicioViewSet, CitaViewSet, UserViewSet


router = DefaultRouter()

router.register(r'usuarios', UserViewSet)

router.register(r'servicios', ServicioViewSet)

router.register(r'citas', CitaViewSet)

urlpatterns = router.urls
