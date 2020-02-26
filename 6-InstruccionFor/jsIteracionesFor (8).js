function mostrar()
{
    var numero = prompt("Ingrese un numero : ");
    var validarPar=0;
    for(var i = 0;i<numero;i++){
        if(numero%i == 0){
            validarPar++;
        }
    }
    if(validarPar>1 || numero <= 1){
        alert("El numero no es primo");
    }else{
        alert("El numero es primo");
    }


    /*
    var flag=true;
        for(var i=2;i<num;i++){
            if(num%i==0){
                flag=false
            }
        }
        if(flag==true){
            alert("El numero" + num  +" es primo ");
        }else{
            alert("El numero " + num + "no es primo")
        }
    */ 


}//FIN DE LA FUNCIÓN
