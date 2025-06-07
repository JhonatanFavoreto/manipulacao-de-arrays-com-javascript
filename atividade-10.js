// 10 – Verificação de produto em estoque
let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio"
];
if (estoque.includes("cadeira gamer")) {
  console.log("A cadeira gamer está disponível em estoque.");
} else {
  console.log("A cadeira gamer está indisponível no momento.");
}