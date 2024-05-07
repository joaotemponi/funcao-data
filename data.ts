/*const dataAtual: Date = new Date();
console.log(dataAtual);
*/
const teclado = require(`prompt-sync`)();
function verificarData(ano: number, mes: number, dia: number): boolean {

    const data = new Date(ano, mes, dia);
    return (
        data.getFullYear() === ano &&
        data.getMonth() === mes &&
        data.getDate() === dia
    )
}

let ano: number = parseInt(teclado(`Digite o ano: `));
let mes: number = parseInt(teclado(`Digite o mes: `));
let dia: number = parseInt(teclado(`Digite o dia: `));
const dataCorreta = verificarData(ano, mes, dia);
switch (verificarData) {
    case true: console.log(dataCorreta);
        break;

    default:
        console.log(`Digite a data correta!!`);
}