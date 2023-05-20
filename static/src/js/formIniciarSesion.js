

$(document).ready(function (){

    let email = $("#emailc");
    let password = $("#password1");
    let form = $("#formulario2");

    $("#guardar1").click(function (){
        form.validate({
            rules:{
                emailc:{
                    required: true,
                    maxlength: 50,
                    minlength: 10
                },
                password1:{
                    required: true  
                }
            },
            messages:{
                emailc:{
                    required: "Debe ingresar un correo electronico",
                    maxlength: "El correo es demaciado largo",
                    minlength: "El correo es demaciado corto"
                },
                password1:{
                    required: "Debe ingresar una contraseña"
                }
            }
        })

    })

})
