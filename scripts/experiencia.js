const home = document.querySelector("#home")

home.onmouseover = () => {
    home.textContent = "Inicio."
    home.classList.add("animacion")
}

home.onmouseleave = () => {
    home.textContent = "Kevin."
    home.classList.remove("animacion")
}