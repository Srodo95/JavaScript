function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(sexo!='f' && sexo!='m'){
        sexo = prompt("por favor ingrese un sexo valido");
    }
    document.getElementById('Sexo').value=sexo;
    

}//FIN DE LA FUNCIÓN