/*const dataAtual: Date = new Date();
console.log(dataAtual);
*/
var teclado = require("prompt-sync")();
function verificarData(ano, mes, dia) {
    var data = new Date(ano, mes, dia);
    data.getFullYear() === ano &&
        data.getMonth() === mes &&
        data.getDate() === dia;
}
var ano = parseInt(teclado("Digite o ano: "));
var mes = parseInt(teclado("Digite o mes: "));
var dia = parseInt(teclado("Digite o dia: "));
var dataCorreta = verificarData(ano, mes, dia);
switch (dataCorreta) {
    case true:
        console.log(dataCorreta);
        break;
    default:
        console.log("Digite a data correta!!");
}
