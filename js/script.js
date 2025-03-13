let mensajeA=document.getElementById("mensajeA");
    let mensajeB=document.getElementById("mensajeB");
    let mensajeC=document.getElementById("mensajeC");
    const expresionRegular = /[^a-zA-Z0-9]/;
function validarPassword()
{
    let pass1 = document.getElementById("pass1").value;
    mensajeB.style.color = (pass1===pass1.toLowerCase() ? "red" : "green");   
    mensajeC.style.color = (expresionRegular.test(pass1) ? "red" : "green"); 
    
    
    return (VerificarCantCaracteres(mensajeA, 8) && mensajeB.style.color == "green" && mensajeC.style.color == "green");
}

function validarForm()
{
    return validarPassword() && ValidarCoincidencia() && ValidarNombre();
}

function ValidarCoincidencia(){
    let pass1 = document.getElementById("pass1").value;
    let mensajeD = document.getElementById("msjError");
    let pass2 = document.getElementById("pass2").value;
    mensajeD.style.color = (pass1===pass2 ? "green" : "red");
}

function ValidarNombre(){
    let nombre=document.getElementById("pnombre");
    return VerificarCantCaracteres(nombre, 3);
} 

function VerificarCantCaracteres(palabra, caracteres){
     mensajeA.style.color = (palabra.length > caracteres ? "green" : "red");   
     return mensajeA.style.color == "green";
}





(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()