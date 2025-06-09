function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    // Es par: lo convertimos a binario
    return numero.toString(2);
  } else {
    // Es impar: lo convertimos a hexadecimal
    return numero.toString(12);
  }
}
function debora() {
  return {
    nombre: "Alexis",
    edad: 28,
    nacionalidad: "Argentina"
  };
}
