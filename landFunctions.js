document.querySelector(".misPlanesLink").addEventListener("click", aMisPlanes);

function aMisPlanes() {
    let inicio = document.querySelector("#main");
    let menu = document.querySelector(".menu");
    let misPlanes = document.querySelector("#secondary");
    let inicioLink = document.querySelector(".inicioLink");
    let misPlanesLink = document.querySelector(".misPlanesLink");
    let perfil = document.querySelector(".perfil");
    let usuario = document.querySelector(".usuarioIcono");
    let entrar = document.querySelector(".entrarIcono");
    let salir = document.querySelector(".salirIcono");
    let menuLado = document.querySelector(".menuLado");
    let guia = document.querySelector(".guia");
    let lineaSeccion = document.querySelector(".lineaSeccion");
    inicio.style.left = "-100vw"
    menu.style.borderBottom = "2px solid #ff00bf";
    misPlanes.style.left = "0";
    inicioLink.style.color = "#ffffff"
    misPlanesLink.classList.remove("notActiveMisMenuLink");
    misPlanesLink.classList.add("activeMisMenuLink");
    perfil.style.borderBottom = "2px solid #ff00bf";
    usuario.style.color = "#ff00bf";
    entrar.style.color = "#ff00bf";
    salir.style.color = "#ff00bf";
    menuLado.style.visibility = "hidden";
    guia.style.visibility = "hidden";
    lineaSeccion.style.visibility = "hidden";
    lineaSeccion.style.background = "#ff00bf";
}

document.querySelector(".inicioLink").addEventListener("click", aInicio);

function aInicio() {
    let inicio = document.querySelector("#main");
    let menu = document.querySelector(".menu");
    let misPlanes = document.querySelector("#secondary");
    let inicioLink = document.querySelector(".inicioLink");
    let misPlanesLink = document.querySelector(".misPlanesLink");
    let perfil = document.querySelector(".perfil");
    let usuario = document.querySelector(".usuarioIcono");
    let entrar = document.querySelector(".entrarIcono");
    let salir = document.querySelector(".salirIcono");
    let menuLado = document.querySelector(".menuLado");
    let guia = document.querySelector(".guia");
    let lineaSeccion = document.querySelector(".lineaSeccion");
    inicio.style.left = "0"
    menu.style.borderBottom = "2px solid #00e1ff";
    misPlanes.style.left = "100vw";
    inicioLink.style.color = "#00e1ff"
    misPlanesLink.classList.add("notActiveMisMenuLink");
    misPlanesLink.classList.remove("activeMisMenuLink");
    perfil.style.borderBottom = "2px solid #00e1ff";
    usuario.style.color = "#00e1ff";
    entrar.style.color = "#00e1ff";
    salir.style.color = "#00e1ff";
    menuLado.style.visibility = "visible";
    guia.style.visibility = "visible";
    lineaSeccion.style.visibility = "visible";
    lineaSeccion.style.background = "#00e1ff";
}

document.querySelector(".entrar").addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let inicioDeSesionFondo = document.querySelector(".inicioDeSesionFondo");
    let inicioDeSesion = document.querySelector(".inicioDeSesion");
    let registroFondo = document.querySelector(".registroFondo");
    let registro = document.querySelector(".registro");
    inicioDeSesionFondo.style.visibility = "visible";
    inicioDeSesion.style.visibility= "visible";
    registroFondo.style.visibility = "hidden";
    registro.style.visibility= "hidden";
}

document.querySelector(".cerrarInicioDeSesion").addEventListener("click", cerrarInicioDeSesion);

function cerrarInicioDeSesion() {
    let inicioDeSesionFondo = document.querySelector(".inicioDeSesionFondo");
    let inicioDeSesion = document.querySelector(".inicioDeSesion");
    inicioDeSesionFondo.style.visibility = "hidden";
    inicioDeSesion.style.visibility = "hidden";

}

