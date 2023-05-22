$(document).ready(function (){

    let password11 = $("#password1");
    let password22 = $("#password2");  
    let form = $("#formulario3");   
    

    $("#guardarC").click(function (){

        form.validate({
            rules:{
                password1:{
                    required: true,
                    
                    
                },
                password2:{
                    required: true,  
                }
            },
            messages:{
                password1:{
                    required: "Debe ingresar una contraseña",

                },
                password2:{
                    required: "Debe ingresar la nueva contraseña",
                }
            }
        })
        
    })

})