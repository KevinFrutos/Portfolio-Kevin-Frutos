const html = document.querySelector("html")
const home = document.querySelector("#home")
const ancho = window.innerWidth

let toggle = false


if (ancho <= 576) {
    html.onclick = () => {
        if (!toggle) {
            setTimeout(() => {
                home.textContent = "Inicio."
                home.classList.add("fade-in")
            }, 100);

            home.classList.remove("fade-in")

            toggle = true
        } else {
            setTimeout(() => {
                home.textContent = "Kevin."
                home.classList.add("fade-in")
            }, 100);

            home.classList.remove("fade-in")

            toggle = false
        }

    }
}else{
    home.onmouseover = () => {
        home.textContent = "Inicio."
        home.classList.add("animacion")
    }
    
    home.onmouseleave = () => {
        home.textContent = "Kevin."
        home.classList.remove("animacion")
    }
}


// ANIMACIONES
const titulos = ["CFGS: DESARROLLO DE APLICACIONES WEB", "CFGM: SISTEMAS MICROINFORMÁTICOS Y REDES", "ESO: EDUCACIÓN SECUNDARIA OBLIGATORIA"]
const titulo = document.querySelectorAll(".titulo")
const letraTemplate = document.querySelector("#letraTemplate")

for (let i = 0; i < titulos.length; i++) {
    let titulo_estudios = titulos[i]
    for (let j = 0; j < titulo_estudios.length; j++) {
        const clone = letraTemplate.content.cloneNode(true)
        if(titulo_estudios.charAt(j) == " "){
            clone.appendChild(document.createTextNode( '\u00A0' ))
        }else{
            clone.querySelector(".letra").textContent = titulo_estudios.charAt(j)
        }
        titulo[i].appendChild(clone)
    }
}

const letra = document.querySelectorAll(".letra")

letra.forEach(item => {
    item.onmouseover = () => {
        item.classList.add("letra-deformada")
    }

    item.onanimationend = () => {
        item.classList.remove("letra-deformada")
    }
})