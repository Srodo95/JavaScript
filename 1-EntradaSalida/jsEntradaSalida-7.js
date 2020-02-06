/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numUno = parseInt(document.getElementById("numeroUno").value);
    var numDos = parseInt(document.getElementById("numeroDos").value);
    alert("la suma es "+ (numUno+numDos));
}

function restar()
{
	var numUno = parseInt(document.getElementById("numeroUno").value);
    var numDos = parseInt(document.getElementById("numeroDos").value);
    alert("la suma es "+ (numUno-numDos));
}

function multiplicar()
{ 
	var numUno = parseInt(document.getElementById("numeroUno").value);
    var numDos = parseInt(document.getElementById("numeroDos").value);
    alert("la suma es "+ (numUno*numDos));
}

function dividir()
{
	var numUno = parseInt(document.getElementById("numeroUno").value);
    var numDos = parseInt(document.getElementById("numeroDos").value);
    alert("la suma es "+ (numUno/numDos));
}

