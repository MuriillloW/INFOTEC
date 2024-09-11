let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove("active");
}

let menu = document.querySelector(".nav-bar");

document.querySelector("#menu-icon").onclick = () => {
    // Toggle (alternar) a classe "active" no menu
    menu.classList.toggle("active");
    // Remove a classe "active" da caixa de pesquisa
    search.classList.remove("active");
}

window.onscroll = () => {
    menu.classList.remove("active");
    search.classList.remove("active");
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('shadow', window.scrollY > 0)
})

