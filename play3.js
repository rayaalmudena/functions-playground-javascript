/**
 * la palabra clave 'return'
 */

 /**
  * Las funciones pueden devolver un valor.
  * Esto se consigue mediante la palabra clave 'return'
  * 
  */

function siempreDevuelvoLoMismo() {
    return "Gato!"
}

let x = siempreDevuelvoLoMismo()
console.log("Gato?", x)

/**
 * Evidentemente, que una función siempre devuelve lo mismo, no es (normalmente) muy útil. 
 * Vamos a definir una función que sume dos números; y devuelva el resultado
 */

function suma(a, b) {
    let resultado = a + b
    return resultado
}

let res = suma(1, 2)
console.log("Suma 1", res)

/**
 * Evidentemente, podemos pasar el valor "constante"; pero también podriamos pasar el valor de una variable para realizar dicha suma
 */

 let numero1 = 5
 let numero2 = 10
 let otroResultado = suma(numero1, numero2)
 console.log("Suma 2: ", otroResultado)

 // Fijaos que aquí vemos una de las grandes ventajas de las funciones. Estamos REUTILIZANDO un código en varias partes de nuestro script; pero que se comporta de manera diferente en función del valor de los parámetros que le pasamos (sí, esta función es muy tontita y podríamos hacer 5 + 10! Es solo un ejemplo)

 /**
  * Vamos a ver algo interesante, en este ejemplo, aparentemente igual
  */

  let a = 5
  let b = 10
  let resultado = suma(a,b)
  console.log("Suma 3: ", resultado)

  /**
   * Investiga la función 'suma'. ¿Cómo es posible que usamos el mismo nombre 'a' y 'b' para declarar las variables, y no obtenemos ningún error? También declaramos la variable 'resultado', la cúal también se declara dentro de la función!
   */

   /**
    * A esto se le llama 'ámbito' de una variable, o en inglés, scope. https://desarrolloweb.com/articulos/517.php
    * 
    * Menudo galimatias si tuvieramos  que tener en cuenta el nombre de las variables que se usan dentro de TODAS las funciones.
    * 
    * Para ello, las variables declaradas dentro de una función, NO PUEDEN ser accedidas, ni modificadas, desde fuera de la función
    * 
    */

    /**
     * Esto se puede resumir en : "lo que ocurre dentro de una función, incluido el nombre de sus parámetros, queda dentro de una función". Como en la isla de las tentaciones
     */

     function resta(c, d) {
         let resultado_resta = c - d
         return resultado_resta 
     }
     
     let resultado_resta = resta(1, 2)
     console.log(resultado_resta) // Va a dar 'undefined'. En este punto el script no tiene ni idea donde esta definida la variable 'resultado_resta'; pues no está definida en su ámbito o scope
     














