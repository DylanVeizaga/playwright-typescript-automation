
interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;
}

const productos: Producto[] = [
  { nombre: "Laptop", precio: 1000, categoria: "Electrónica", stock: 5 },
  { nombre: "Mouse", precio: 25, categoria: "Electrónica", stock: 0 },
  { nombre: "Teclado", precio: 75, categoria: "Electrónica", stock: 10 },
  { nombre: "Silla", precio: 150, categoria: "Muebles", stock: 3 },
  { nombre: "Escritorio", precio: 300, categoria: "Muebles", stock: 0 }
];

console.log("1. Lista de productos:");

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre);
}


console.log("\n2. Nombre y precio:");

for (const producto of productos) {
  console.log(`${producto.nombre}: $${producto.precio}`);
}


console.log("\n3. Productos disponibles:");

for (const producto of productos) {
  if (producto.stock > 0) {
    console.log(`${producto.nombre} - Stock: ${producto.stock}`);
  }
}


let sinStock = 0;

for (let i = 0; i < productos.length; i++) {
  if (productos[i].stock === 0) {
    sinStock++;
  }
}

console.log("\n4. Productos sin stock:", sinStock);


let valorInventario = 0;

for (const producto of productos) {
  valorInventario += producto.precio * producto.stock;
}

console.log("\n5. Valor del inventario: $" + valorInventario);