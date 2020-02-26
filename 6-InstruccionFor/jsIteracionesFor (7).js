function mostrar()
{
    var repeticiones = prompt("ingrese la cantidad de repeticiones ");
    var contadorDivisores = 0;
    for(var i=0;i<repeticiones;i++){
        if(repeticiones%i == 0){
            contadorDivisores++;
        }
    }
    document.write("Cantidad de numeros divisores : " + contadorDivisores);

}//FIN DE LA FUNCIÓN