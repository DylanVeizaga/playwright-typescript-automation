function calcularDescuento(precio: number, cliente: string, cuponActivo: string): number {
    let descuento = 5;

    if (cliente === "vip") {
        descuento += 10;
    } else if (cliente === "premium") {
        descuento += 20;
    } else if (cliente === "master") {
        descuento += 30;
    }
    if (cuponActivo === "Day") {
        descuento += 15;
    }
    if (cuponActivo === "Test") {
        descuento += 10;
    } 


    const precioFinal = precio - (precio * descuento / 100);

    return Number(precioFinal.toFixed(2));
}

// Ejemplos de uso:
//console.log(calcularDescuento(100, "regular", true)); // 100.00
console.log(calcularDescuento(100, "regular", "Day")); // 85.00
//console.log(calcularDescuento(100, "vip", ""));     // 90.00
console.log(calcularDescuento(100, "premium", ""));  // 75.00
console.log(calcularDescuento(100, "master", "Test")); // 60.00
