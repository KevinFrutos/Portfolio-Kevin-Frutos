const html = document.querySelector("html")
const experiencia = document.querySelector("#experiencia")
const estudios = document.querySelector("#estudios")
const about = document.querySelector("#about")
const ancho = window.innerWidth


experiencia.onmouseover = () => {
    experiencia.textContent = "Experiencia"
    experiencia.classList.add("animacion")
}

experiencia.onmouseleave = () => {
    experiencia.textContent = "Hola!"
    experiencia.classList.remove("animacion")
}

estudios.onmouseover = () => {
    estudios.textContent = "Estudios"
    estudios.classList.add("animacion")
}

estudios.onmouseleave = () => {
    estudios.textContent = "Me llamo"
    estudios.classList.remove("animacion")
}

about.onmouseover = () => {
    about.textContent = "¿Quien soy?"
    about.classList.add("animacion")
}

about.onmouseleave = () => {
    about.textContent = "Kevin."
    about.classList.remove("animacion")
}

let toggle = false

if (ancho <= 576) {
    html.onclick = () => {
        if (!toggle) {
            setTimeout(() => {
                experiencia.textContent = "Experiencia"
                experiencia.classList.add("fade-in")
            }, 100);
            setTimeout(() => {
                estudios.textContent = "Estudios"
                estudios.classList.add("fade-in")
            }, 200);
            setTimeout(() => {
                about.textContent = "¿Quien soy?"
                about.classList.add("fade-in")
            }, 400);

            experiencia.classList.remove("fade-in")
            estudios.classList.remove("fade-in")
            about.classList.remove("fade-in")

            toggle = true
        } else {
            setTimeout(() => {
                experiencia.textContent = "Hola!"
                experiencia.classList.add("fade-in")
            }, 100);
            setTimeout(() => {
                estudios.textContent = "Me llamo"
                estudios.classList.add("fade-in")
            }, 200);
            setTimeout(() => {
                about.textContent = "Kevin."
                about.classList.add("fade-in")
            }, 400);

            experiencia.classList.remove("fade-in")
            estudios.classList.remove("fade-in")
            about.classList.remove("fade-in")

            toggle = false
        }


    }
}