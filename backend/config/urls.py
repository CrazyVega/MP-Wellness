from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


def home(request):
    return HttpResponse("Backend funcionando")


urlpatterns = [

    path('', home),

    path('admin/', admin.site.urls),

    path('api/', include('core.urls')),

    # LOGIN DRF
    path('api-auth/', include('rest_framework.urls')),

    # JWT
    path('api/token/', TokenObtainPairView.as_view()),

    path('api/token/refresh/', TokenRefreshView.as_view()),
]