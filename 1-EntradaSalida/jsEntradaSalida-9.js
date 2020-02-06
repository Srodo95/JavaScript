/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe = parseInt(document.getElementById("sueldo").value);
    var sueldo = (importe/10)+importe;
    document.getElementById("resultado").value=sueldo;
	
}
