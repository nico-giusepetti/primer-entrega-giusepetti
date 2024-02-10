//Primer entrega || JavaScript
//Nicolás Giusepetti


//---SIMULADOR DE UNA TIENDA DE SUPLEMENTOS DEPORTIVOS---

//VARIABLES
let producto1 = "Proteína en polvo";
let producto2 = "Creatina";
let producto3 = "Aminoacidos BCAA";
let producto4 = "Glutamina";

let precioProducto1 = 23000;
let precioProducto2 = 26000;
let precioProducto3 = 17000;
let precioProducto4 = 19000;

let opcion;

//CÓDIGO EJECUTABLE
//Inicio 
alert("Bienvenido a la tienda de suplementos deportivos.");
do {
    Menu();
    
    switch (opcion) {
        case "1":
            Catalogo();
            break;
        case "2":
            Comprar();
            break;
        case "3":
            alert("Gracias por visitar nuestra tienda. ¡Regresa pronto!");
            break;
        default:
            alert("Opción inválida. Por favor, ingrese una opción válida.");
    }
} while (opcion !== "3");
//Fin 


//FUNCIONES
// Función para el menú de opciones
const Menu = () => { 
    opcion = prompt("1. Ver catálogo de productos\n" +
        "2. Comprar productos\n" +
        "3. Salir\n\n" +
        "Ingrese el número de la opción: ");
    
    return opcion;
}

// Muestra el catalogo de productos
function Catalogo() {
    alert("Catálogo de productos:\n\n" +
        "1. Proteína en polvo\n" +
        "2. Creatina\n" +
        "3. Aminoacidos BCAA\n" +
        "4. Glutamina\n");
}

// Función para obtener el nombre del producto de acuerdo al número
const NombreProducto = (numeroProducto) => {
    switch (numeroProducto) {
        case "1":
            return producto1;
        case "2":
            return producto2;
        case "3":
            return producto3;
        case "4":
            return producto4;
        default:
            return "Desconocido";
    }
}

// Función para la logica de compra
function Comprar() {
    let productoSeleccionado = prompt("Ingrese el número del producto que desea comprar: \n\n" +
        "1. Proteína en polvo\n" +
        "2. Creatina\n" +
        "3. Aminoacidos BCAA\n" +
        "4. Glutamina\n");

    // Verificar si el número de producto seleccionado es válido
    if (productoSeleccionado !== "1" && productoSeleccionado !== "2" && productoSeleccionado !== "3" && productoSeleccionado !== "4") {
        alert("Producto inválido");
        return;
    }

    let cantidad;

    do {
        cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: (10 unidades como máximo)"));

        if (cantidad <= 10) {
            let total;

            switch (productoSeleccionado) {
                case "1":
                    total = cantidad * precioProducto1;
                    break;
                case "2":
                    total = cantidad * precioProducto2;
                    break;
                case "3":
                    total = cantidad * precioProducto3;
                    break;
                case "4":
                    total = cantidad * precioProducto4;
                    break;
            }

            // Mostrar el resumen de la compra
            alert("Resumen de la compra:\n\n" +
                "Producto: " + NombreProducto(productoSeleccionado) +
                "\nCantidad: " + cantidad +
                "\nTotal: $" + total); 
        } else {
            alert("Ha excedido el máximo de unidades permitidas o la opción es inválida. Intente nuevamente.");
        }
    } while (cantidad > 10);
}



