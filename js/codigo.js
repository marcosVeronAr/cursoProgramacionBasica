function aleatorio(min,max) {
    return Math.floor(Math.random() * (max-min +1) + min)
}

function eleccion(jugada){ 
if(jugada == 1){
    return "piedra ✊"
} else if (jugada == 2){1
    return "papel 🖐"
} else 
    return "tijera ✌"
}

//1 es piedra, 2 es papel, 3 es tijera

let jugador = 0; 
let pc = 0; 
let triunfos = 0;
let perdidas = 0;

while(triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3);
    jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera");

    if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert(`Ganaste, elegiste ${eleccion(jugador)} y el pc eligió ${eleccion(pc)}`)
        triunfos = triunfos + 1;
    } else if(jugador == pc) {
        alert(`Empate, elegiste ${eleccion(jugador)} y la pc eligió ${eleccion(pc)}`)
    }
    else{
        alert(`Perdiste, elegiste ${eleccion(jugador)} y el pc eligió ${eleccion(pc)}`)
        perdidas = perdidas +1;
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