document.querySelector(".aRegistro").addEventListener("click", abrirRegistro)

function abrirRegistro() {
    let inicioDeSesionFondo = document.querySelector(".inicioDeSesionFondo");
    let inicioDeSesion = document.querySelector(".inicioDeSesion");
    let registroFondo = document.querySelector(".registroFondo");
    let registro = document.querySelector(".registro");
    inicioDeSesionFondo.style.visibility = "hidden";
    inicioDeSesion.style.visibility= "hidden";
    registroFondo.style.visibility = "visible";
    registro.style.visibility= "visible";
}

document.querySelector(".cerrarRegistro").addEventListener("click", cerrarRegistro);

function cerrarRegistro() {
    let registroFondo = document.querySelector(".registroFondo");
    let registro = document.querySelector(".registro");
    registroFondo.style.visibility = "hidden";
    registro.style.visibility = "hidden";
}

document.querySelector(".aInicioDeSesion").addEventListener("click", abrirInicioDeSesion)

function abrirInicioDeSesion() {
    let inicioDeSesionFondo = document.querySelector(".inicioDeSesionFondo");
    let inicioDeSesion = document.querySelector(".inicioDeSesion");
    let registroFondo = document.querySelector(".registroFondo");
    let registro = document.querySelector(".registro");
    inicioDeSesionFondo.style.visibility = "visible";
    inicioDeSesion.style.visibility= "visible";
    registroFondo.style.visibility = "hidden";
    registro.style.visibility= "hidden";
}

document.querySelector(".cerrarDescuento").addEventListener("click", cerrarDescuento);

function cerrarDescuento() {
    let descuento = document.querySelector(".descuento");
    descuento.style.display = "none";
}

