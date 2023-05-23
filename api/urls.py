from django.urls import path
from . import views

urlpatterns = [
	path( '', views.products ),
	path( 'offer', views.offer ),
	path( 'sub', views.subcription ),
	path( 'productos', views.productos ),
	path( 'producto/<int:id>', views.producto ),
	path( 'producto/crear', views.producto_crear ),
	path( 'producto/eliminar/<int:id>', views.producto_eliminar ),
	path( 'producto/editar/<int:id>', views.producto_editar ), ]
