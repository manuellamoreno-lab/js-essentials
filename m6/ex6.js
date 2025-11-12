function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    } else {
      throw erro;
    }
  }
}

console.log(safeParse('{"nome": "Carol"}'));
console.log(safeParse("texto inválido"));
