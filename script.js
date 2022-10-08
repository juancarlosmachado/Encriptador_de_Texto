const textoIngresado = document.querySelector(".seccion1-texto-ingresado");
const mensajeEncriptado = document.querySelector(".seccion2-mensaje-encriptado");
const btnCopy = document.querySelector(".seccion2-btn-copiar");
btnCopy.style.display = "none";

// Encriptar Mensaje;

function btnEncriptar() {
    const textoEncriptado = encriptar(textoIngresado.value);
    mensajeEncriptado.value = textoEncriptado; 
    mensajeEncriptado.style.backgroundImage="none";
    textoIngresado.value = " ";
    btnCopy.style.display = "block";
} 

function encriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    texto =  texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {        
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return texto;
}

// Desencriptar Mensaje;

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textoIngresado.value);
    mensajeEncriptado.value = textoEncriptado;  
    mensajeEncriptado.style.backgroundImage="none"; 
    textoIngresado.value = " ";
    btnCopy.style.display = "block";
}

function desencriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    texto =  texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {        
        if (texto.includes(matrizCodigo[i][1])) {
           texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return texto;
} 

//Copiar Texto Encriptado

function btnCopiar() {
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.style.backgroundImage="";
    mensajeEncriptado.value = " ";
    btnCopy.style.display = "none";
}


