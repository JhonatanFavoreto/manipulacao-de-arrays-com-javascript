// 16 – Substituição de matérias na grade
let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
];
// Substitui 2 itens a partir do índice 2 por "Programação" e "Robótica"
gradeCurricular.splice(2, 2, "Programação", "Robótica");
console.log("Grade atualizada:");
console.log(gradeCurricular);