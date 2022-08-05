// nos permitirá seleccionar el boton para elegir mascota una vez que se cargue el html
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);



}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max-min +1) + min)
}


// Seleccionamos a traves del input radio nuestra mascota
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascotaJugador')
    

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
        alert("Debe seleccionarse una mascota.")
    }
    // Cuando ya elegimos nuestra mascota, procederemos a usar la función que nombra a la mascota rival de forma aleatoria

    seleccionarMascotaEnemigo()
    
}

// Seleccionamos de forma al azar el nombre de la mascota enemiga
function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')
    let mascotaEnemigo = ['Hipodoge','Capipepo','Ratigueya']
    let enemigo = mascotaEnemigo[aleatorio(0,2)]
    
    spanMascotaEnemigo = spanMascotaEnemigo.innerHTML = `${enemigo}`
}

// Carga los elementos cuando el html termina de renderizarse
window.addEventListener('load', iniciarJuego)