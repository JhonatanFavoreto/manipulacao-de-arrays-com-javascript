// 15 – Remoção de itens inativos no menu
let menuNavegacao = [
  "Início",
  "Serviços",       // índice 1 → será removido
  "Portfólio",      // índice 2 → será removido (após o primeiro)
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];
// Remove 2 itens a partir do índice 1
menuNavegacao.splice(1, 2);
console.log("Menu atualizado:");
console.log(menuNavegacao);