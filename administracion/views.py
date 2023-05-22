from django.shortcuts import render

# Create your views here.
def crear_descuento(request):
	return render(request, 'crear_descuento.html' )

def ver_descuento(request):
	return render(request, 'ver_descuento.html' )

def crear_producto(request):
	return render(request, 'crear_producto.html' )

def ver_productos(request ):
	return render(request, 'ver_producto.html' )

def ver_usuarios(request):
	return render(request, 'ver_usuarios.html' )
