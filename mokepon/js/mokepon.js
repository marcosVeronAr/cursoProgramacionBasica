let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let mensajesVictoria = [
    `Ganaste. Felicitaciones ☜(ﾟヮﾟ☜)`,
    `¿Ganar? Lo aplastaste (¬‿¬)`,
    `No tenía mucha fé, pero ganaste. Eres increible ╰(*°▽°*)╯`, 
    `Calma campeón! ya está muerto (┬┬﹏┬┬). Ganaste.`
]
let mensajesDerrota = [
    `Wow, perdiste. nunca pensé que iba a terminar así. Buena suerte la próxima! ಥ_ಥ`, 
    `A veces se gana y a veces se pierde. Hoy tocó perder (╯°□°）╯︵ ┻━┻`,
    `Que mala suerte, lo tenías arrinconado. vuelve a intentarlo! ¯\_(ツ)_/¯`,
    `Perdiste. pero ey! siempre puedes volver a intentarlo`
]


function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonIniciar = document.getElementById('boton-reiniciar')
    botonIniciar.addEventListener('click', reiniciarJuego)

    ocultarAtaques()
    ocultarBotonReinicio()
}

function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMascotaJugador=document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML='Hipodoge'}
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'}
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML='Ratigueya'}
    else{
        alert('Selecciona una mascota')
        location.reload()
    }

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.disabled = true
    seleccionarMascotaEnemigo()
    mostrarAtaque()
    ocultarSeleccionMascotas()
    
}

function ocultarSeleccionMascotas() {
    let seleccionarMascota = document.getElementById('seleccionar-mascota')
    seleccionarMascota.style.display = 'none'
}

function ocultarAtaques() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
}

function mostrarAtaque() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex' 
}

function ocultarBotonReinicio() {
    let reiniciar = document.getElementById('reiniciar')
    reiniciar.style.display = 'none' 
}
function mostrarBotonReinicio() {
    let reiniciar = document.getElementById('reiniciar')
    reiniciar.style.display = 'flex' 
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById('mascota-enemigo')


    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML='Hipodoge'
    }
    else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='Capipepo'
    }
    else{
        spanMascotaEnemigo.innerHTML='Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if(ataqueAleatorio==1){
        ataqueEnemigo='FUEGO'}
        else if(ataqueAleatorio==2){
            ataqueEnemigo='AGUA'
            }else{
                ataqueEnemigo='TIERRA'
            }
combate()
mostrarBotonReinicio()
}



function combate(){


    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")    
    }
    else if(ataqueJugador=='FUEGO'&&ataqueEnemigo=='TIERRA'){
        crearMensaje("GANASTE")
        restarVidaEnemigo()
    }else if(ataqueJugador=='AGUA'&&ataqueEnemigo=='FUEGO'){
        crearMensaje("GANASTE")
        restarVidaEnemigo()
    }else if(ataqueJugador=='TIERRA'&&ataqueEnemigo=='AGUA'){
        crearMensaje("GANASTE")
        restarVidaEnemigo()
    }else{
        crearMensaje("PERDISTE")
        restarVidaJugador()
    }

    crearMensajeFinal()
}

function crearMensajeFinal() {
    let sectionMensajes = document.getElementById('resultado')

    if (vidasEnemigo == 0) {
        sectionMensajes.innerHTML = mensajesVictoria[aleatorio(0,3)]
        apagarBotones()
    }
    else if (vidasJugador == 0) {
        sectionMensajes.innerHTML = mensajesDerrota[aleatorio(0,3)]
        apagarBotones()
    } 
        
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-rival')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}

function restarVidaEnemigo() {
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    vidasEnemigo--

    spanVidasEnemigo.innerHTML = vidasEnemigo
}

function restarVidaJugador() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    vidasJugador--

    spanVidasJugador.innerHTML = vidasJugador
}

function reiniciarJuego(){
    location.reload()
}

function apagarBotones() {

        let botonFuego=document.getElementById('boton-fuego')
        botonFuego.disabled=true
        let botonAgua=document.getElementById('boton-agua')
        botonAgua.disabled=true
        let botonTierra=document.getElementById('boton-tierra')
        botonTierra.disabled=true

}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}



window.addEventListener('load',iniciarJuego)

