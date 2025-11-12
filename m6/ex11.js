function testeDebug(x) {
  const y = x * 2;
  debugger; // pausa a execução aqui
  return y;
}
testeDebug(5);

/*
Relatório:
Quando a execução atinge 'debugger', o navegador pausa o código no painel 'Sources'.
É possível inspecionar variáveis, avançar linha por linha e observar o fluxo do programa.
*/
