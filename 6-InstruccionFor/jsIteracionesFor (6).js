function mostrar()
{

    var repeticiones = prompt("ingrese la cantidad de repeticiones ");
    var contadorPares = 0;
    for(var i=0;i<repeticiones;i++){
        if(i%2==0){
            document.write("Numero : "+i+"<br>");
            contadorPares++;
        }
    }
    document.write("CANTIDAD DE NUMEROS PARES : " + contadorPares);

}//FIN DE LA FUNCIÓN