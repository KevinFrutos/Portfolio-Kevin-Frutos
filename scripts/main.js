const experiencia = document.querySelector("#experiencia")
const estudios = document.querySelector("#estudios")
const about = document.querySelector("#about")
let ancho = window.innerWidth

window.onresize = () => {
    ancho = window.innerWidth


    console.log(ancho);

    if (ancho > 576) {
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
        
    } else {

        experiencia.onclick = () => {
            experiencia.textContent = "Experiencia"
            experiencia.classList.add("animacion")
        }

        experiencia.onmouseleave = () => {
            experiencia.textContent = "Hola!"
            experiencia.classList.remove("animacion")
        }

        estudios.onclick = () => {
            estudios.textContent = "Estudios"
            estudios.classList.add("animacion")
        }

        estudios.onmouseleave = () => {
            estudios.textContent = "Me llamo"
            estudios.classList.remove("animacion")
        }

        about.onclick = () => {
            about.textContent = "¿Quien soy?"
            about.classList.add("animacion")
        }

        about.onmouseleave = () => {
            about.textContent = "Kevin."
            about.classList.remove("animacion")
        }
    }
}