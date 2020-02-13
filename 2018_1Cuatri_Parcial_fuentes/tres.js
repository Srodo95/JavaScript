function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio"));
    var descuento = parseInt(prompt("Ingrese el porcentaje del descuento"));
    var precioFinal = precio - (precio*descuento/100);
    document.getElementById("elPrecioFinal").value = precioFinal;
}
