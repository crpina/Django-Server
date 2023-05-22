from django import forms

from tienda.models import Producto


class ProductoForm(forms.ModelForm):
	class Meta:
		model = Producto
		# fields = ['valor', 'nombre', 'image']
		fields = "__all__"

	image = forms.ImageField()
