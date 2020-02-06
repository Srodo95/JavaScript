function mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);
    if(edad < 18 && "estadoCivil"!="Soltero"){
        //Nada
    }
    if(edad >=18 && ("estadoCivil"=="Soltero")){
        alert("es soltero y no es menor")
    }
}//FIN DE LA FUNCIÓN