// 20 – Formatando lista de preços
let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];
let reais = precos.map(preco => `R$ ${precos}`);
console.log("Preço em Reais:" ,reais);