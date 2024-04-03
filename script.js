var primeiroNumero = parseInt(prompt("Insira um número"));
var segundoNumero = parseInt(prompt("Insira ountro número"));

function verificarMultiplo() {
  let resto = 0;
  var numeroMaior = 0;
  if (primeiroNumero > segundoNumero) {
    resto = primeiroNumero % segundoNumero;
    console.log(resto);
    numeroMaior = primeiroNumero;
    console.log(numeroMaior);
  } else {
    resto = segundoNumero % primeiroNumero;
    console.log(resto);
    numeroMaior = segundoNumero;
    console.log(numeroMaior);
  }

  if (resto == 0) {
    if (numeroMaior == primeiroNumero) {
      alert(primeiroNumero + " é múltiplo de " + segundoNumero);
    } else if (numeroMaior == segundoNumero) {
      alert(segundoNumero + " é múltiplo de " + primeiroNumero);
    }
  } else {
    alert("os números não são múltiplos");
  }
}

verificarMultiplo();
