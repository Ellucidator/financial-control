let opcoes = "";
var saldo = parseFloat(prompt("Informe o saldo atual: "));

do {
  opcoes = prompt(
    "Seu saldo atual é de: " +
      saldo +
      "\n1.Depositar" +
      "\n2.Sacar" +
      "\n3.Sair"
  );
  switch (opcoes) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor do deposito: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor do deposito: "));
      break;
    case "3":
      alert("Encerrando programa...");
      break;
    default:
      alert("Entrada invalida.");
  }
} while (opcoes !== "3");
