/*
📚 Proyecto 2: Juego de Adivinanza 

Descripción 

Crear un juego en consola donde el usuario debe adivinar un número generado aleatoriamente por la aplicación. 

  

Requisitos Funcionales 

Generar número aleatorio: Generar un número aleatorio entre 1 y 100. 

Solicitar adivinanzas: Permitir al usuario ingresar adivinanzas. 

Dar pistas: Informar al usuario si su adivinanza es mayor o menor que el número generado. 

Contar intentos: Contar el número de intentos realizados por el usuario. 

Manejo de Excepciones: Manejar errores como entrada no numérica. 

Requisitos Técnicos 

Entrada y salida de datos: Utilizar input() y print() en Python, prompt() y console.log() en JavaScript. 

Estructuras de control: Utilizar if, else, while para controlar el flujo del programa. 

Manejo de excepciones: Utilizar try-except en Python, try-catch en JavaScript para manejar errores. 

Generación de números aleatorios: Utilizar funciones de generación de números aleatorios. 

Estructura del Proyecto 

main.py o main.js: Punto de entrada del programa. 

Funciones: 

generar_numero(): Función para generar un número aleatorio. 

adivinar_numero(): Función para gestionar el juego de adivinanza. 
*/
const prompt = require('prompt-sync')()
function verificar_numero(numero_verificar) {
    
}
function generar_numero() {
    return Math.floor(Math.random() * (99) + 1) //genera un número aleatorio del 1 al 100 con la formula: (maxNumber - minNumber) + minNumber)
}
function adivinar_numero(realNumber) {
    flag=true //una bandera para controlar el ciclo
    let attempts=0; //contador de intentos
    while (flag) { //El ciclo principal de la función
        attempts++; // suma los intentos
        let userNumber=prompt("ingresar x número") //ingresa los números en userNumber
        userNumber==realNumber?flag=false:0; // verifica si adivinó el número
        flag==true?(userNumber<realNumber?console.log(`${userNumber} es más pequeño que el número aleatorio`):console.log(`${userNumber} es más grande que el número aleatorio`)):0; //verifica si ya se adivinó y luego determina si el número es mayor o menor
    }
    console.log(`¡Felicidades!, has logrado encontrar el número ${realNumber} después de ${attempts} intento/s`) //felicita por encontrar el número y muestra la cantidad de intentos 
}
adivinar_numero(generar_numero()) //llama las 2 funciones, el generar_numero y lo envia a la función adivinar_numero
