/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numUno;
    var numDos;
    var resul;
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resul = parseInt(numUno)+parseInt(numDos);
    alert("El resultado es "+resul);
}

