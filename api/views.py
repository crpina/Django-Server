import os

from django.http import JsonResponse
from firebase_admin import db, storage

from mysite.settings import BASE_DIR

# from tienda.models import Usuario

pokemonAccesoriesList = ["Gorra de Ash Ketchum", "Bufanda de Pikachu",
	"Mochila de Pokémon", "Calcetines con diseños de Poké Balls",
	"Camiseta con el logotipo de Pikachu", "Sudadera con capucha de Eevee",
	"Zapatillas con estampado de Poké Balls",
	"Pulsera con colgantes de los distintos tipos de Pokémon",
	"Pañuelo con ilustraciones de los Pokémon iniciales",
	"Cinturón con un broche en forma de Poké Ball",
	"Pendientes en forma de Pikachu",
	"Chaqueta con el estampado del mapa de la región de Kanto",
	"Guantes con diseño de Pikachu", "Gafas de sol con forma de Poké Balls",
	"Pañuelo con estampado de Pokémon legendarios",
	"Parche o pin de la insignia de un líder de gimnasio",
	"Cartera con ilustraciones de los iniciales de todas las generaciones",
	"Reloj con la esfera con forma de Poké Ball",
	"Pijama con estampado de Pokémon",
	"Anillo con incrustaciones de gemas en forma de Pokémon"]

priceList = [5175, 14326, 8250, 12008, 6387, 17392, 4563, 9891, 2154, 15279,
	3866, 10943, 6331, 18457, 7926, 3982, 11873, 2955, 16240, 7451, ]

discountList = [30, 57, 12, 84, 41, 76, 5, 93, 23, 68, 38, 71, 16, 89, 47, 63,
	9, 77, 52, 88, ]

uuidList = ["651be91d-9e34-4c8b-8aeb-88f8e748ea5e",
	"26f56348-0e85-4e0f-9ed9-d238f6a8b6a4",
	"d4fb0f92-8e4b-4d5d-bb5d-1f668cd44c18",
	"7ff75c3a-8de3-4d3c-9a9c-086b8f1b864f",
	"a18fb889-06ed-431a-a0ab-1c7be9f879b8",
	"503d0810-662e-458e-9f2c-cf0b136d9b9c",
	"c8f31e24-dc7f-4343-b46a-8b1763f25e7d",
	"92411de4-4df4-4e3d-912c-1f96156be5e5",
	"0e369cf2-10f2-4c10-8326-d61b6b8a57b9",
	"a99f9f78-bca6-4a37-8744-1e3b1e249af4",
	"e5e0b2a6-738c-4942-8991-5486b66047e4",
	"716eb0dc-97be-4c87-af42-1e079d77ebe6",
	"39c29968-c2a7-4b57-9906-879d6ef184fb",
	"d0e88845-8549-4cb4-9444-8e19f7b53260",
	"2e2f3a3a-9c6b-41bc-b042-99257eab41c7",
	"8196c19f-55a9-4b24-96da-5d5dbbc3c3e7",
	"f5d1c687-39b9-4567-9c14-2a2d90fb157a",
	"645543b5-07b7-4e8b-9b97-d978157e61d2",
	"b8e45684-51ef-46f7-ae07-063cc6979bb5",
	"15c7f06c-3e0e-4df1-991b-6091273c6f9e", ]

data = { }
for i in range( len( pokemonAccesoriesList ) ):
	data[str( i )] = {
		'id'      : uuidList[i],
		'name'    : pokemonAccesoriesList[i],
		'price'   : priceList[i],
		'discount': discountList[i]
	}

offerList = [12, 4, 18, 10, 7, 2, 15, 9, 3, 16, ]

offerData = { }
for i in range( len( offerList ) ):
	offerData[str( i )] = {
		'id'      : uuidList[offerList[i]],
		'name'    : pokemonAccesoriesList[offerList[i]],
		'price'   : priceList[offerList[i]],
		'discount': discountList[offerList[i]]
	}


def products( request ):
	# ref = db.reference('productos')
	# print(ref.get())

	# bucket = storage.bucket()
	# ruta_al_archivo_local = os.path.join(BASE_DIR, 'static',
	# 'muchilpokebol.png')
	# ruta_en_storage = 'muchilpokebol.png'
	# blob = bucket.blob(ruta_en_storage)
	# blob.upload_from_filename(ruta_al_archivo_local)

	# bucket_name = 'django-28580.appspot.com'
	# blob_name = 'muchilpokebol.png'
	# bucket = storage.bucket(bucket_name)
	# blob = bucket.blob(blob_name)
	# print(blob)
	return JsonResponse( data )


def offer( request ):
	return JsonResponse( offerData )


subcriptionData = {
	'sub': True,
}


def subcription( request ):
	# usuario = Usuario( nombre='John Doe', email='johndoe@example.com' )
	# usuario.save()
	# usuarios = Usuario.objects.filter( nombre='John Doe' )
	# print(usuarios[0].email)
	return JsonResponse( subcriptionData )


def file( request ):
	if request.method == 'POST' and request.FILES['imagen']:
		imagen = request.FILES['imagen']
		return JsonResponse( {
			# 'status': 'Imagen subida exitosamente'
			'status': imagen
		} )

	return JsonResponse( {
		'error': 'Error en la solicitud'
	}, status=400 )
