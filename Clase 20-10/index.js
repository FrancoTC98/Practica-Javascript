let numeroUno = parseInt(prompt("Ingrese el primer numero: "))
console.log("Numero ingresado: " + numeroUno)
let numeroDos = parseInt(prompt("Ingrese el segundo numero: "))
console.log("Numero dos ingresado: " + numeroDos)
let suma = numeroUno + numeroDos
console.log("La suma de los dos numeros es: " + suma)
let resta = numeroUno - numeroDos
console.log("La resta de los dos numeros es: " + resta)
let multiplicacion = numeroUno * numeroDos
console.log("La multiplicacion de los dos numeros es: " + multiplicacion)
let division = numeroUno / numeroDos
console.log("La division de los dos numeros es: " + division)

console.error("hola")
console.warn("adios")
console.info("informacion")

//Estructura condicional simple
if (numeroUno > numeroDos) { console.log("El primer numero es mayor que el segundo") }
//Estructura condicional doble
if (suma % 2 === 0) { console.log("La suma es un numero par") }
else { console.log("La suma es un numero impar") }

// Estructura condicional anidada
if (numeroUno > numeroDos)
    switch (numeroUno) {
        case 1:
            alert("El primer numero es 1")
            break
        case 2:
            alert("El primer numero es 2")
            break
        case 3:
            alert("El primer numero es 3")
            break
        case 4:
            alert("El primer numero es 4")
            break
        case 5:
            alert("El primer numero es 5")
            break
        case 6:
            alert("El primer numero es 6")
            break
        case 7:
            alert("El primer numero es 7")
            break
        case 8:
            alert("El primer numero es 8")
            break
        case 9:
            alert("El primer numero es 9")
            break
        case 10:
            alert("El primer numero es 10")
            break
        default:
            alert("No hay ningun caso que coincida con el primer numero")
            break
    } 

    // Estructura condicional anidada con operador ternario

    let resultadoMayor= (numeroUno > numeroDos) ? "El mayor es el primer numero" : "El mayor es el segundo numero"
    console.log(resultadoMayor)

    //condicional multiple (if anidados)