function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

console.log(safeParse('{"nome": "Carol"}')); 
console.log(safeParse("texto inválido"));
