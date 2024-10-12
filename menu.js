const openMenu=document.querySelector("#open-menu");
const closetMenu=document.querySelector("#closet-menu");
const aside=document.querySelector("aside");

openMenu.addEventListener("click", () =>{
    aside.classList.add("aside-visible");
})

closetMenu.addEventListener("click", () =>{
    aside.classList.remove("aside-visible");
})

botonesCategorias.forEach(boton => boton.addEventListener("click", () =>{
    aside.classList.remove("aside-visible");
}))