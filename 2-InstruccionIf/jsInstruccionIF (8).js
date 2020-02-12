function mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);
    var estado = document.getElementById("estadoCivil").value;
    /*if(edad <18 && estado != "Soltero"){
        //Nada
    }*/
    if(edad >=18 && estado == "Soltero"){
        alert("no es menor de edad y es soltero")
    }
}//FIN DE LA FUNCIÓN