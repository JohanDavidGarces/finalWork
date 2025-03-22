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

let inventario = [
    { nombre: "Headset", precio: 100, cantidad: 10 },
    { nombre: "Laptop", precio: 1000, cantidad: 5 },
]

function agregar_producto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio: "));
    let cantidad = parseInt(prompt("Ingrese la cantidad: "));

    inventario.push({ nombre, precio, cantidad });
    console.log("Producto agregado.");
}

function eliminar_producto() {
    
}

function listar_productos() {
    if(inventario.length===0){
        console.log("No hay productos registrados.");
        return;
    }
    console.log("Lista de productos: ");
    inventario.forEach(invent => {
        console.log(`${invent.nombre}, Precio: ${invent.precio}, Cantidad: ${invent.cantidad}`);
    })
}

band=true;
while (band) {
    
    console.log("Bienvenido al sistema de invetario de la tienda TEC.\n")
    console.log("1. Agregar producto.")
    console.log("2. Editar producto.")
    console.log("3. Eliminar producto.")
    console.log("4. Listar productos.")
    console.log("5. Comprar producto.")
    console.log("6. Vender producto.")
    console.log("7. Salir.")

    let menu = parseInt(prompt("Ingrese una opción: "));

    switch (menu) {
        case 1:
            agregar_producto();
            break;
        case 2:
            editar_producto();
            break;  
        case 3:
            eliminar_producto();
            break;
        case 4:
            listar_productos();
            break;
        case 5:
            comprar_producto();
            break;
        case 6:
            vender_producto();
            break;      
        case 7:
            console.log("Saliendo del sistema.\n");
            band=false;
            break;
        default:
            console.log("Opción no válida.\n");
    }
}