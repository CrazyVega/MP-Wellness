from rest_framework.routers import DefaultRouter

from .views import ServicioViewSet, CitaViewSet, UserViewSet
from .views import usuario_actual
from .views import terapeutas
from django.urls import path
router = DefaultRouter()

router.register(r'usuarios', UserViewSet)

router.register(r'servicios', ServicioViewSet)

router.register(r'citas', CitaViewSet)

urlpatterns = router.urls

urlpatterns += [
path(
    'usuarios/me/',
    usuario_actual
),
    path(
        'terapeutas/',
        terapeutas
    ),
]