document.querySelector("#main").onscroll = function () {
    let posicion = document.querySelector("#main").scrollTop;
    let menu = document.querySelector(".menu");
    let paginaActual = document.querySelector(".activeIniMenuLink");
    let ini = document.querySelector(".ini");
    let que = document.querySelector(".que");
    let comprar = document.querySelector(".comprar");
    let nuestro = document.querySelector(".nuestro");
    let ayuda = document.querySelector(".ayuda");
    let pieIcono = document.querySelector(".pieIcono");
    let guia = document.querySelector(".guia");
    let perfil = document.querySelector(".perfil");
    let usuario = document.querySelector(".usuarioIcono");
    let entrar = document.querySelector(".entrarIcono");
    let salir = document.querySelector(".salirIcono");
    let descuento = document.querySelector(".descuento");
    let linea = document.querySelector(".lineaSeccion");
    let informacion = document.querySelector(".informacion");

    if (posicion == 0) {
        menu.style.borderBottom = "2px solid #00e1ff";
        menu.style.top = "0px";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #00e1ff";
        linea.style.background = "#00e1ff";
        guia.style.color = "#00e1ff";
        guia.style.top = "106px";
        guia.style.left = "17px";
        perfil.style.borderBottom = "2px solid #00e1ff";
        usuario.style.color = "#00e1ff";
        entrar.style.color = "#00e1ff";
        salir.style.color = "#00e1ff";
        paginaActual.style.color = "#00e1ff";
        ini.style.color = "#00e1ff";
        que.style.color = "#3a3a3a"
        comprar.style.color = "#3a3a3a"
        nuestro.style.color = "#3a3a3a"
        ayuda.style.color = "#3a3a3a"
        pieIcono.style.color = "#3a3a3a"

    } else if (posicion == window.innerHeight) {
        menu.style.borderBottom = "2px solid #6f00ff";
        menu.style.top = "0px";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #6f00ff";
        linea.style.background = "#6f00ff";
        guia.style.color = "#6f00ff";
        guia.style.top = "172px";
        guia.style.left = "17px";
        perfil.style.borderBottom = "2px solid #6f00ff";
        usuario.style.color = "#6f00ff";
        entrar.style.color = "#6f00ff";
        salir.style.color = "#6f00ff";
        paginaActual.style.color = "#6f00ff";
        ini.style.color = "#3a3a3a"
        que.style.color = "#6f00ff";
        comprar.style.color = "#3a3a3a"
        nuestro.style.color = "#3a3a3a"
        ayuda.style.color = "#3a3a3a"
        pieIcono.style.color = "#3a3a3a"

    } else if (posicion == window.innerHeight * 2) {
        menu.style.top = "0px";
        menu.style.borderBottom = "2px solid #ff00bf";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #ff00bf";
        linea.style.background = "#ff00bf";
        guia.style.color = "#ff00bf";
        guia.style.top = "234px";
        guia.style.left = "19.5px";
        perfil.style.borderBottom = "2px solid #ff00bf";
        usuario.style.color = "#ff00bf";
        entrar.style.color = "#ff00bf";
        salir.style.color = "#ff00bf";
        paginaActual.style.color = "#ff00bf";
        ini.style.color = "#3a3a3a"
        que.style.color = "#3a3a3a"
        comprar.style.color = "#ff00bf"
        nuestro.style.color = "#3a3a3a"
        ayuda.style.color = "#3a3a3a"
        pieIcono.style.color = "#3a3a3a"

    } else if (posicion == window.innerHeight * 3) {
        menu.style.top = "0px";
        menu.style.borderBottom = "2px solid #ff0000";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #ff0000";
        linea.style.background = "#ff0000";
        guia.style.color = "#ff0000";
        guia.style.top = "294px";
        guia.style.left = "17px";
        perfil.style.borderBottom = "2px solid #ff0000";
        usuario.style.color = "#ff0000";
        entrar.style.color = "#ff0000";
        salir.style.color = "#ff0000";
        paginaActual.style.color = "#ff0000";
        ini.style.color = "#3a3a3a"
        que.style.color = "#3a3a3a"
        comprar.style.color = "#3a3a3a"
        nuestro.style.color = "#ff0000"
        ayuda.style.color = "#3a3a3a"
        pieIcono.style.color = "#3a3a3a"

    } else if (posicion == window.innerHeight * 4) {
        menu.style.top = "0px";
        menu.style.borderBottom = "2px solid #ffa600";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #ffa600";
        linea.style.background = "#ffa600";
        guia.style.color = "#ffa600";
        guia.style.top = "357px";
        guia.style.left = "17px";
        perfil.style.borderBottom = "2px solid #ffa600";
        usuario.style.color = "#ffa600";
        entrar.style.color = "#ffa600";
        salir.style.color = "#ffa600";
        paginaActual.style.color = "#ffa600";
        ini.style.color = "#3a3a3a"
        que.style.color = "#3a3a3a"
        comprar.style.color = "#3a3a3a"
        nuestro.style.color = "#3a3a3a"
        ayuda.style.color = "#ffa600"
        pieIcono.style.color = "#3a3a3a"

    } else if (posicion == window.innerHeight * 5) {
        menu.style.top = "0px";
        menu.style.borderBottom = "2px solid #ffffff";
        descuento.style.top = "47px";
        descuento.style.borderBottom = "2px solid #ffffff";
        linea.style.background = "#ffffff";
        guia.style.color = "#ffffff";
        guia.style.top = "420px";
        guia.style.left = "17px";
        perfil.style.borderBottom = "2px solid #ffffff";
        usuario.style.color = "#ffffff";
        entrar.style.color = "#ffffff";
        salir.style.color = "#ffffff";
        paginaActual.style.color = "#ffffff";
        ini.style.color = "#3a3a3a"
        que.style.color = "#3a3a3a"
        comprar.style.color = "#3a3a3a"
        nuestro.style.color = "#3a3a3a"
        ayuda.style.color = "#3a3a3a"
        pieIcono.style.color = "#ffffff"

    } else {
        descuento.style.top = "1000px";
    }
}