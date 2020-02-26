function mostrar()
{
    var numero = prompt("Ingrese un numero : ");
    var validarPar=0;
    for(var i = 0;i<numero;i++){
        if(numero%i == 0){
            validarPar++;
        }
    }
    if(validarPar>1){
        alert("El numero no es primo");
    }else{
        alert("El numero es primo");
    }



}//FIN DE LA FUNCIÓN