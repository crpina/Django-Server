from django.urls import path, include
from .views import index, error_page
urlpatterns = [
    path('', index, name='/'),
    path('404', error_page, name='404')
]
