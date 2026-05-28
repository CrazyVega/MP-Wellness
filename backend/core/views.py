from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Servicio, Cita
from .models import User
from .serializers import (
    ServicioSerializer,
    CitaSerializer,
    UserSerializer,
    RegisterSerializer,
)
from .serializers import (

    ServicioSerializer,

    CitaSerializer,

    RegistroSerializer
)

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter
)

from .permissions.roles import IsAdmin


class UserViewSet(viewsets.ModelViewSet):
    """
    POST   /api/usuarios/       → registro público (sin autenticación)
    GET    /api/usuarios/me/    → perfil del usuario autenticado
    GET    /api/usuarios/       → lista de usuarios (solo admin)
    PATCH  /api/usuarios/{id}/  → editar perfil (propio o admin)
    """

    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return RegisterSerializer
        return UserSerializer

    def get_permissions(self):
        if self.action == 'create':
            # El registro es público: cualquiera puede crear su cuenta
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_queryset(self):
        user = self.request.user
        # Admin ve a todos; el resto solo se ve a sí mismo
        if user.is_authenticated and user.rol == 'admin':
            return User.objects.all()
        return User.objects.filter(pk=user.pk)

    @action(detail=False, methods=['get', 'patch'], url_path='me')
    def me(self, request):
        """Devuelve o actualiza el perfil del usuario autenticado."""
        if request.method == 'GET':
            serializer = UserSerializer(request.user)
            return Response(serializer.data)

        serializer = UserSerializer(
            request.user,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class ServicioViewSet(viewsets.ModelViewSet):

    queryset = Servicio.objects.all()

    serializer_class = ServicioSerializer

    permission_classes = [IsAuthenticated]


class CitaViewSet(viewsets.ModelViewSet):

    permission_classes = [IsAuthenticated]

    queryset = Cita.objects.all()

    serializer_class = CitaSerializer

    permission_classes = [IsAuthenticated]
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter
    ]

    filterset_fields = [
        'estado',
        'fecha',
        'terapeuta'
    ]

    search_fields = [
        'cliente__username',
        'servicio__nombre'
    ]

    ordering_fields = [
        'fecha',
        'hora'
    ]
    # VER CITAS SEGÚN ROL
    def get_queryset(self):

        user = self.request.user

        if user.rol == 'admin':

            return Cita.objects.all()

        elif user.rol == 'cliente':

            return Cita.objects.filter(cliente=user)

        elif user.rol == 'terapeuta':

            return Cita.objects.filter(terapeuta=user)

        return Cita.objects.none()

    # CREAR CITA
    def perform_create(self, serializer):

        serializer.save(
            cliente=self.request.user
        )

    # ACTUALIZAR CITA
    def update(self, request, *args, **kwargs):

        cita = self.get_object()

        user = request.user

        # CLIENTE NO PUEDE CAMBIAR ESTADO
        if user.rol == 'cliente':

            data = request.data.copy()

            data['estado'] = cita.estado

            serializer = self.get_serializer(
                cita,
                data=data
            )

            serializer.is_valid(raise_exception=True)

            self.perform_update(serializer)

            return Response(serializer.data)

        # TERAPEUTA SOLO FINALIZA
        elif user.rol == 'terapeuta':

            data = request.data.copy()

            data['estado'] = 'finalizada'

            serializer = self.get_serializer(
                cita,
                data=data
            )

            serializer.is_valid(raise_exception=True)

            self.perform_update(serializer)

            return Response(serializer.data)

        # ADMIN TODO
        return super().update(request, *args, **kwargs)

    # ELIMINAR CITA
    def destroy(self, request, *args, **kwargs):

        user = request.user

        # SOLO ADMIN ELIMINA
        if user.rol != 'admin':

            return Response(
                {
                    'error': 'No tienes permiso para eliminar citas.'
                },
                status=status.HTTP_403_FORBIDDEN
            )

        return super().destroy(request, *args, **kwargs)
    
    from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def terapeutas(request):

    terapeutas = User.objects.filter(
        rol='terapeuta'
    ).values(
        'id',
        'username'
    )

    return Response(terapeutas)
@api_view(['GET'])
def usuario_actual(request):

    user = request.user

    return Response({

        'id': user.id,

        'username': user.username,

        'rol': user.rol
    })

@api_view(['POST'])
def registro(request):

    serializer = RegistroSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({

            'mensaje': 'Usuario creado'
        })

    return Response(
        serializer.errors,
        status=400
    )