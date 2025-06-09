
function laCajaDePandora(numero){
    if (numero % 2 === 0) {
      // Es par: corvirtir a binario
      return numero.toString(2);
    }else {
      // Es impar: convertir a hexadecimal
      return numero.toString(16);
    }
  }
function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    // Es par: lo convertimos a binario
    return numero.toString(2);
  } else {
    // Es impar: lo convertimos a hexadecimal
    return numero.toString(16);
  }
}

function debora() {
  return {
    nombre: "debora",
    edad: 37,
    nacionalidad: "Argentina"
  };
}

console.log(laCajaDePandora(10));
console.log(laCajaDePandora(7));
console.log(laCajaDePandora(15));


/* Cada integrante en su rama debe modificar la función del punto número seis (6) para que reciba como parámetro un número entero. Si es un número par, debe convertirlo a binario y retornarlo, y si es impar, convertirlo a hexadecimal y retornarlo.
El objetivo es que cada uno resuelva el ejercicio a su modo, para luego resolver los conflictos.
Luego de terminar la función deben pushear los cambios. */
