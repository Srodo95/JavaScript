function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    if(edad >= 18){
        alert("es mayor de edad");
    }else if(edad < 13){
        alert("es niño");
    }else{
        alert("Es adolescente");
    }

}//FIN DE LA FUNCIÓN