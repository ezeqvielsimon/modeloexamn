function mostrar()
{
    var respuesta = true;
    var letra;
    var numero;
    var contNumPar=0;
    var contNumImp=0;
    var contCero=0;
    var acumuladorPositivo=0;
    var acumNeg=0;
    var i=0;
    while(respuesta ==true){
        letra = prompt("Ingrese una letra");
        numero = parseInt(prompt("Ingrese un numero"));
        while(numero < -100 || numero > 100){
            numero = parseInt(prompt("Numero invalido, reingrese un numero entre -100 y 100"));
        }
        respuesta = confirm("Desea ingresar mas datos?");
        if(numero%2==0){
            contNumPar=contNumPar+1;
            acumuladorPositivo=numero+acumuladorPositivo;
        }else{
            contNumImp=contNumImp+1;
        }
        if(numero==0){
            contCero=contCero+1;
        }
        if(numero < 0){
            acumNeg=numero + acumNeg;
        }
    i++;    
    }
    document.write("cantidad de numeros pares: "+contNumPar);
    document.write("cantidad de numeros impares: "+contNumImp);
    document.write("cantidad de numeros cero: "+contCero);
    document.write("Promedio de numeros positivos: "+acumuladorPositivo/i);
    document.write("suma de numeros negativos: "+acumNeg);
}
