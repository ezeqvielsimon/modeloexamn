function mostrar()
{
    var contador;
    var altura;
    var sexo;
    var acumuladorAltura = 0;
    var alturaBaja;
    var sexoAlturaMasBaja;
    var cantMujSup;
    for (var i=1; i <= 5  ; i++){
        altura = parseInt(prompt("Ingrese altura persona numero "+ i));
        while (altura < 0 || altura > 250){
                altura = parseInt(prompt("Altura invalida, reingrese"));
        }
        alturaBaja=altura;
        sexo = prompt("Ingrese sexo (f o m) persona numero "+i);
        while(!(sexo == "f" || sexo == "m")){
            sexo = prompt("Sexo invalido, reingrese f o m ");
        }
       if(i >= 1) {
           acumuladorAltura = altura + acumuladorAltura;
        }
        if(i >= 1 && alturaBaja < altura){
            alturaBaja = altura;
        }
        if(altura > 190 && sexo =="f"){
            cantMujSup++;
        }
   
            
    } alert("promedio alturas totales: "+acumuladorAltura/5);
    alert("Altura mas baja: "+alturaBaja+ " centimetros, sexo: "+sexoAlturaMasBaja);
    alert("Cantidad de mujeres que superan los 190 centimetros "+cantMujSup);
} 

