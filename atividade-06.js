// 6 – Primeira mensagem indevida
let mensagens = [
  "Propaganda indevida",
  "Bom dia, posso ajudar?",
  "Preciso de suporte técnico",
  "Claro, qual o problema?",
  "Erro ao acessar conta"
];
let mensagensremovida = mensagens.shift();
console.log(`Nova lista das mensagens: ${mensagens}.`);
console.log(`Mensagem removida: ${mensagensremovida}.`);