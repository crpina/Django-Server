const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
    cancelButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
  },
  buttonsStyling: false
})


$(document).ready(function () {
  let editInfo = $('#edit-info')

  editInfo.click(function () {
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Se actualizara tu perfil con los nuevos datos",
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
});
