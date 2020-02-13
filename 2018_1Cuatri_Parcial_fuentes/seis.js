function mostrar()
{
    var hora = parseInt(document.getElementById("laHora").value);
    switch(hora >= 0 && hora <= 24){
        case true:
            if(hora >= 6 && hora <= 11){
                alert("es de mañana");
            }
            else if(hora >= 12 && hora <= 19){
                alert("es de tarde");
            }
            else{
                if(hora < 24){
                    alert("es de noche, a dormir");
                }else{
                    alert("es de noche");
                }
            }
            break;
        case false:
            alert("La hora ingresada no existe");
            break;

    }
}
