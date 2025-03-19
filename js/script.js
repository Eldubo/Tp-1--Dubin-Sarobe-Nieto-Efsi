    var nombre8Caracteres = document.getElementById("textonombre");
    var contraseña3Caracteres = document.getElementById("mensajeA");
    var alMenos1Mayus = document.getElementById("mensajeB");
    var alMenos1CaracterEspecial = document.getElementById("mensajeC");
    var alMenos1Num = document.getElementById("mensajeD");
    var contraseñasIguales = document.getElementById("msjError");
    var mensajeMail = document.getElementById("textomail");

    const abc = /[^a-zA-Z0-9]/;


function validarPassword()
{
    console.log("Entra a validarPassword");
    let pass1 = document.getElementById("pass1").value;
    alMenos1Mayus.style.color = (pass1===pass1.toLowerCase() ? "red" : "green");   
    alMenos1CaracterEspecial.style.color = (abc.test(pass1) ? "green" : "red"); 
    
    
    return (VerificarCantCaracteres(pass1, 8, contraseña3Caracteres) && alMenos1Mayus.style.color == "green" && alMenos1CaracterEspecial.style.color == "green" );
}
function ValidarEmail() {
    console.log("Entra a validarEmail");
    let email = document.getElementById("Email").value;
    const expresionMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(expresionMail.test(email));
  
    mensajeMail.innerHTML = expresionMail.test(email) ? "El mail es válido" : "El mail no es válido";
    mensajeMail.style.color = expresionMail.test(email) ? "green" : "red";
    return mensajeMail.style.color == "green";
}
function validarForm()
{
    console.log("Entra a validarForm");
    let ret = validarPassword() && contraseñasIguales.style.color == "green" && ValidarNombre() && mensajeMail.style.color == "green";
    if(ret){
        alert("Registro exitoso");
    }
    return ret;
}

function ValidarCoincidencia(){
    var pass2 = document.getElementById("pass2").value;
    var pass1 = document.getElementById("pass1").value;
    console.log(pass1, pass2);
        contraseñasIguales.innerHTML = (pass1==pass2) ? "Las contraseñas coinciden": "Las contraseñas no coinciden";
    contraseñasIguales.style.color = (pass1==pass2)  ? "green": "red";
    
}



function ValidarNombre(){
    console.log("Entra a ValidarNombre");
    let nombre = document.getElementById("pnombre").value;
    console.log(nombre)
    return VerificarCantCaracteres(nombre, 3, nombre8Caracteres);
} 

function VerificarCantCaracteres(palabra, caracteres, contraseña3Caracteres){
     contraseña3Caracteres.style.color = (palabra.length >= caracteres ? "green" : "red");   
     return contraseña3Caracteres.style.color == "green";
}

function ModoOscuro(){
    const body = document.body;
    const checkbox = document.querySelector('.theme-switch__checkbox');

    // Alterna la clase 'modo-oscuro' en el cuerpo del documento
    body.classList.toggle('modo-oscuro');

    // Cambia el estado del checkbox
    if (body.classList.contains('modo-oscuro')) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}
