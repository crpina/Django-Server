
$(document).ready(function (){

    let nombre1 = $("#nombre");
    let email2 = $("#email");
    let password3 = $("#password");
    let celular4 = $("#celular");
    let direccion5 = $("#direccion");

    let remember6 =$('#Acepto')



    let form = $("#formulario5");

    $("#guardar1").click(function (){
        form.validate({
            rules:{
                nombre:{
                    required: true,
                    maxlength: 50,
                    minlength: 1
                },
                email:{
                    required: true
                },
                password:{
                    required: true
                },
                celular:{
                    required: true,
                    minlength: 9,
                    maxlength:9
                },
                direccion:{
                    required: true
                },
                Acepto:{
                    required: true
                }

            },
            messages:{
                nombre:{
                    required: "Debe ingresar un nombre.",
                    maxlength: "El nombre es demaciado largo.",
                    minlength: "El nombre es demaciado corto.",
                },
                email:{
                    required: "Debe ingresar un email.",
                },
                password:{
                    required: "Debe ingresar una contraseña.",
                    minlength: "La contraseña debe ser de 8 digistos o más."
                },
                celular:{
                    required: "Debe ingresar un numero celular.",
                    minlength: "son 9 digitos."
                },
                direccion:{
                    required: "Ingrese un correo electronico valido.",
                },
                Acepto:{
                    required: "Debe aceptar las conduciones.",
                }
            }
        })

    })

})
