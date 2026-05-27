from rest_framework import serializers

from .models import Servicio, Cita, User


# ─── Usuario ──────────────────────────────────────────────────────────────────

class UserSerializer(serializers.ModelSerializer):
    """Lectura del perfil de usuario (sin exponer la contraseña)."""

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'telefono',
            'rol',
        ]
        read_only_fields = ['rol']


class RegisterSerializer(serializers.ModelSerializer):
    """Registro de nuevos usuarios (solo rol 'cliente')."""

    password = serializers.CharField(
        write_only=True,
        min_length=8,
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
            'telefono',
        ]

    def create(self, validated_data):
        # Usa create_user para que la contraseña quede hasheada
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            telefono=validated_data.get('telefono', ''),
            rol='cliente',          # el registro público siempre crea clientes
        )
        return user


# ─── Servicio ─────────────────────────────────────────────────────────────────

class ServicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Servicio
        fields = '__all__'


class CitaSerializer(serializers.ModelSerializer):

    cliente_nombre = serializers.CharField(
        source='cliente.username',
        read_only=True
    )

    terapeuta_nombre = serializers.CharField(
        source='terapeuta.username',
        read_only=True
    )

    servicio_nombre = serializers.CharField(
        source='servicio.nombre',
        read_only=True
    )

    # SOLO TERAPEUTAS
    terapeuta = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.filter(rol='terapeuta'),
        required=False,
        allow_null=True
    )

    class Meta:
        model = Cita

        fields = [
            'id',
            'cliente',
            'cliente_nombre',
            'terapeuta',
            'terapeuta_nombre',
            'servicio',
            'servicio_nombre',
            'fecha',
            'hora',
            'estado',
            'observaciones',
            'fecha_creacion',
        ]

        read_only_fields = [
            'cliente',
            'estado'
        ]

    def validate(self, data):

        fecha = data.get('fecha')

        hora = data.get('hora')

        terapeuta = data.get('terapeuta')

        cliente = self.context['request'].user

        # CLIENTE DUPLICADO
        existe_cliente = Cita.objects.filter(
            cliente=cliente,
            fecha=fecha,
            hora=hora
        ).exists()

        if existe_cliente:

            raise serializers.ValidationError(
                'Ya tienes una cita en ese horario.'
            )

        # TERAPEUTA DUPLICADO
        if terapeuta:

            existe_terapeuta = Cita.objects.filter(
                terapeuta=terapeuta,
                fecha=fecha,
                hora=hora
            ).exists()

            if existe_terapeuta:

                raise serializers.ValidationError(
                    'El terapeuta ya tiene una cita en ese horario.'
                )

        return data