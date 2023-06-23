// Selección de elementos del DOM
const $BTN_NAVBAR = document.querySelector(".navBar__menu-hamburguesa");
const $MENU_ENLACES = document.querySelector(".navBar__enlaces");
const $ENLACES = document.querySelectorAll(".navBar__item");
const $BTN_PRODUCTOS = document.querySelectorAll(".card-productos__producto");
const $NOMBRE = document.querySelector(".card-productos__titulo");
const $BENEFICIOS = document.querySelector(".card-productos__beneficios");
const $IMAGEN = document.querySelector(".card-productos__imagen");
const $PRECIOS = document.querySelector(".card-productos__precios").querySelector("p");
const $ETAPAS = document.querySelector(".etapas")

// Asignación de eventos a elementos
$BTN_NAVBAR.onclick = desplegar_menu;
$ENLACES.forEach(element => {
    element.onclick = check_ocultar;
});
$BTN_PRODUCTOS.forEach(element => {
    element.onclick = card_producto;
});
$ETAPAS.querySelectorAll(".etapas__item").forEach(element => {
    element.onclick = etapa;
});

let datos;

// Obtener datos del archivo JSON
fetch('https://raw.githubusercontent.com/LuisLaiton/productos-gano-excel/basica/DB/datos.json')
    .then(response => response.json())
    .then(data => {
        datos = data;
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

// Función para desplegar/ocultar menú
function desplegar_menu() {
    $MENU_ENLACES.classList.toggle("navBar__enlaces--desplegable");

    $BTN_NAVBAR.querySelector("svg").remove()
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        $BTN_NAVBAR.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>'
    } else {
        $BTN_NAVBAR.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor"d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>'
    }
}

// Función para verificar y ocultar menú al hacer clic en un enlace
function check_ocultar() {
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        desplegar_menu();
    }
}

// Función para mostrar información del producto
function card_producto(event) {
    event.preventDefault();

    const $PRODUCTO = datos[event.currentTarget.textContent];
    const $CANTIDAD = document.createElement("sub");
    const $SUB_TEXT = document.createTextNode(" X " + $PRODUCTO.cantidad);
    const $SUB_PRECIOS = document.createElement("sub");
    const $SUB_PRECIOS_TEXT = document.createTextNode($PRODUCTO.precio_xMenor);

    // Mostrar el nombre del producto con la cantidad
    $NOMBRE.textContent = $PRODUCTO.nombre;
    $CANTIDAD.appendChild($SUB_TEXT);
    $NOMBRE.appendChild($CANTIDAD);

    // Mostrar los beneficios del producto
    $BENEFICIOS.innerHTML = $PRODUCTO.beneficios.map(item => `<li>${item}</li>`).join("");

    // Mostrar la imagen del producto
    $IMAGEN.setAttribute("src", "imagenes/productos/" + $PRODUCTO.imagen);

    // Mostrar los precios del producto
    $PRECIOS.textContent = $PRODUCTO.precio_xMayor + " / ";
    $SUB_PRECIOS.appendChild($SUB_PRECIOS_TEXT);
    $PRECIOS.appendChild($SUB_PRECIOS);
}

// Función para mostrar información de la etapa
function etapa(event) {
    event.preventDefault();

    var elementos = document.getElementsByClassName("etapas__texto");

    // Oculta todos los elementos
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }

    // Muestra el elemento correspondiente al botón clickeado
    switch (event.currentTarget.getAttribute("id")) {
        case "Btn-exploracion":
            document.getElementById("Exploracion").style.display = 'block';
            break;
        case "Btn-limp-desin":
            document.getElementById("Limp-desin").style.display = 'block';
            break;
        case "Btn-regulacion":
            document.getElementById("Regulacion").style.display = 'block';
            break;
        case "Btn-construccion":
            document.getElementById("Construccion").style.display = 'block';
            break;
        case "Btn-regeneracion":
            document.getElementById("Regeneracion").style.display = 'block';
            break;
        default:
            alert("Etapa no reconocida")
            break;
    }
}