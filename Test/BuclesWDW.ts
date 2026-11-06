// @ts-ignore Node.js type definitions are not configured in this project.
import { createInterface } from "readline";

declare const process: any;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(mensaje: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(mensaje, resolve);
  });
}

// 1. BÚSQUEDA LINEAL CON WHILE
function busquedaLineal(numeros: number[], valor: number): number {
  let i = 0;

  while (i < numeros.length) {
    if (numeros[i] === valor) {
      return i;
    }
    i++;
  }

  return -1;
}

// 2. MENÚ INTERACTIVO CON DO-WHILE
async function menu(): Promise<void> {
  const numeros = [10, 20, 30, 35, 40, 50];
  let opcion: string;

  do {
    console.log("\n--- MENÚ ---");
    console.log("buscar - Buscar un número");
    console.log("listar - Mostrar los números");
    console.log("salir - Terminar el programa");

    opcion = (await preguntar("Elige una opción: ")).toLowerCase().trim();

    switch (opcion) {
      case "buscar": {
        const entrada = await preguntar("Número a buscar: ");
        const valor = Number(entrada);

        if (entrada.trim() === "" || !Number.isFinite(valor)) {
          console.log("Introduce un número válido.");
          break;
        }

        const indice = busquedaLineal(numeros, valor);

        if (indice !== -1) {
          console.log(`Número encontrado en el índice ${indice}.`);
        } else {
          console.log("Número no encontrado.");
        }
        break;
      }

      case "listar":
        console.log("Números:", numeros);
        break;

      case "salir":
        console.log("Saliendo del programa...");
        break;

      default:
        console.log("Opción no válida. Intenta de nuevo.");
    }
  } while (opcion !== "salir");
}

// 3. VALIDACIÓN DE INPUT CON WHILE
async function validarNumero(): Promise<number> {
  let numero: number;

  while (true) {
    const entrada = await preguntar("Introduce un número del 1 al 10: ");
    numero = Number(entrada);

    if (
      entrada.trim() !== "" &&
      Number.isInteger(numero) &&
      numero >= 1 &&
      numero <= 10
    ) {
      return numero;
    }

    console.log("Número inválido. Intenta de nuevo.");
  }
}

// EJECUTAR LOS EJERCICIOS
async function main(): Promise<void> {
  // Prueba de búsqueda lineal
  console.log("Índice encontrado:", busquedaLineal([10, 20, 30, 40, 50], 30));

  // Validación de número
  const numero = await validarNumero();
  console.log("Número válido:", numero);

  // Menú interactivo
  await menu();

  rl.close();
}

main().catch((error: unknown) => {
  console.error("Error:", error);
  rl.close();
});