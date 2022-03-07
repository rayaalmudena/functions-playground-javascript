//Podemos definir functiones nosotros mismos.
// Aquí por ejemplo una función que muestra por consola un mensaje

function muestraPorConsola() {
    console.log("Un mensaje!")
}

muestraPorConsola()

//Sin embargo, la gracia de las funciones es poder parametrizarlas. Es decir, que hagan algo diferente en función de la información que le suministras

function muestraPorConsola_v2(mensaje) {
    console.log(mensaje)
}

muestraPorConsola_v2("Lo que yo ponga aquí, es lo que se va a mostrar por consola!")

//Las funciones pueden tener más de un parámetro. Por ejemplo, la siguiente función "suma" tiene 2. Lo que hace es sumar el valor de dichos parámetros y los muestra por consola

function suma(a, b) {
    let c = a + b;
    console.log(c)
}

suma(1,2)
suma(-1, -8)
suma(0, 0)





