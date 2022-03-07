/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {
   

    if (condicion == 'buena') {
        return 0.5*km;
    }else if (condicion == 'regular') {
        return 0.61*km;
    }else if(condicion == 'mala') {
        return 0.71*km;
    }else{
        return "error";
    }
}

let condicion = 'regular';
let km = 5;
let agua = Math.round(agua_necesaria(condicion, km));
console.log("Este ciclista deberia necesitar 5 * 0.6 = 3 litros de agua en total: ", agua);