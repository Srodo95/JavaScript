function mostrar()
{
    var planeta = prompt("Ingrese un planeta");
    switch(planeta){
        case "tierra":
            alert("aca vivimos");
            break;
        case "venus":
        case "mercurio":
            alert("cerca del sol");
            break;
        case "pluton":
        case "neptuno":
            alert("Lejos del sol");
            break;
        default:
            alert("planeta ingresado no valido");
            break;
    }
}
