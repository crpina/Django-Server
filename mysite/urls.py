"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from usuario import views as usuario_views
from tienda import views as tienda_views

urlpatterns = [
	path( 'admin/', admin.site.urls ),
	path( '', include( 'tienda.urls' ) ),
	path( '404', tienda_views.error_page, name='404' ),
	path( 'registro', usuario_views.registro , name='registro'),
	path( 'login', usuario_views.login , name='login'),
	path( 'api/', include( 'api.urls' ) ),
	path( 'usuario/', include( 'usuario.urls' ) ),
	path( 'administracion/', include( 'administracion.urls' ) ),
]
