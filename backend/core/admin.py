from django.contrib import admin

from .models import (
    User,
    Servicio,
    Cita,
    Pago,
    HistorialClinico,
    Mensaje
)

admin.site.register(User)
admin.site.register(Servicio)
admin.site.register(Cita)
admin.site.register(Pago)
admin.site.register(HistorialClinico)
admin.site.register(Mensaje)