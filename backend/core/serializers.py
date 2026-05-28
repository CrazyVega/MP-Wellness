from rest_framework import serializers

from .models import (
    User,
    Servicio,
    Cita
)


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

    class Meta:

        model = Cita

        fields = '__all__'


class RegistroSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        fields = [

            'username',

            'password',

            'telefono'
        ]

        extra_kwargs = {

            'password': {

                'write_only': True
            }
        }


    def create(self, validated_data):

        user = User.objects.create_user(

            username=validated_data['username'],

            password=validated_data['password'],

            telefono=validated_data['telefono'],

            rol='cliente'
        )

        return user