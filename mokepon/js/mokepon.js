const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego=document.getElementById('boton-fuego')
const botonAgua=document.getElementById('boton-agua')
const botonTierra=document.getElementById('boton-tierra')

const seleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo=document.getElementById('mascota-enemigo')
const spanMascotaJugador=document.getElementById('mascota-jugador')

const inputHipodoge=document.getElementById('hipodoge')
const inputCapipepo=document.getElementById('capipepo')
const inputRatigueya=document.getElementById('ratigueya')

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-rival')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')

const reiniciar = document.getElementById('reiniciar')
const botonIniciar = document.getElementById('boton-reiniciar')

const sectionMensajes = document.getElementById('resultado')

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
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonIniciar.addEventListener('click', reiniciarJuego)

    ocultarAtaques()
    ocultarBotonReinicio()
}

function seleccionarMascotaJugador(){
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

    botonMascotaJugador.disabled = true
    seleccionarMascotaEnemigo()
    mostrarAtaque()
    ocultarSeleccionMascotas()
}

function ocultarSeleccionMascotas() {
    seleccionarMascota.style.display = 'none'
}

function ocultarAtaques() {
    sectionSeleccionarAtaque.style.display = 'none'
}

function mostrarAtaque() {
    sectionSeleccionarAtaque.style.display = 'flex' 
}

function ocultarBotonReinicio() {
    reiniciar.style.display = 'none' 
}
function mostrarBotonReinicio() {
    reiniciar.style.display = 'flex' 
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(1,3)
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
    if(aleatorio(1,3)==1){
        ataqueEnemigo='FUEGO'}
        else if(aleatorio()==2){
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


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}

function restarVidaEnemigo() {

    vidasEnemigo--

    spanVidasEnemigo.innerHTML = vidasEnemigo
}

function restarVidaJugador() {
    vidasJugador--

    spanVidasJugador.innerHTML = vidasJugador
}

function reiniciarJuego(){
    location.reload()
}

function apagarBotones() {
        botonFuego.disabled=true
        botonAgua.disabled=true
        botonTierra.disabled=true
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load',iniciarJuego)

