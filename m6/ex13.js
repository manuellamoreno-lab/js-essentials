/*
No momento em que 'interno' está sendo executado:

▶ externo
  ▶ interno
*/

function interno(m) {
  return m * 3;
}
function externo(n) {
  return interno(n) + 1;
}
externo(4);
