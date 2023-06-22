const $BTN_NAVBAR = document.querySelector(".navBar__menu-hamburguesa");
$BTN_NAVBAR.onclick = desplegar_menu

const $MENU_ENLACES = document.querySelector(".navBar__enlaces")
function desplegar_menu() {
    $MENU_ENLACES.classList.toggle("navBar__enlaces--desplegable")
}

const $ENLACES = document.querySelectorAll(".navBar__item")
$ENLACES.forEach(element => {
    element.onclick = check_ocultar
});

function check_ocultar() {
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        desplegar_menu()
    }
}


const $BTN_PRODUCTOS = document.querySelectorAll(".card-productos__producto")
$BTN_PRODUCTOS.forEach(element => {
    element.onclick = card_producto
});

let productos
fetch('../DB/datos.json')
    .then(response => response.json())
    .then(data => {
        productos = data
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

function card_producto(event) {
    event.preventDefault();

    const $PRODUCTO = productos[event.currentTarget.textContent]
    const $NOMBRE = document.querySelector(".card-productos__titulo"),
        $BENEFICIOS = document.querySelector(".card-productos__beneficios"),
        $IMAGEN = document.querySelector(".card-productos__imagen"), 
        $PRECIOS = document.querySelector(".card-productos__precios").querySelector("p"),
        $CANTIDAD = document.createElement("sub"),
        $SUB_TEXT = document.createTextNode(" X " + $PRODUCTO.cantidad),
        $SUB_PRECIOS = document.createElement("sub"),
        $SUB_PRECIOS_TEXT = document.createTextNode($PRODUCTO.precio_xMenor)

    $NOMBRE.textContent = $PRODUCTO.nombre
    $CANTIDAD.appendChild($SUB_TEXT)
    $NOMBRE.appendChild($CANTIDAD)

    $BENEFICIOS.querySelectorAll("li").forEach(element => element.remove())
    for (const item of $PRODUCTO.beneficios) {
        let $ITEM = document.createElement("li")
        $ITEM.innerHTML = item
        $BENEFICIOS.appendChild($ITEM)
    }

    $IMAGEN.setAttribute("src", "imagenes/productos/" + $PRODUCTO.imagen)

    $PRECIOS.textContent = $PRODUCTO.precio_xMayor + " / "
    $SUB_PRECIOS.appendChild($SUB_PRECIOS_TEXT)
    $PRECIOS.appendChild($SUB_PRECIOS)
}
