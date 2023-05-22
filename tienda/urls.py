from django.urls import path
from .views import index, pago,orden,detalle_producto
urlpatterns = [
    path('', index, name='inicio'),
    path('pago', pago, name='pago'),
    path('orden', orden, name='orden'),
    path('producto', detalle_producto, name='detalle_producto'),
]
