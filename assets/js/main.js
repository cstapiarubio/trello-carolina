window.onload=function(){
		document.getElementById("botonLista").addEventListener("click", agregar);
	}

function agregar(){

	//recuperamos el texto ingresado en textarea y limpio textarea
	var list=document.getElementById("newList").value;
	document.getElementById("newList").value="";

	//indicamos donde estaran las tareas recuperadas del textarea
	var contenedor=document.getElementById("areaContenedor");
    contenedor.innerHTML+=list;
	}

	/*//funcion constructor de las listas
function Lista(id){
	this.id = id;
	this.agregar = function(){
		var list = document.getElementById("newList").value;
		document.getElementById("newList").value="";
		var contenedor = document.getElementById("areaContenedor");

		var nuevaLista = document.createElement("div");
		nuevaLista.setAttribute("id","div" + this.id);
		var nombreLista = document.createTextNode(nameList);

		//LABEL de cada tarea
		var labelInput = document.createElement("label");
		var nameLabel = document.createTextNode("Ingrese Tarea");
		labelInput.appendChild(nameLabel);

		var saltoLinea = document.createElement("br"); //crea salto de linea entre el nombre de la lista y la tarea

		//INPUT de cada tarea
		var inputTarea = document.createElement("input");
		inputTarea.setAttribute("id","input" + this.id);

		//BOTON de cada tarea
		var botonTarea = document.createElement("button");
		botonTarea.setAttribute("id","boton" + this.id);
		var contenidoBoton = document.createTextNode("Agregar tarea");
		botonTarea.appendChild(contenidoBoton);

		//LISTA debe anidar el nombre, salto de linea, label, input y boton de cada tarea
		lista.appendChild(nombreLista);
		lista.appendChild(saltoLinea);
		lista.appendChild(labelInput);
		lista.appendChild(inputTarea);
		lista.appendChild(botonTarea);
		contenedor.appendChild(nuevaLista);
	};
}

var i=0;
var boton = document.getElementById("botonLista");
boton.addEventListener("click",function(){
	var agregoLista = new Lista(i.toString());
	i++;
	agregoLista.agregar();
})

//constructor tareas
function TareaNueva(id_tarea){
	this.id_tarea = id_tarea;
	this.agregar = function(){
		var nameWork = document.getElementById("input" + agregoLista.id).value;
		var contenedorTarea = document.getElementById("div" + agregoLista.id);

		var imprimirTarea = document.createElement("div");
		var textoTarea = document.createTextNode(nameWork);
		imprimirTarea.appendChild(textoTarea);
		contenedorTarea.appendChild(imprimirTarea);
	}
}

var j=0;

	var botonTarea = document.getElementById("tareaBoton" + j.toString());
	botonTarea.addEventListener("click",function(){
		var agregoTarea = new TareaNueva(j.toString());
		j++;
		agregoTarea.agregar();
	})*/
