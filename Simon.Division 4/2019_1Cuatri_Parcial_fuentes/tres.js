function mostrar()
{
    var precio = parseInt(prompt("Ingrese precio"));
    var porcentaje = parseInt(prompt("Ingrese porcentaje de descuento"));
    var descuento = precio*porcentaje/100;
    var precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
