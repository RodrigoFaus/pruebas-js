///////////////////////////////////////////////// Array y constructor////////////////////////////////////////////////////

let arraySecciones = []
let arrayProductos = []

class Menu {
    constructor(nombre, descripcion,categoria) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.categoria = categoria

    }

}

///////////////////////////////////////////////// Secciones////////////////////////////////////////////////////

let btnCreaSeccion = document.getElementById("btnCreaSeccion")

btnCreaSeccion.addEventListener("click", () => {

	let inputSecciones = document.getElementById("inputSecciones").value
	arraySecciones.push(inputSecciones)	
	limpio()
	creoSección()
	asignoSecciones()
})

//Funcion que crea las secciones
function creoSección() {
	let newLi = document.createElement("li")
	let newDiv = document.createElement("div")
	let p = document.createElement("p")
	let depositoDiv = document.getElementById("depositoProductos")
	let depositoSecciones = document.getElementById("depositoSecciones")
	let nameSecciones = document.getElementById("nameSecciones")
	let nuevo = document.createElement("p")



	newDiv.classList = "contenedor-prod"

	arraySecciones.forEach(section => {
		let pruebaFiltrado = arrayProductos.filter((prod) => prod.categoria == section)
		nuevo.innerHTML = pruebaFiltrado

		newLi.textContent = section
		newLi.classList = "secciones"
		
		depositoSecciones.appendChild(newLi)
		newLi.setAttribute("data-categorias",section)
		p.textContent = section

		newDiv.setAttribute("data-categorias",section)

		newDiv.appendChild(p)
		depositoDiv.appendChild(newDiv)
		depositoDiv.appendChild(nuevo)
		

		newLi.addEventListener("click", () =>{	
			nameSecciones.textContent = section

		})
	})

	filtraContenidoSeccion()
	
}

function filtraContenidoSeccion(){
	const seccionesCreadas = document.querySelectorAll(".secciones")
	const contenedorProductosCreados = document.querySelectorAll(".contenedor-prod")
	let categoriaActiva = null;

	seccionesCreadas.forEach((seccionCreada) => {

		
		

		seccionCreada.addEventListener("click", (e) => {

			seccionesCreadas.forEach((elemento) => {
				elemento.classList.remove("active")
			})

			e.currentTarget.classList.toggle("active")
			categoriaActiva = seccionCreada.dataset.categorias;
			console.log(categoriaActiva)


			// Se activa el contenedor de productos que corresponde

			contenedorProductosCreados.forEach((contenedor) => {

				if (contenedor.dataset.categorias === categoriaActiva) {
					contenedor.classList.add("active")

				} else {
					contenedor.classList.remove("active")
				}

			})

		})
	
	})



}




//Funcion que crea las seccciones en el select y options del html


function asignoSecciones() {
    let select = document.getElementById("inputGroupSelect01")
    let option = document.createElement("option")

    arraySecciones.forEach(section => {
        option.textContent = section
        select.appendChild(option)
    })

}

//Funcion que limpia input
function limpio() {document.getElementById("inputSecciones").value = ""}

/////////////////////////////////////////////////Productos////////////////////////////////////////////////////


let btnCreoProducto = document.getElementById("btnCreoProducto")

btnCreoProducto.addEventListener("click", () => {
	creoProducto();
	

})


//Funcion que crea los productos
function creoProducto() {

	let inputNombre = document.getElementById("inputNombre").value
	let inputDescripcion = document.getElementById("inputDescripcion").value
	let inputCategoria = document.getElementById("inputGroupSelect01").value

	let producto = new Menu(inputNombre,inputDescripcion,inputCategoria)
	arrayProductos.push(producto)

	limpioInputsProd();


}


//Funcion que limpia input de productos
function limpioInputsProd () {
	document.getElementById("inputNombre").value = ""
	document.getElementById("inputDescripcion").value = ""
	document.getElementById("inputGroupSelect01").value = ""

}




console.log(arrayProductos)
