// ==========================================
// VARIABLES
// ==========================================

let productos = [];
let carrito = [];
let total = 0;


// ==========================================
// CARGA DE PRODUCTOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Traemos los productos desde el archivo JSON
    fetch("./data/productos.json")

        .then(res => res.json())

        .then(data => {

            // Guardamos los productos
            productos = data;

            // Mostramos los productos
            cargarProductosEnPantalla();

            // Cargamos el carrito guardado
            cargarCarritoDesdeLocalStorage();

            // Botón vaciar carrito
            document
                .getElementById("vaciarCarrito")
                .addEventListener("click", vaciarCarrito);

            // Botón finalizar compra
            document
                .getElementById("finalizarCompra")
                .addEventListener("click", finalizarCompra);

        })

        .catch(error => {

            console.error(
                "Error al cargar productos:",
                error
            );

        });

});


// ==========================================
// ASESOR GATUNO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Botones
    const btnIzquierda =
        document.getElementById("activarIzquierda");

    const btnDerecha =
        document.getElementById("activarDerecha");


    // Imágenes de los gatos
    const imagenes =
        document.querySelectorAll(".michi_compania");


    // ======================================
    // GATO IZQUIERDO
    // ======================================

    btnIzquierda.addEventListener("click", () => {

        imagenes[0].style.display = "block";

        btnIzquierda.style.display = "none";


        Toastify({

            text: "Ascesor gatuno activado ✅",

            duration: 2000,

            gravity: "bottom",

            position: "left",

            backgroundColor:
                "linear-gradient(to right, #00b09b, #96c93d)",

        }).showToast();

    });


    // ======================================
    // GATO DERECHO
    // ======================================

    btnDerecha.addEventListener("click", () => {

        imagenes[1].style.display = "block";

        btnDerecha.style.display = "none";


        Toastify({

            text: "Ascesor gatuno activado ✅",

            duration: 2000,

            gravity: "bottom",

            position: "right",

            backgroundColor:
                "linear-gradient(to right, #00b09b, #96c93d)",

        }).showToast();

    });

});