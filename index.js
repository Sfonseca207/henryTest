function laCajaDePandora(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    return 'Por favor, ingresa un número entero';
  }
  
  if (numero % 2 === 0) {
    // Número par: convertir a binario
    return numero.toString(2);
  } else {
    // Número impar: convertir a hexadecimal
    // Numero
    return numero.toString(16);
  }
}

function macarena() {
  return {
    nombre: "Macarena",
    edad: 25,
    nacionalidad: "Argentina"
  };
}
