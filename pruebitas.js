///////////////////////////////////////////////// Array y constructor

let arraySecciones = []
let arrayProductos = []

class Menu {
    constructor(nombre, descripcion,categoria) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.categoria = categoria
    }

}

///////////////////////////////////////////////// Secciones
let btnCreaSeccion = document.getElementById("btnCreaSeccion")

btnCreaSeccion.addEventListener("click", () => {

	let inputSecciones = document.getElementById("inputSecciones").value
	arraySecciones.push(inputSecciones)	
	limpio()
	creoSección()
})


function creoSección() {
	let newLi = document.createElement("li")
	let depositoSecciones = document.getElementById("depositoSecciones")
		let nameSecciones = document.getElementById("nameSecciones")


arraySecciones.forEach(section => {
	
	newLi.textContent = section
	depositoSecciones.appendChild(newLi)

	newLi.addEventListener("click", () =>{	
		nameSecciones.textContent = section

	})

})
	
	
}

console.log(arraySecciones)

function limpio() {document.getElementById("inputSecciones").value = ""}

/////////////////////////////////////////////////Productos


let btnCreoProducto = document.getElementById("btnCreoProducto")

btnCreoProducto.addEventListener("click", () => {
	creoProducto();
})

function creoProducto() {

	let inputNombre = document.getElementById("inputNombre").value
	let inputDescripcion = document.getElementById("inputDescripcion").value
	let inputCategoria = document.getElementById("inputCategoria").value

	let producto = new Menu(inputNombre,inputDescripcion,inputCategoria)

	arrayProductos.push(producto)

	limpioInputsProd();
	

}

function limpioInputsProd () {
	document.getElementById("inputNombre").value = ""
	document.getElementById("inputDescripcion").value = ""
	document.getElementById("inputCategoria").value = ""
}

console.log(arrayProductos)