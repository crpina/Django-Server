let suscrito = false

const subSettings = {
  async: true,
  crossDomain: true,
  url: 'https://django-server-production-157c.up.railway.app/api/sub',
  method: 'GET',
};

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
    cancelButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
  },
  buttonsStyling: false
})

$(document).ready(function () {
  let nombre = $("#nombre");
  let apellido = $("#apellido");
  let banco = $("#banco");
  let tarjeta = $("#tarjeta");
  let mes = $("#mes");
  let ano = $("#ano");
  let clave = $("#clave");

  let formContent = $("#form-content");
  let formActivated = $("#form-activated");
  let form = $("#formulario1");

  const peticionSubcripcion = $.ajax(subSettings)

  peticionSubcripcion.fail(function (error, status) {
    suscrito = false
  })

  peticionSubcripcion.done(function (response) {
    suscrito = response.sub
  })

  peticionSubcripcion.always(function () {
    if (suscrito) {
      formActivated.removeClass("hidden");
      formContent.hide();
    } else {
      formContent.removeClass("hidden");
      formActivated.hide();
    }
  })

  form.validate({

    rules: {
      nombre: {
        required: true,
        minlength: 1,
        maxlength: 50
      },

      apellido: {
        required: true,
        minlength: 1,
        maxlength: 50
      },

      banco: {
        required: true,
        minlength: 1,
        maxlength: 50
      },

      tarjeta: {
        required: true,
        minlength: 8,
        maxlength: 8
      },

      mes: {
        required: true,
        number: true,
        min: 1,
        max: 12
      },

      ano: {
        required: true,
        minlength: 2,
        maxlength: 2
      },

      clave: {
        required: true,
        minlength: 10,
        maxlength: 10
      }

    },
    messages:
      {
        nombre: {
          required: "Ingrese un nombre",
          minlength: "Debe tener almenos 1 caracter",
          maxlength: "Debe tener maximo 50 caracter",
        },
        apellido: {
          required: "Ingrese un apellido",
          minlength: "Debe tener almenos 1 caracter",
          maxlength: "Debe tener maximo 50 caracter",
        },
        banco: {
          required: "Ingrese un banco valido",
          minlength: "Debe tener almenos 1 caracter",
          maxlength: "Debe tener maximo 50 caracter",
        },
        tarjeta: {
          required: "Ingrese una tarjeta valida",
          minlength: "La tarjeta debe tener 8 digitos",
          maxlength: "La tarjeta debe tener 8 digitos"
        },
        mes: {
          required: "Ingrese un mes valido",
          number: "Solo numeros del 01 al 12",
          min: "Solo numeros del 01 al 12",
          max: "Solo numeros del 01 al 12",
        },
        ano: {
          required: "Ingrese un año valido",
          minlength: "Solo los dos ultimos digitos del año",
          maxlength: "Solo los dos ultimos digitos del año"
        },
        clave: {
          required: "Ingrese una clave valida",
          minlength: "La clave debe tener 10 digitos",
          maxlength: "La clave debe tener 10 digitos"
        }
      }
  })

  $("#guardar1").click(function () {
    if (form.valid()) {
      Swal.fire({
        title: 'Exito!',
        text: 'Se ha registrado la tarjeta',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })
      suscrito = true
      formContent.hide();
      formActivated.show();
    }
  })

  $("#desuscribir").click(function () {
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Te desuscribiras de la pagina",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        suscrito = false
        formContent.show();
        formActivated.hide();
      }
    })
  })

})
