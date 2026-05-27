from rest_framework import serializers

from .models import Servicio, Cita, User


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