// el 1 es piedra, el 2 es papel y el 3 es tijeras

let ganadasJugador = 0;
let ganadasCpu = 0;
let textoGanador = $("#textoGanador")
$("#piedra").on("click", function () {

    $("#iconoContadorJ").attr("class","fa-regular fa-hand-back-fist");
    jugadaCPU(1);
    // Remove the oldClass.

});

$("#papel").on("click", function () {
    $("#iconoContadorJ").attr("class","fa-regular fa-hand");
    jugadaCPU(2);
});

$("#tijeras").on("click", function () {
    $("#iconoContadorJ").attr("class","fa-regular fa-hand-scissors");
    jugadaCPU(3);
});
$("#btnReiniciar").on("click",reiniciar)

function reiniciar(){
    ganadasJugador = 0;
    ganadasCpu = 0;
    $("#iconoContadorJ").attr("class","fa-regular fa-hand");
    $("#iconoContadorCPU").attr("class","fa-regular fa-hand");
    textoGanador.html("")
    contadorGanadas()
}



function jugadaCPU(jugada_usuario) {
    const jugada_cpu = Math.ceil(Math.random() * 3)
    //usuario elige piedra
    //1 en cpu es piedra
    //2 en cpu es papel
    //3 en cpu es tijeras
    if (jugada_usuario == 1) {
        if (jugada_cpu == 1) {
            iconoJugadaCPU(1)
            textoGanador.html("empate")
        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            ganadasCpu++
            textoGanador.html("Perdio, yo elijo papel")
        } else {
            iconoJugadaCPU(3)
            ganadasJugador++
            textoGanador.html("Ha ganado")
        }
        //usuario elige papel
    } else if (jugada_usuario == 2) {
        if (jugada_cpu == 1) {
            iconoJugadaCPU(1)
            ganadasJugador++
            textoGanador.html("Ha ganado")
        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            textoGanador.html("empate")
        } else {
            iconoJugadaCPU(3)
            ganadasCpu++
            textoGanador.html("Perdio, yo elijo tijeras")
        }
        //usuario elige tijeras
    } else if (jugada_usuario == 3) {
        if (jugada_cpu == 1) {
            iconoJugadaCPU(1)
            ganadasCpu++
            textoGanador.html("Perdio, yo elijo piedra")

        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            ganadasJugador++
            textoGanador.html("Ha ganado")
        } else {
            iconoJugadaCPU(3)
            textoGanador.html("empate")

        }
    }
    contadorGanadas()
}

function iconoJugadaCPU(jugadaCPU){
    if(jugadaCPU == 1){

        $("#iconoContadorCPU").attr("class","fa-regular fa-hand-back-fist");
    }else if(jugadaCPU == 2){
        $("#iconoContadorCPU").attr("class","fa-regular fa-hand");
        
    }else if(jugadaCPU == 3){
        $("#iconoContadorCPU").attr("class","fa-regular fa-hand-scissors");
        
    }

}
function contadorGanadas(){
    $("#contadorCPU").html(ganadasCpu)
    $("#contadorJugador").html(ganadasJugador)
}












/*



const jugada_usuario = textoGanador.html('Elija\n1: Piedra\n2:Papel\n3: Tijeras')
const jugada_cpu = Math.ceil(Math.random() * 3)
if(jugada_usuario == 1){
    if(jugada_cpu == 1){
        textoGanador.html("empate")
    }else if(jugada_cpu == 2){
        textoGanador.html("Perdio, yo elijo papel")
    }else{
        textoGanador.html("Ha ganado")
    }
}else if (jugada_usuario == 2){
    if(jugada_cpu == 1){
        textoGanador.html("Ha ganado")
    }else if(jugada_cpu == 2){
        textoGanador.html("empate")
    }else{
        textoGanador.html("Perdio, yo elijo tijeras")
    }
}else if(jugada_usuario == 3){
    if(jugada_cpu == 1){
        textoGanador.html("Perdio, yo elijo piedra")
        
    }else if(jugada_cpu == 2){
        textoGanador.html("Ha ganado")
    }else{
        textoGanador.html("empate")
       
    }
}else{
    textoGanador.html("Debe escoger una de las opciones")
}
*/