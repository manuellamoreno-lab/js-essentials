function interno(m) {
  return m * 3;
}
function externo(n) {
  return interno(n) + 1;
}
externo(4);

/*
- Step Into: entra na função 'interno' e mostra sua execução linha a linha.
- Step Over: executa 'interno' sem entrar, indo direto para a próxima linha.
- Step Out: sai da função atual e volta à que a chamou.
*/
