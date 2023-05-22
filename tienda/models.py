from django.db import models

# Create your models here.
from django.db import models


# class Usuario(models.Model):
# 	nombre = models.CharField(max_length=100)
# 	email = models.EmailField()
# 	# otros campos...
#
# 	def __str__(self):
# 		return self.nombre


from django.db import models
from django import forms

class Producto(models.Model):
	id = models.AutoField(primary_key=True)
	valor = models.DecimalField(max_digits=10, decimal_places=2)
	image = models.FileField()
	nombre = models.CharField( max_length=100 )

class ProductoForm(forms.ModelForm):
	class Meta:
		model = Producto
		fields = ['valor', 'nombre', 'image']

	image = forms.ImageField()
