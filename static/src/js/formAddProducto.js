const productsSettings = {
	async      : true,
	crossDomain: true,
	url        : 'https://django-server-production-d59b.up.railway.app/api/file',
	method     : 'GET'
}

$( document )
	.ready( function () {

		let nombre = $( '#nombre' )
		let precio = $( '#precio' )
		let form   = $( '#form4' )

		form.submit(
			function ( event ) {
				event.preventDefault()

				const formData  = new FormData( this )
				const imageName = formData.get( 'imagen' ).name
				formData.append( 'imageName', imageName )
				console.log( { formData })

				const peticionCreacion = $.ajax( {
						async      : true,
						crossDomain: true,
						url        : 'https://django-server-production-d59b.up.railway.app/api/producto/crear',
						method     : 'POST',
						data       : formData,
						processData: false,
						contentType: false
					}
				)
				peticionCreacion.done( function ( response ) {
					console.log( { response } )
				} )
			}
		)

		form.validate( {
			rules   : {
				nombre: {
					required: true

				},
				precio: {
					required: true

				}
			},
			messages: {
				nombre: {
					required: 'Debe ingresar un nombre'

				},
				precio: {
					required: 'Debe ingresar un precio valido.'
				}
			}
		} )
} )
