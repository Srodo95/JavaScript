function mostrar()
{
    var marca;
    var peso;
    var respuesta = "si";
    var cantidadPares = 0;
    var marcaProductoPesado;
    var cantidadProductosBajoCero = 0;
    var acumuladorPeso = 0;
    var promedioPeso;
    var cantidadProductos = 0;
    var pesoMaximo = 101;
    var pesoMinimo = 0;
    var temperatura;
   
    while(respuesta == "si"){
        marca = prompt("Ingrese la marca del producto");
        peso = parseInt(prompt("ingrese el peso "));
        while(!(peso>=1 && peso<=100)){
            peso = parseInt(prompt("Por favor ingrese un peso entre 1 y 100"));
        }
        temperatura = parseInt(prompt("ingrese la temperatura "));
        while(!(temperatura>=-30 && temperatura<=30)){
            temperatura = parseInt(prompt("Por favor ingrese una temperatura entre -30 y 30"));
        }
        if(temperatura%2==0){
            cantidadPares++;
        } 
        if(pesoMaximo < peso){
            pesoMaximo = peso;
            marcaProductoPesado = marca;
        }
        if(pesoMinimo > peso){
            pesoMinimo = peso;
        }
        if(temperatura<0){
            cantidadProductosBajoCero++;
        }
        cantidadProductos++;
        acumuladorPeso+=peso;
        respuesta = prompt("Desea seguir ingresando marcas ? si/no:");
        while(!(respuesta == "si" || respuesta == "no")){
            respuesta = prompt("ingrese una respuesta correcta");
        }
    }
    promedioPeso = acumuladorPeso / cantidadProductos;
    document.write("Cantidad de temperaturas pares : " + cantidadPares + "<br>" + "Marca del producto mas pesado" + 
    marcaProductoPesado + "<br>" + "cantidad de productos que se conservan a menos de 0 grados: " + cantidadProductosBajoCero + 
    "<br>" + "Promedio del peso de todos los productos : " + promedioPeso + "<br>" + "Peso maximo : " + pesoMaximo + "<br>" +
    "Peso minimo : " + pesoMinimo);
}
