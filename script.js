//alert("Hola, este es mi Javascript");

//let nombre = "Marta";
//nombre = "María";

//var nombre1 = "Marta";

//const nombre2 = "Marta";
//nombre2 = "María";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//let nombre3 = "Andrea";

//console.log(nombre3);


const form = document.getElementById("form");

const nombre = document.getElementById("nombre");

const parrafo = document.getElementById("alertas");



function validarFormulario() {

  let warnings = "";

  let valido = true;

  parrafo.innerHTML = "";



  if (nombre.value.length < 4) {

    warnings += `El nombre debe contener más de 4 caracteres`;

    valido = false;

  }



  if (!valido) {

    parrafo.innerHTML = warnings;

  } else {

    parrafo.innerHTML = "Enviado";

  }

  return valido;

}



form.addEventListener("submit", (e) => {

  if (validarFormulario()) {

    // Si la validación es exitosa, puedes enviar el formulario

    formulario.submit();

  } else {

    e.preventDefault(); // Evita que el formulario se envíe automáticamente

  }

});