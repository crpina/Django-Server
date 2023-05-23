const productsSettings = {
	async      : true,
	crossDomain: true,
	url        : 'https://django-server-production-d59b.up.railway.app/api',
	method     : 'GET'
}

const offerSettings = {
	async      : true,
	crossDomain: true,
	url        : 'https://django-server-production-d59b.up.railway.app/api/offer',
	method     : 'GET'
}

const productsList = []

$( document )
	.ready( function () {
		const pProductos = $.ajax( {
				async      : true,
				crossDomain: true,
				url        : 'https://django-server-production-d59b.up.railway.app/api/productos',
				method     : 'GET',
				processData: false,
				contentType: false
			}
		)
		pProductos.done( function ( response ) {
			console.log( { response } )
		} )

		const ofertas   = $( '#ofertas' )
		const productos = $( '#productos' )

		//Agrega objetos al div 1
		const peticionProductos = $.ajax( productsSettings )
		peticionProductos.done( function ( response ) {
			$.each( response, function ( i, item ) {
				const divId = `producto-${ item.id }`
				productos.append(
					`<div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="producto" class="basis-3/5 flex justify-center items-center">
        <img 
        class="object-contain rounded-t-lg max-h-32"
             src="https://firebasestorage.googleapis.com/v0/b/django-28580.appspot.com/o/muchilpokebol.png?alt=media&token=7d07e642-596c-47e8-a364-baa055027773"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
              <a 
                id="${ divId }-name"
              class="line-clamp-1" href="producto">${ item.name }</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div 
              id="${ divId }-price-normal"
              class="text-gray-400 line-through">$${ item.price }</div>
          <div class="flex items-center gap-2">
            <div 
                id="${ divId }-price"
                class="text-2xl font-bold">
              $${ Math.round(
						item.price - ( item.price * ( item.discount / 100 ) ) ) }
      </div>
            <div 
                id="${ divId }-discount"
                class="text-xs">(-${ item.discount }% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
            <button
            id="${ divId }-buton"
              class="px-2 py-2.5 h-12 w-full text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center">
              Agregar al carrito
            </button>
          </a>
      </div>
    </div>`
				)

				$( `#${ divId }-buton` )
					.click( function () {
						const name = $( `#${ divId }-name` )
						console.log( `name: ${ name.text() }` )
					} )
			} )
		} )

		peticionProductos.fail( function ( error, status ) {
			productos.removeClass()
			productos.append(
				`<div class="flex p-4 my-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">No hemos podido cargar el contenido de productos</span>. Intenta recargar la pagina
  </div>
</div>` )
		} )

		//Agrega objetos al div 2
		const peticionOfertas = $.ajax( offerSettings )
		peticionOfertas.done( function ( response ) {
			$.each( response, function ( i, item ) {
				const divId = `producto-${ item.id }`
				ofertas.append(
					`<div class="h-72 w-52">
        <div
          class="relative h-72 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -${ item.discount }%
              </span>
              <div class="h-full w-full basis-2/3 flex justify-center items-center">
                <img
                  class="rounded-t-lg max-h-32 object-contain"
                  src="https://firebasestorage.googleapis.com/v0/b/django-28580.appspot.com/o/muchilpokebol.png?alt=media&token=7d07e642-596c-47e8-a364-baa055027773"
                  alt=""/>
            </div>
          <div class="mx-auto basis-1/3">
            <div
              class="px-2 my-2 w-full text-center font-medium">
              <a 
                  id="${ divId }-name"
                  class="line-clamp-2" href="producto">${ item.name }</a>
            </div>
            <div class="flex w-full items-center gap-2 justify-center">
              <div
                  id="${ divId }-price-normal" 
                  class="text-gray-400 line-through">$${ item.price }</div>
              <div 
                  id="${ divId }-price" 
                  class="text-2xl font-bold text-red-600">
              $${ Math.round(
						item.price - ( item.price * ( item.discount / 100 ) ) ) }
              </div>
            </div>
            <div class="w-full flex justify-center">
                  <button
                    id="${ divId }-buton" 
                    class="mb-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br px-3 text-center text-sm font-medium text-white py-2">
                    Agregar al carrito
                  </button>
          </div>
          </div>
        </div>
        </div>
      </div>`
				)
				$( `#${ divId }-buton` )
					.click( function () {
						const name = $( `#${ divId }-name` )
						console.log( `name: ${ name.text() }` )
					} )
			} )
		} )

		peticionOfertas.fail( function ( error, status ) {
			ofertas.removeClass()
			ofertas.append(
				`<div class="flex p-4 my-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">No hemos podido cargar el contenido de ofertas</span>. Intenta recargar la pagina
  </div>
</div>` )
		} )

	} )
