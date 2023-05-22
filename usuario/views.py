from django.shortcuts import render

# Create your views here.
def login(request ):
	return render(request, 'Login_usuario.html')


def registro(request):
	return render(request, 'register.html')


def detalle_cuenta(request):
	return render(request, 'detalle_cuenta.html')

def historial_pedidos(request):
	return render(request, 'historial_pedidos.html')

def suscripcion(request):
	return render(request, 'suscripcion.html')

def cambiar_contrasena(request):
	return render(request, 'cambiar_contrasena.html')
