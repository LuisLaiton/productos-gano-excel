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

function check_ocultar () {
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        desplegar_menu()
    }
}

