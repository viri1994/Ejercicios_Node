'use strict';

class Figuras{
	constructor(nombrefig, lado1,lado2,base,altura,radio){  
		this.nombrefig=nombrefig;
		this.lado1=lado1;
		this.lado2=lado2;
		this.base=base;
		this.altura=altura;
		this.radio=radio;
	}
	
	areaCuadrada(){
		console.log("El area del cuadrado es:", lado1*4)
	}

	areaTriangulo(){
		console.log("El area del tringulo es:", base*altura/2)
	}


}





