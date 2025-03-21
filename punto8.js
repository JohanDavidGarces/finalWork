/* 📚 Proyecto 8: Simulador de Tienda 

Descripción 

Desarrollar una aplicación en consola que simule el funcionamiento de una tienda, permitiendo a los usuarios comprar y vender productos. 

  

Requisitos Funcionales 

Agregar producto: Permitir al usuario agregar un nuevo producto con nombre, precio y cantidad. 

Editar producto: Permitir al usuario editar un producto existente. 

Eliminar producto: Permitir al usuario eliminar un producto. 

Listar productos: Listar todos los productos disponibles en la tienda. 

Comprar producto: Permitir al usuario comprar un producto, disminuyendo su cantidad en el inventario. 

Vender producto: Permitir al usuario vender un producto, aumentando su cantidad en el inventario. 

Manejo de Excepciones: Manejar errores como entrada inválida y operaciones en productos inexistentes. 

Requisitos Técnicos 

Entrada y salida de datos: Utilizar input() y print() en Python, prompt() y console.log() en JavaScript. 

Estructuras de control: Utilizar if, else, while para controlar el flujo del programa. 

Manejo de excepciones: Utilizar try-except en Python, try-catch en JavaScript para manejar errores. 

Manipulación de arrays/listas: Utilizar arrays o listas para almacenar los productos. 

Estructura del Proyecto 

main.py o main.js: Punto de entrada del programa. 

Funciones: 

agregar_producto(): Función para agregar un producto. 

editar_producto(): Función para editar un producto. 

eliminar_producto(): Función para eliminar un producto. 

listar_productos(): Función para listar todos los productos. 

comprar_producto(): Función para comprar un producto. 

vender_producto(): Función para vender un producto. 

*/

const prompt = require('prompt-sync')();

let prueba = prompt("Test branch");
console.log(prueba);