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
switch (dataCorreta) {
    case true:
        console.log(`${dia}/${mes}/${ano}`)
        break;

    default:
        console.log(`Insira uma data valida`)
        break;
}