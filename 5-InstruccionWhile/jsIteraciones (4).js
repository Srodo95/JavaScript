function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero>10 || numero<0){
		numero = prompt("por favor ingrese un numero correcto");
	}
	alert("numero valido!!!");

}//FIN DE LA FUNCIÓN