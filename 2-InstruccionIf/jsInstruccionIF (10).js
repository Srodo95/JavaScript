function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom = Math.floor(Math.random()*(10-1)+1);

	if(notaRandom >= 9){
		alert("nota : "+notaRandom+" ---->EXCELENTE");
	}else if(notaRandom >= 4){
		alert("nota : "+notaRandom+" ---->Aprobó");
	}else{
		alert("nota : "+notaRandom+" ---->Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN