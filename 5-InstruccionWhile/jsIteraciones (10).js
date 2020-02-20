function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var respuesta="si";
	
	while(respuesta!="no")
	{
		numero = parseInt(prompt("ingrese un numero"));
		if(numero > 0){
			acumuladorPositivos+=numero;
			contadorPositivos++;
		}else if(numero < 0){
			acumuladorNegativos+=numero;
			contadorNegativos++;
		}else{
			contadorCeros++;
		}
		if(numero % 2 == 0){
			contadorPares++;
		}
		respuesta = prompt("Desea seguir ingresando otro numero?")
	
	}
	document.write("suma de negativos : " + acumuladorNegativos + "<br/>suma de positivos : " + acumuladorPositivos +
	"<br/> cantdad de positivos : " + contadorPositivos + "<br/>cantidad de negativos : " + contadorNegativos + 
	"<br/>cantidad de ceros : " + contadorCeros + "<br/>cantidad de numeros pares : " + contadorPares + 
	"<br/>promedio de positivos : " + (acumuladorPositivos/contadorPositivos) +
	"<br/> promedio de negativos : " + (acumuladorNegativos/contadorNegativos) + "<br/> diferencia de + y - : " + 
	(acumuladorPositivos - acumuladorNegativos));

}//FIN DE LA FUNCIÓN