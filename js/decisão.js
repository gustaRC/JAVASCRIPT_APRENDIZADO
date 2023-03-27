function maior (a, b) {
    if (a > b) {
        return a;
    } else if (a < b){
        return b
    } else {
        return console.log("Iguais")
    }
}

function menor (a, b){
    return (a < b) ? b : (a > b) ? a : "Iguais"; // ? = se sentença digitada antes for vdd, faça isso logo em seguida | : = else/elseif
}

function tradutorCor(palavra) {
    switch (palavra) {
        case "black":
            return "preto";
        case "white":
            return "branco";
        case "blue":
            return "azul";
        case "red":
            return "vermelho";
        default:
            return console.log("Cor não encontrada")
            break;
    }
}

