// nos permitirá seleccionar el boton para elegir mascota una vez que se cargue el html
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);



}




function seleccionarMascotaJugador() {
    let elegirHipodoge = document.getElementById('hipodoge')
    let elegirCapipepo = document.getElementById('capipepo')
    let elegirRatigueya = document.getElementById('ratigueya')

    if(elegirHipodoge.checked) {
        alert("Seleccionaste a Hipodoge 💧💧💧")
    }
    if(elegirCapipepo.checked) {
        alert("Seleccionaste a Capipepo 🌳🌳🌳")
    }
    if(elegirRatigueya.checked) {
        alert("Seleccionaste a Ratigueya 🔥🔥🔥")
    }

}



// Carga los elementos cuando el html termina de renderizarse
window.addEventListener('load', iniciarJuego)