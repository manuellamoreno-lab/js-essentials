function validarNumero(input) {
  if (isNaN(Number(input))) {
    console.log("Entrada inválida: número esperado.");
  } else {
    console.log("Número aceito:", Number(input));
  }
}

validarNumero("abc");
validarNumero("42");
