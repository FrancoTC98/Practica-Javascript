/* 
crear un progrma aque solicite al usuario el ingreso de dos valores numericos,
el progrma debe identificar cual es el mayor de los dos valores. A ese mayor multiplicarlos por su cudrado al menos diez veces
y mostrar su resultado final
*/

let numeroUno = parseInt(prompt("Ingrese el primer numero: "))
console.log("Numero ingresado: " + numeroUno)
let numeroDos = parseInt(prompt("Ingrese el segundo numero: "))
console.log("Numero dos ingresado: " + numeroDos)  
let numeroMayor = 0

if (numeroUno > numeroDos) {
    alert("El numero " + numeroUno + " es mayor que el numero " + numeroDos) 
    numeroMayor = numeroUno
}
else if (numeroDos > numeroUno) {   
    alert("El numero " + numeroDos + " es mayor que el numero " + numeroUno)
    numeroMayor = numeroDos
} 
else {
    alert("Los numeros ingresados son iguales")
} 

let resultado = 0

for (let i = 0; i < 10; i++) {
    resultado += Math.pow(numeroMayor, 2)
}

alert("El resultado final de multiplicar el numero mayor por su cuadrado 10 veces es: " + resultado)



