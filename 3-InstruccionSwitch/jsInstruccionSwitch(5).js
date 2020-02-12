function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;

    alert (laHora);
    switch(laHora>=7 && laHora<=11){
        case true:
            alert("es de mañana!");
            break;
        case false:
            alert("No es de mañana");
            break;
    }
	
	



}//FIN DE LA FUNCIÓN