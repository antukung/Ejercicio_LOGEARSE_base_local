/*Este es un codigo dedasorrallado para funcionar con la base de datos local simplemente*/
const inputNombre= document.querySelector("#usuario");
const inputContrasenia= document.querySelector("#contrasenia");
const inputParrafo1=document.querySelector("#parafo-bien-mal");
const cuerpoDePagina=document.querySelector("body")

function verificar() {
    /**Guarda datos y contrañias ingresados en LOCALSTORAGUE */
    localStorage.setItem( inputNombre.value , JSON.stringify(inputContrasenia.value));
    
}
 /**VERIFICA QUE LOS DATOS GUARDADOS SEAN VALIDOS EN REALIDAD VERIFICA SOLO EL USUARIO */
function verifica2() {
  if (localStorage.getItem(inputNombre.value, JSON.stringify(inputContrasenia.value))) {
    cuerpoDePagina.innerHTML=`<h1>FACEBOOK</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQWZzDfwM1ck0SnpSx0C4AZylsfxCKMkKxQ&usqp=CAU" alt="" srcset="">
    <h4>Carlos Miguel Ibaldi</h4>
    <p>Somos unos jovenes con varias ideas de publicidad tenemos ideas que podrian revolucionar el mercado de todas la formas </p>`;
  } else {
    inputParrafo1.innerHTML=`*SU USUARIO NO REGISTRADOS`;
  }
}
/*
console.log(JSON.parse(localStorage.getItem("numeros")));

localStorage.setItem("nombres", JSON.stringify(true));

console.log(typeof JSON.parse(localStorage.getItem("nombres")));*/