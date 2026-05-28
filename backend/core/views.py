from rest_framework import viewsets, status

from rest_framework.decorators import (
    action,
    api_view
)

from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)

from rest_framework.response import Response

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter
)

from .models import (
    Servicio,
    Cita,
    User
)

from .serializers import (

    ServicioSerializer,

    CitaSerializer,

    RegistroSerializer
)


# =========================
# USUARIOS
# =========================

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        user = self.request.user

        if user.rol == 'admin':

            return User.objects.all()

        return User.objects.filter(id=user.id)


    @action(detail=False, methods=['GET'])

    def me(self, request):

        user = request.user

        return Response({

            'id': user.id,

            'username': user.username,

            'rol': user.rol
        })


# =========================
# SERVICIOS
# =========================

class ServicioViewSet(viewsets.ModelViewSet):

    queryset = Servicio.objects.all()

    serializer_class = ServicioSerializer

    permission_classes = [IsAuthenticated]


# =========================
# CITAS
# =========================

class CitaViewSet(viewsets.ModelViewSet):

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

            return Cita.objects.filter(
                terapeuta=user
            )

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


        # CLIENTE

        if user.rol == 'cliente':

            data = request.data.copy()

            data['estado'] = cita.estado

            serializer = self.get_serializer(

                cita,

                data=data,

                partial=True
            )

            serializer.is_valid(
                raise_exception=True
            )

            self.perform_update(serializer)

            return Response(serializer.data)


        # TERAPEUTA

        elif user.rol == 'terapeuta':

            data = request.data.copy()

            data['estado'] = 'finalizada'

            serializer = self.get_serializer(

                cita,

                data=data,

                partial=True
            )

            serializer.is_valid(
                raise_exception=True
            )

            self.perform_update(serializer)

            return Response(serializer.data)


        # ADMIN

        return super().update(
            request,
            *args,
            **kwargs
        )


    # ELIMINAR

    def destroy(self, request, *args, **kwargs):

        user = request.user

        if user.rol != 'admin':

            return Response(

                {
                    'error': 'No tienes permiso.'
                },

                status=status.HTTP_403_FORBIDDEN
            )

        return super().destroy(
            request,
            *args,
            **kwargs
        )


# =========================
# TERAPEUTAS
# =========================

@api_view(['GET'])

def terapeutas(request):

    terapeutas = User.objects.filter(

        rol='terapeuta'

    ).values(

        'id',

        'username'
    )

    return Response(terapeutas)


# =========================
# USUARIO ACTUAL
# =========================

@api_view(['GET'])

def usuario_actual(request):

    user = request.user

    return Response({

        'id': user.id,

        'username': user.username,

        'rol': user.rol
    })


# =========================
# REGISTRO
# =========================

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