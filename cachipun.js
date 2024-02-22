// el 1 es piedra, el 2 es papel y el 3 es tijeras

let ganadasJugador = 0;
let ganadasCpu = 0;

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
            alert("empate")
        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            ganadasCpu++
            alert("Perdio, yo elijo papel")
        } else {
            iconoJugadaCPU(3)
            ganadasJugador++
            alert("Ha ganado")
        }
        //usuario elige papel
    } else if (jugada_usuario == 2) {
        if (jugada_cpu == 1) {
            iconoJugadaCPU(1)
            ganadasJugador++
            alert("Ha ganado")
        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            alert("empate")
        } else {
            iconoJugadaCPU(3)
            ganadasCpu++
            alert("Perdio, yo elijo tijeras")
        }
        //usuario elige tijeras
    } else if (jugada_usuario == 3) {
        if (jugada_cpu == 1) {
            iconoJugadaCPU(1)
            ganadasCpu++
            alert("Perdio, yo elijo piedra")

        } else if (jugada_cpu == 2) {
            iconoJugadaCPU(2)
            ganadasJugador++
            alert("Ha ganado")
        } else {
            iconoJugadaCPU(3)
            alert("empate")

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



const jugada_usuario = alert('Elija\n1: Piedra\n2:Papel\n3: Tijeras')
const jugada_cpu = Math.ceil(Math.random() * 3)
if(jugada_usuario == 1){
    if(jugada_cpu == 1){
        alert("empate")
    }else if(jugada_cpu == 2){
        alert("Perdio, yo elijo papel")
    }else{
        alert("Ha ganado")
    }
}else if (jugada_usuario == 2){
    if(jugada_cpu == 1){
        alert("Ha ganado")
    }else if(jugada_cpu == 2){
        alert("empate")
    }else{
        alert("Perdio, yo elijo tijeras")
    }
}else if(jugada_usuario == 3){
    if(jugada_cpu == 1){
        alert("Perdio, yo elijo piedra")
        
    }else if(jugada_cpu == 2){
        alert("Ha ganado")
    }else{
        alert("empate")
       
    }
}else{
    alert("Debe escoger una de las opciones")
}
*/