from django.urls import path
from .views import detalle_cuenta, historial_pedidos, suscripcion
urlpatterns = [
    path('/', detalle_cuenta, name='detalle_cuenta'),
    path('/historial', historial_pedidos, name='historial_pedidos'),
    path('/suscripcion', suscripcion, name='suscripcion'),
]
