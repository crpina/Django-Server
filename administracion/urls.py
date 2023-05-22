from django.urls import path
from .views import (ver_descuento, crear_descuento, crear_producto,
	ver_productos, ver_usuarios, )

urlpatterns = [path( 'usuarios', ver_usuarios, name='ver_usuarios' ),
	path( 'descuentos', ver_descuento, name='ver_descuentos' ),
	path( 'descuentos/crear', crear_descuento, name='crear_descuento' ),
	path( 'productos', ver_productos, name='ver_productos' ),
	path( 'productos/crear', crear_producto, name='crear_producto' ), ]
