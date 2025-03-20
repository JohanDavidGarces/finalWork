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
function generar_numero() {
    return Math.floor(Math.random() * (99) + 1) //genera un número aleatorio del 1 al 100 con la formula: (maxNumber - minNumber) + minNumber)
}
function adivinar_numero(realNumber) {

}
adivinar_numero(generar_numero())