window.onload=function(){
		document.getElementById("boton").addEventListener("click", agregar);
	}

function agregar(){

	//recuperamos el texto ingresado en textarea y limpio textarea
	var list=document.getElementById("list").value;
	document.getElementById("list").value="";

	//indicamos donde estaran las tareas recuperadas del textarea
	var contenedor=document.getElementById("contenedor");
	}
