var matrizesArmazenadas = [];
var operacoesArmazenadas = [];
var matrizResultado = [];
var contador = 0;

function lerMatriz(operacao) {
    var qtd_colunas = document.getElementById("qtd_colunas").value;
    var qtd_linhas = document.getElementById("qtd_linhas").value;
    var matriz_txt = document.getElementById("matriz_txt").value;
    matriz_txt = matriz_txt.replace("\n", "");
    matriz_txt = matriz_txt.split(",");
    var matrizLocal = [];

    for(l=0;l<qtd_linhas;l++){
        matrizLocal[l] = [];
        for(c=0;c<qtd_colunas;c++){
            matrizLocal[l][c] = parseInt(matriz_txt[0]);
            matriz_txt.shift();
        }
    }
    document.getElementById("msg_erro").innerHTML = 'Matriz lida com sucesso! 😁';
    console.log(matrizLocal);
    matrizesArmazenadas.push({matriz: matrizLocal, linha: qtd_linhas, coluna: qtd_colunas});
    if(operacao != '0') {
      operacoesArmazenadas.push(operacao);  
    }
}

function somaMatriz() {
    var matriz1 = matrizesArmazenadas[0];
    var matriz2 = matrizesArmazenadas[1];
    matrizResultado = [];
    if(matriz1.linha != matriz2.linha || matriz1.coluna != matriz2.coluna){
        document.getElementById("msg_erro").innerHTML = 'Matrizes de tamanhos diferentes não são possíveis de somar. 😢';
    } else {
        for(l=0;l<matriz1.linha;l++){
            matrizResultado[l] = []
            for(c=0;c<matriz1.coluna;c++){
                matrizResultado[l][c] = matriz1.matriz[l][c] + matriz2.matriz[l][c];
                //console.log(matriz1.matriz[l][c] + " + " + matriz2.matriz[l][c] + " = " + matrizResultado[l][c]);
            }
        }
        console.log(matrizResultado);
    }
    document.getElementById("qtd_linhas").value = matriz1.linha;
    document.getElementById("qtd_colunas").value = matriz2.coluna;
    document.getElementById("matriz_txt").value = matrizResultado;
    document.getElementById("msg_erro").innerHTML = 'Operação de adição realizada com sucesso! 😁';
    matrizesArmazenadas.splice(0,2);
}

function subtracaoMatriz() {
    var matriz1 = matrizesArmazenadas[0];
    var matriz2 = matrizesArmazenadas[1];
    matrizResultado = [];
    if(matriz1.linha != matriz2.linha || matriz1.coluna != matriz2.coluna){
        document.getElementById("msg_erro").innerHTML = 'Matrizes de tamanhos diferentes não são possíveis de subtrair. 😢';
    } else {
        for(l=0;l<matriz1.linha;l++){
            matrizResultado[l] = []
            for(c=0;c<matriz1.coluna;c++){
                matrizResultado[l][c] = matriz1.matriz[l][c] - matriz2.matriz[l][c];
                //console.log(matriz1.matriz[l][c] + " + " + matriz2.matriz[l][c] + " = " + matrizResultado[l][c]);
            }
        }
        console.log(matrizResultado);
    }
    document.getElementById("qtd_linhas").value = matriz1.linha;
    document.getElementById("qtd_colunas").value = matriz2.coluna;
    document.getElementById("matriz_txt").value = matrizResultado;
    document.getElementById("msg_erro").innerHTML = 'Operação de subtração realizada com sucesso! 😁';
    matrizesArmazenadas.splice(0,2);
}

function multiplicacaoMatriz() {
    var matriz1 = matrizesArmazenadas[0];
    var matriz2 = matrizesArmazenadas[1];
    matrizResultado = []
    if(matriz1.coluna != matriz2.linha) {
        document.getElementById("msg_erro").innerHTML = 'Para multiplicar duas matrizes é necessário que a coluna da matriz A seja equivalente a linha da matriz B. 😢';
    } else {
        for(n=0;n<matriz1.linha;n++) {
            matrizResultado[n] = [];
            for(l=0;l<matriz2.coluna;l++) {
                matrizResultado[n][l] = 0;
                for(c=0;c<matriz1.coluna;c++) {
                    matrizResultado[n][l] += matriz1.matriz[n][c] * matriz2.matriz[c][l];
                    console.log(matriz1.matriz[n][c] + " * " + matriz2.matriz[c][l] + " = " + matrizResultado[n][l]);
                }
            }
        }
        console.log(matrizResultado);
    }
    document.getElementById("qtd_linhas").value = matriz1.linha;
    document.getElementById("qtd_colunas").value = matriz2.coluna;
    document.getElementById("matriz_txt").value = matrizResultado;
    document.getElementById("msg_erro").innerHTML = 'Operação de multiplicação realizada com sucesso!';
    matrizesArmazenadas.splice(0,2);
}

function efetuarOperacao() {
    lerMatriz('0');
    switch(operacoesArmazenadas[contador]){
        case "adicao":
            somaMatriz();
            break;
        case "subtracao":
            subtracaoMatriz();
            break;
        case "multiplicacao":
            multiplicacaoMatriz();
        // default:
        //     document.getElementById("msg_erro").innerHTML = 'Operação não selecionada. Selecione-a ou clique em <a href="url">Manual de instruções</a>';
    }
    contador++;
    console.log(operacoesArmazenadas);
    console.log(contador);
}
