from django.urls import path
from .views import index, error_page
urlpatterns = [
    path('', index, name='inicio'),
    path('404', error_page, name='404')
]
