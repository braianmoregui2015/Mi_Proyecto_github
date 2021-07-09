class Gondola {
    constructor(nombre, tipo, cantidad){
        this.nombre = nombre
        this.tipo = tipo
        this.cantidad = cantidad


    }


}

const Productos = [] 

function crearProducto (){
    const nombre = document.getElementById("nombre").value
    const tipo = document.getElementById("tipo").value
    const cantidad = document.getElementById("cantidad").value

    const nuevoObjeto = new Gondola(nombre , tipo, cantidad)
    Productos.push(nuevoObjeto)
    console.log(Productos)
}

function mostrarProducto () {

    const mostrar = document.getElementById("mostrar")
    
    Productos.forEach(element => {

        mostrar.innerHTML += 
                    `<div>
                    <p>${element.nombre}</p>
                    <p>${element.tipo}</p>
                    <p>${element.cantidad}</p>
                    
                    </div>
                    `
                        
  });

}



const btnGuardar = document.getElementById("guardar")
btnGuardar.addEventListener("click" , crearProducto)

const btnMostrar = document.getElementById("mostrar")
btnMostrar.addEventListener("click" , mostrarProducto)