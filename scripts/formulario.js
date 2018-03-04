/**
 * Añade evento al formulario.
*/
function eventForm(){
    $( document ).ready(function() {
        $("#pagar").click(function(){
            confirmarGuardar();
        });
    });
}
/**
 * Confirma que cumple los requisitos y guarda si los cumple.
*/
function confirmarGuardar(){
    var titular = $('#titular');
    var correo = $('#correo');
    var repetir = $('#repetir');
    var isNombre = true;
    var isEmail = true;
	if(!validarNombre(titular.val())){
        $('#errorTitular').show();
        console.log(1);
        isNombre = false;
    } else
    if(titular.val().lenght < 3){
        $('#errorTitular').show();
        console.log(2);
        isNombre = false;
    }
    if(!validarEmail(correo.val())){
        $('#errorCorreo').show();
        console.log(3);
        isEmail = false;
    }
    if(correo.val() != repetir.val()){
        $('#errorCorreo').show();
        console.log(4);
        isEmail = false;
    }
    if(correo.val().lenght < 3){
        console.log(5);
        $('#errorCorreo').show();
        isEmail = false;
    }
    if(isNombre){
        $('#errorTitular').hide();
    }
    if(isEmail){
        $('#errorCorreo').hide();
    }
    if(isNombre && isEmail){
        jsonCliente.nombre = titular.val();
        jsonCliente.correo = correo.val();
        guardarDatos();
    }
}

function validarEmail(email) {
    var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isEmail.test(String(email).toLowerCase());
}

function validarNombre(nombre){
    return /^[A-Za-z\s]+$/.test(nombre);
}