$(document).ready(function (){

    let nombre = $("#nombre");
    let precio = $("#precio");  
    let form = $("#form4");

    $("#crear").click(function (){

        form.validate({
            rules:{
                nombre:{
                    required: true,

                },
                precio:{
                    required: true 
                     
                }
            },
            messages:{
                nombre:{
                    required: "Debe ingresar un nombre",

                },
                precio:{
                    required: "Debe ingresar un precio valido."
                }
            }
        })
        
    })

})