const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.19;


function atualizarValor(){
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Inválido";
            return;
    }
    calcularValorAbastecimento(precoPorLitro, litros);
}

function calcularValorAbastecimento(precoCombustivel, litros) {
    if(litros <=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Inválido";
        return;
    }
    
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
}

//função arrow
const formatarMoeda = valor => {
    return "R$ " + valor.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}




document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);

document.getElementById("litros").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        atualizarValor();
    }
})