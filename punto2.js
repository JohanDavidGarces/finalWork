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
const prompt = require('prompt-sync')() //Para usar prompt
const listGames = [] //lista donde pondré las victorias y derrotas (lo hago constante para realizar un paso por valor y no tener que llamarla )
function verificar_numero(numero_verificar) {
    while(true){
        if(isNaN(parseInt(numero_verificar))){ //verifica si es un numero
            console.log("Valor no valido")
            numero_verificar=prompt("ingresar un número de 1 a 100 ó 0 para rendirte ") //lo pide de nuevo
        }else{
            return numero_verificar; //devuelve el valor cuando sea número
    }
}
}
function juego(){ 
    let tryAgainFlag=true; //bandera general para repetir el juego
    while(tryAgainFlag){
        adivinar_numero(generar_numero()) //llama las 2 funciones, el generar_numero y lo envia a la función adivinar_numero
        let playAgainYNflag=true; // bandera para verificar que el valor dado sea y ó n
        while(playAgainYNflag){ 
        let playAgain=(prompt("¿Deseas jugar de nuevo? (y/n): ")).toLowerCase() //pide si quiere jugar de nuevo y lo pone en minusculas
        if (playAgain=="y") {

            playAgainYNflag = false    
        }else if (playAgain=="n"){
            
            playAgainYNflag = false    
            return; //saca del juego en caso de que no quiera volver a jugar
        }else{ // en caso de que no sea y ó n
            console.log("Caracter no valido, intenta de nuevo")
        }
        }
    }
}
function contadorVictoriasDerrotas(){
    let Derrotas = listGames.filter(Defeat => Defeat=="D") //crea un array de derrotas
    let Victorias = listGames.filter(Victory=> Victory=="V") //crea un array de victorias
    console.log(`Derrotas totales: ${Derrotas.length} \nVictorias totales: ${Victorias.length}`) //las victorias son la cantidad de V y las derrotas la cantidad de D
}
function generar_numero() {
    return Math.floor(Math.random() * (99) + 1) //genera un número aleatorio del 1 al 100 con la formula: (maxNumber - minNumber) + minNumber)
}
function adivinar_numero(realNumber) {
    flag=true //una bandera para controlar el ciclo
    let attempts=0; //contador de intentos
    while (flag) { //El ciclo principal de la función
        attempts++; // suma los intentos
        let userNumber=prompt("ingresar un número de 1 a 100 ó 0 para rendirte ") //ingresa los números en userNumber
        userNumber=verificar_numero(userNumber)
        if (userNumber==0){
            break; //en caso de que se rinda con 0
        }
        userNumber==realNumber?flag=false:0; // verifica si adivinó el número
        flag==true?(userNumber<realNumber?console.log(`${userNumber} es más pequeño que el número aleatorio`):console.log(`${userNumber} es más grande que el número aleatorio`)):0; //verifica si ya se adivinó y luego determina si el número es mayor o menor
    }
    if(flag){ //si se rinde la bandera seguirá siendo verdadero
    (console.log(`¡Lastima!, el número era ${realNumber} intentos: ${attempts}`)) 
    listGames.push("D")
    }
    else{ //si no se rinde y gana:
    (console.log(`¡Felicidades!, has logrado encontrar el número ${realNumber} después de ${attempts} intento/s`)) //muestra el numero si se rinde o felicita por encontrar el número y muestra la cantidad de intentos
    listGames.push("V")
    }
}
console.log("Bienvenido ") 
juego()
console.log("Gracias por jugar")
contadorVictoriasDerrotas()