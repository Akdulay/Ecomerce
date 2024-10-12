const productos=[{
    //Rolex
        id:"rolex-01",
        titulo:"Rolex-01",
        imagen:"./img/Rolex/cGYmjq6-.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },
    {
        id:"rolex-02",
        titulo:"Rolex-02",
        imagen:"./img/Rolex/dd.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },
    
    {
        id:"rolex-03",
        titulo:"Rolex-03",
        imagen:"./img/Rolex/WhatsApp Image 2024-09-01 at 11.10.26 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"rolex-04",
        titulo:"Rolex-04",
        imagen:"./img/Rolex/WhatsApp Image 2024-09-01 at 11.10.33 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"rolex-05",
        titulo:"Rolex-05",
        imagen:"./img/Rolex/cGYmjq6-.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"rolex-06",
        titulo:"Rolex-06",
        imagen:"./img/Rolex/WhatsApp Image 2024-09-01 at 11.10.37 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"rolex-07",
        titulo:"Rolex-07",
        imagen:"./img/Rolex/WhatsApp Image 2024-09-01 at 11.10.33 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"rolex-08",
        titulo:"Rolex-08",
        imagen:"./img/Rolex/WhatsApp Image 2024-09-01 at 11.10.30 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    // Cartier
    {
        id:"Pk1",
        titulo:"PK-01",
        imagen:"./img/Cartier/Patek Philippe Perpetual Calendar Gold Chocolate Dial 5140R-001.jpeg",
        categoria:{
            nombre:"PK",
            id:"pk"
        },
        precio:"$"
    },
    
    {
        id:"Pk2",
        titulo:"Pk-02",
        imagen:"./img/Cartier/rer.jpeg",
        categoria:{
            nombre:"Pk",
            id:"pk"
        },
        precio:"$"
    },

    {
        id:"PK-03",
        titulo:"PK-03",
        imagen:"./img/Cartier/WhatsApp Image 2024-09-01 at 11.10.33 AM.jpeg",
        categoria:{
            nombre:"Rolex",
            id:"rolex"
        },
        precio:"$"
    },

    {
        id:"PK-04",
        titulo:"PK-04",
        imagen:"./img/Cartier/WhatsApp Image 2024-09-01 at 11.10.33 AM.jpeg",
        categoria:{
            nombre:"Pk",
            id:"pk"
        },
        precio:"$"
    },

    //Omega

    {
        id:"O-01",
        titulo:"O-01",
        imagen:"./img/Omega/Cartier.jpeg",
        categoria:{
            nombre:"Omega",
            id:"cartier"
        },
        precio:"$"
    },

    {
        id:"O-03",
        titulo:"O-03",
        imagen:"./img/Omega/Cartier.jpeg",
        categoria:{
            nombre:"Omega",
            id:"cartier"
        },
        precio:"$"
    },

    {
        id:"O-04",
        titulo:"O-04",
        imagen:"./img/Omega/Cartier.jpeg",
        categoria:{
            nombre:"Omega",
            id:"cartier"
        },
        precio:"$"
    }
];


const contenedorProductos=document.querySelector("#contenedor-productos");
const botonesCategorias=document.querySelectorAll(".boton-categoria");
const tituloPrincipal=document.querySelector("#titulo-principal");
function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto=>{
        const div=document.createElement("div");
        div.classList.add("producto")
        div.innerHTML=`
             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="productos-detalle">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id=${producto.id}>Shell</button>
                    </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton=>{
    boton.addEventListener("click",(e)=>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active")


        if(e.currentTarget.id!="todos"){
            console.log("Hola")
            const productosCategoria=productos.find(productos => productos.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText=productosCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        }
        else{
            tituloPrincipal.innerText="All Products";
            cargarProductos(productos);
        } 
    
    })

})