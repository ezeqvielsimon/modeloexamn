function mostrar()
/*una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de dias , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es america tiene un 50% de descuento y si ademas paga por debito se le agrega un 10% mas de descuento 
Si es africa tiene un 60% de descuento y si ademas paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es europa tiene un 20% de descuento y si ademas paga por debito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20% */
{
    var continente = prompt("Ingrese continente").toLowerCase();
    var dias = parseInt(prompt("Ingrese cantidad de dias"));
    var formaPago = prompt("Ingrese forma de pago \n Debito \n Mercadopago \n Efectivo \n Otro ").toLowerCase();
    var descuento;

    switch(continente){
        case "america":
            if (formaPago=="debito") {
                descuento = 0.6;
            }
            else{
                descuento = 0.5;
            }
        break;
        case "africa":
            if(formaPago =="mercadopago"||formaPago=="efectivo"){
                descuento = 0.75;
            }
            else{
                descuento = 0.6;
            }
        break;
        case "europa":
            if (formaPago == "debito") {
                descuento = 0.35;
            }
            else if (formaPago == "mercadopago"){
                descuento = 0.3;
            }
            else if (formaPago == "otro"){
                descuento = 0.25;
            }
            else{
                descuento = 0.2;
            }
        break;
        default:
       

    }

    var total1 = dias * 100;
    var totalDescuento = total1 - (total1 * descuento);
    alert ("continente :"+continente+" cantidad de dias: "+dias+" forma de pago "+formaPago+" total con descuento: "+totalDescuento);
   
}
