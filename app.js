
let numeroSecreto=0;
let intentos=0;
let listaNumeroSorteado = [];
let numeroMaximo  = 10;
let numeroMaximojuegos = 3;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos+1} ${(intentos === 0 ) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        return;
    }else{
        
    
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El Número secreto es menor');
        }else {
            asignarTextoElemento('p','El Número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

        console.log(intentos,numeroMaximojuegos);

        if(intentos>=numeroMaximojuegos) {
            asignarTextoElemento('p',`¡Límite de ${numeroMaximojuegos} intentos alcanzado!`);
            document.getElementById("reiniciar").removeAttribute('disabled');
        
        }
    }
    
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if(listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesInicales () {
asignarTextoElemento('h1','Juego del Número Secreto');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 0;
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesInicales();
    document.getElementById("reiniciar").setAttribute('disabled','true');
}

condicionesInicales();

