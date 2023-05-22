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

		form.submit( function ( e ) {
			e.preventDefault()
			console.log( 'form' )
			const file = $( '#dropzone-file' )

			let formData = new FormData( this )

			formData.append( 'file', file.val() )

			const peticionProductos = $.ajax( {
					async      : true,
					crossDomain: true,
					url        : 'https://django-server-production-d59b.up.railway.app/api/file',
					method     : 'POST',
					data       : JSON.stringify( formData ),
				}
			)
			peticionProductos.done( function ( response ) {
				console.log( 'response' )
				console.log( response )
			} )

			return
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
	} )
