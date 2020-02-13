function mostrar()
{
    var primerNumero = prompt("Por favor ingrese el primer numero");
    var segundoNumero = prompt("Por favor ingrese el segundo numero");
    var resultado;

    if(primerNumero == segundoNumero){
        alert("son iguales, los concateno ----> " + primerNumero + segundoNumero);
    }
    if(primerNumero > segundoNumero){
        resultado = parseInt(primerNumero) - parseInt(segundoNumero);
    }else{
        resultado = parseInt(primerNumero) + parseInt(segundoNumero);
    }
    if(resultado>10){
        alert("la suma es "+resultado+" y es mayor a 10");
    }
}
