from django.shortcuts import render

def index(request):
    return render(request, 'index_tienda.html')

def error_page(request ):
    return render(request, '404.html')

def orden(request):
    return render(request, 'orden.html')

def pago(request):
    return render(request, 'pago.html')

def detalle_producto(request):
    return render(request, 'detalle_producto.html')
