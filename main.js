const trabajo = document.querySelector("#trabajo")
const estudios = document.querySelector("#estudios")
const about = document.querySelector("#about")

trabajo.onmouseover = () => {
    trabajo.textContent = "Experiencia"
    trabajo.classList.add("animacion")
}

trabajo.onmouseleave = () => {
    trabajo.textContent = "Hola!"
    trabajo.classList.remove("animacion")
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
    about.textContent = "Kevin Frutos"
    about.classList.remove("animacion")
}