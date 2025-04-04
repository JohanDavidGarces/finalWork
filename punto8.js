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
] //Vector con datos de prueba, aquí iré agregando los nuevos productos y aplicando las funciones

function validarNumeroFloat(numm) {
    let numero = parseFloat(prompt(numm));
    while (isNaN(numero) || numero <= 0) {
        console.log("Error, no se ingresó un entero mayor o igual a 0");
        numero = parseFloat(prompt(numm));
    }
    return numero;
} //Esto me permite validar si un dato tipo float ingresado si sea un numero y con el while puedo hacer que el usuario siga intentando
function validarNumeroInt(numm) {
    let numero = parseFloat(prompt(numm));
    while (isNaN(numero) || numero < 0 || numero % 1 !== 0) {
        console.log("Error, el dato no es un numero entero mayor o igual a 0");
        numero = parseFloat(prompt(numm));
    }
    return numero;
} //Esto me permite validar si un dato tipo Int ingresado si sea un numero y con el while puedo hacer que el usuario siga intentando

function agregar_producto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = validarNumeroFloat("Ingrese el precio: "); // Uso la función para validar si es numero
    let cantidad = validarNumeroInt("Ingrese la cantidad: "); // Uso la función para validar si es numero
    inventario.push({ nombre, precio, cantidad }); //Con el push agrego al final de array los nuevos productos
    console.log("Producto agregado.");
}

function eliminar_producto() {
    let nombre = prompt("Ingrese el nombre del producto a eliminar: ");
    let index = inventario.findIndex(invent =>
        invent.nombre.toLowerCase() == nombre.toLowerCase()); //Me permite buscar el nombre en el array mediante el findIndex

    if (index !== -1) { // Si el indice es diferente de -1 quiere decir que encontró el producto
        inventario.splice(index, 1) // Una vez tengo el indice que busco, lo elimino con splice
        console.log("Producto eliminado");

    } else {
        console.log("Producto no encontrado");
    }
}

function editar_producto() {
    let nombre = prompt("Ingrese el nombre del producto a editar: ");
    let index = inventario.findIndex(invent =>
        invent.nombre.toLowerCase() === nombre.toLowerCase()); // Encuentro el indice en que se encuentra, independientemente si es mayuscula o minuscula
    if (index !== -1) { // Si el indice es diferente de -1 quiere decir que encontró el producto
        let bandEditar = true;
        while (bandEditar) {// Hago un ciclo y un switch para que me permita consultar qué desea editar el usuario
            console.log("Ingrese una opción para editar: \n1. Editar nombre\n2. Editar precio\n0. Salir")
            let menu = parseInt(prompt(""));
            switch (menu) {
                case 0:
                    bandEditar = false;
                    break;
                case 1:
                    let nombre2 = prompt("Ingrese el nuevo nombre del producto: ");
                    inventario[index].nombre = nombre2; // Igualo el nombre del inventario con el nombre nuevo
                    bandEditar = false;
                    console.log("Producto actualizado");
                    break;
                case 2:
                    let valor2 = validarNumeroFloat("Ingrese el nuevo precio del producto: ");
                    inventario[index].precio = valor2; // Igualo el precio del inventario con el precio nuevo    
                    bandEditar = false;
                    console.log("Producto actualizado");
                    break;
                default:
                    console.log("Opción no válida.\n");
            }
        }

    } else {
        console.log("Producto no encontrado");
    }
}

function listar_productos() {
    if (inventario.length === 0) { // Si la longitud del arreglo es 0, no hay nada registrado
        console.log("No hay productos registrados.");
        return;
    }
    console.log("Lista de productos: ");
    inventario.forEach(invent => {
        console.log(`Producto: ${invent.nombre}, Precio: ${invent.precio.toFixed(2)}, Cantidad: ${invent.cantidad}`); // Mediante un for Each imprimo todo el inventario
    })
}

function comprar_producto() {
    let nombre = prompt("Ingrese el nombre del producto que desea comprar: ");
    let index = inventario.findIndex(invent =>
        invent.nombre.toLowerCase() === nombre.toLowerCase());
    if (index !== -1) { // Si el indice es diferente de -1 quiere decir que encontró el producto
        let compra = validarNumeroInt("Ingrese la cantidad que desea comprar: "); // Uso la función para validar si es numero
        inventario[index].cantidad += compra; // Tendiendo el indice, aumento la cantidad de producto del inventario
        console.log("Producto comprado");
    } else {
        console.log("Producto no encontrado");
    }
}

function vender_producto() {//---------- Cambios meramente esteticos
    let nombre = prompt("Ingrese el nombre del producto que desea vender: ");
    let index = inventario.findIndex(invent =>
        invent.nombre.toLowerCase() === nombre.toLowerCase());
    if (index !== -1) { // Si el indice es diferente de -1 quiere decir que encontró el producto
        console.log(`cantidad de ${nombre} en bodega: ${inventario[index].cantidad}`)
        let venta = validarNumeroInt("Ingrese la cantidad que desea vender: "); // Uso la función para validar si es numero
        if (inventario[index].cantidad < venta) {
            console.log("No hay cantidad suficiente")
            return;
        }
        inventario[index].cantidad -= venta; // Tendiendo el indice, disminuyo la cantidad de producto del inventario
        console.log("Producto vendido");
    } else {
        console.log("Producto no encontrado");
    }
}

band = true;
while (band) { // Mediante un ciclo le muestro al usuario el menú u opciones del programa

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
            band = false;
            break;
        default:
            console.log("Opción no válida.\n");
    }
}