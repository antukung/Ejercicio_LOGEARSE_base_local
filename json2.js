
const inputNombre2=document.querySelector("#inputEmail3")
const inputConst= document.querySelector("#inputPassword3")
const inputConfirmarContrasenia= document.querySelector("#inputPassword4")


function verifica3() {
    if (inputNombre2.value!=NULL && inputConst.value === inputConfirmarContrasenia.value) {
        localStorage.setItem(inputNombre2.value, JSON.stringify(inputConst.value));
        window.location.href = 'index.html';
    }
}