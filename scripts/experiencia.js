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
const puestos = ["DISEÑADOR WEB", "PRACTICAS AVELLANA DIGITAL"]
const puesto = document.querySelectorAll(".puesto")
const letraTemplate = document.querySelector("#letraTemplate")

for (let i = 0; i < puestos.length; i++) {
    let puesto_trabajo = puestos[i]
    for (let j = 0; j < puesto_trabajo.length; j++) {
        const clone = letraTemplate.content.cloneNode(true)
        if(puesto_trabajo.charAt(j) == " "){
            clone.appendChild(document.createTextNode( '\u00A0' ))
        }else{
            clone.querySelector(".letra").textContent = puesto_trabajo.charAt(j)
        }
        puesto[i].appendChild(clone)
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