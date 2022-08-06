// variables globales
let vidaJugador = 3; 
let vidaEnemigo = 3; 
let ataques = ["Fuego","Agua", "Tierra"]
let ataqueJugador = ""
let ataqueEnemigo = ""
// iniciar juego 
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click',ataqueFuego)

    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click',ataqueAgua)
    
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click',ataqueTierra)
}
// function aleatorio
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
//Tipos de ataque
function ataqueFuego() {
    ataqueJugador = ataques[0]
    ataqueRival()
    combateMokemon()
}
function ataqueAgua() {
    ataqueJugador = ataques[1]
    ataqueRival()
    combateMokemon()
}
function ataqueTierra() {
    ataqueJugador = ataques[2]
    ataqueRival()
    combateMokemon()
}
function ataqueRival() {
    ataqueEnemigo = ataques[aleatorio(0,2)]
    crearMensaje()
}
// ronda mokemon, agua gana fuego, fuego gana tierra, tierra gana agua
function rondaMokemon() {
    let sectionMensajes = document.getElementById('mensajes')
    let resultadoRonda = document.createElement('p')
    let mascotaJugador = document.getElementById('vidaJugador')
    let mascotaEnemigo = document.getElementById('vidaEnemigo')


    if(ataqueJugador == ataqueEnemigo) {
        resultadoRonda.innerHTML = `Empataron la ronda`
        return sectionMensajes.appendChild(resultadoRonda)
    }
    else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
            vidaEnemigo = vidaEnemigo - 1
            mascotaEnemigo.innerHTML = `${vidaEnemigo}`
            resultadoRonda.innerHTML = `Ganaste`
        return sectionMensajes.appendChild(resultadoRonda)
    }
    else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
            vidaEnemigo = vidaEnemigo - 1

            mascotaEnemigo.innerHTML = `${vidaEnemigo}`
            resultadoRonda.innerHTML = `Ganaste`
        return sectionMensajes.appendChild(resultadoRonda)
    }
    else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        vidaEnemigo = vidaEnemigo - 1
        mascotaEnemigo.innerHTML = `${vidaEnemigo}`

        resultadoRonda.innerHTML = `Ganaste`
        return sectionMensajes.appendChild(resultadoRonda)
    }
    else {
        vidaJugador = vidaJugador - 1
        mascotaJugador.innerHTML = `${vidaJugador}`
        resultadoRonda.innerHTML = `Perdiste`
        return sectionMensajes.appendChild(resultadoRonda)
    }

    
}
// combate mokemon, cuando uno de los dos llega a 0
function combateMokemon() {
    let resultadoCombate = document.getElementById('resultado-combate')
    rondaMokemon() 

    if (vidaEnemigo == 0) {
        return resultadoCombate.innerHTML = "Ganaste el combate, asesinaste a la mascota enemiga"
    }
    else if (vidaJugador == 0) {
        return resultadoCombate.innerHTML = "Perdiste el combate, han asesinado a tu mascota"
    }


}
// Crear mensaje 
function crearMensaje() {
    
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = `tu mascota atacó con ${ataqueJugador} y el enemigo usó ${ataqueEnemigo}`

    sectionMensajes.appendChild(parrafo)
}
// Carga los elementos cuando el html termina de renderizarse
window.addEventListener('load', iniciarJuego)

