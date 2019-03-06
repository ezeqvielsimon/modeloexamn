function mostrar()
/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la resta es xxx y supero el 10".*/
{
    var num1 = parseInt(prompt("Ingrese primer numero"));
    var num2 = parseInt(prompt("Ingrese segundo numero"));
    var resultado;

    if (num1 == num2) {
            
        alert(num1+""+num2);
    
    }
    else if (num1 > num2) {

        resultado = num1 - num2;    
            if (resultado > 10) {
                alert("La resta es "+ resultado + " y supero el 10");
            }
            else{
                alert(resultado);
            }

    }
    else{

        resultado = num1 + num2;
        alert(resultado);

    }
}
