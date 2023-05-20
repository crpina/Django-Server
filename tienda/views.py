from django.shortcuts import render

def index(request):
    return render(request, 'index_tienda.html')

def error_page(request ):
    return render(request, '404.html')
