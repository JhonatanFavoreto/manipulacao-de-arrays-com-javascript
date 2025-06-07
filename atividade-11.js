// 11 – Geração de frase
let ingredientes = [
  "farinha de trigo",
  "fermento",
  "leite",
  "ovos",
  "açúcar",
  "manteiga"
];
let frase = ingredientes.slice(0, -1).join(", ") + " e " + ingredientes[ingredientes.length - 1] + ".";
console.log("Ingredientes da receita: " + frase);