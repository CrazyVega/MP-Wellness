from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    ROLE_CHOICES = (
        ('admin', 'Administrador'),
        ('cliente', 'Cliente'),
        ('terapeuta', 'Terapeuta'),
    )

    telefono = models.CharField(max_length=20)

    rol = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='cliente'
    )

    def __str__(self):
        return self.username


class Servicio(models.Model):

    nombre = models.CharField(max_length=100)

    descripcion = models.TextField()

    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    duracion = models.IntegerField()

    def __str__(self):
        return self.nombre


class Cita(models.Model):

    ESTADOS = (
        ('pendiente', 'Pendiente'),
        ('confirmada', 'Confirmada'),
        ('finalizada', 'Finalizada'),
        ('cancelada', 'Cancelada'),
    )

    cliente = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='citas_cliente'
    )

    terapeuta = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='citas_terapeuta'
    )

    servicio = models.ForeignKey(
        Servicio,
        on_delete=models.CASCADE
    )

    fecha = models.DateField()

    hora = models.TimeField()

    estado = models.CharField(
        max_length=20,
        choices=ESTADOS,
        default='pendiente'
    )

    observaciones = models.TextField(
        blank=True,
        null=True
    )

    fecha_creacion = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.cliente} - {self.fecha}"


class Pago(models.Model):

    ESTADOS_PAGO = (
        ('pendiente', 'Pendiente'),
        ('pagado', 'Pagado'),
    )

    cita = models.OneToOneField(
        Cita,
        on_delete=models.CASCADE
    )

    monto = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    estado = models.CharField(
        max_length=20,
        choices=ESTADOS_PAGO,
        default='pendiente'
    )

    fecha_pago = models.DateTimeField(
        null=True,
        blank=True
    )

    def __str__(self):
        return f"Pago #{self.id}"


class HistorialClinico(models.Model):

    paciente = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='historiales'
    )

    cita = models.ForeignKey(
        Cita,
        on_delete=models.CASCADE
    )

    observaciones = models.TextField()

    evolucion = models.TextField()

    fecha = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"Historial {self.paciente}"


class Mensaje(models.Model):

    nombre = models.CharField(max_length=100)

    correo = models.EmailField()

    asunto = models.CharField(max_length=150)

    mensaje = models.TextField()

    fecha = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.nombre