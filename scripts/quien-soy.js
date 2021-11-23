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
const nombres = ["KEVIN VALENTIN FRUTOS RIVERA"]
const nombre = document.querySelectorAll(".nombre")
const letraTemplate = document.querySelector("#letraTemplate")

for (let i = 0; i < nombres.length; i++) {
    let name = nombres[i]
    for (let j = 0; j < name.length; j++) {
        const clone = letraTemplate.content.cloneNode(true)
        if(name.charAt(j) == " "){
            clone.appendChild(document.createTextNode( '\u00A0' ))
        }else{
            clone.querySelector(".letra").textContent = name.charAt(j)
        }
        nombre[i].appendChild(clone)
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