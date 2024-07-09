var matriz = [];
function operacao() {
    var qtd_colunas = document.getElementById("qtd_colunas").value;
    var qtd_linhas = document.getElementById("qtd_linhas").value;
    var matriz_txt = document.getElementById("matriz_txt").value;
    matriz_txt = matriz_txt.replace("\n", "");
    matriz_txt = matriz_txt.split(",");
    console.log(matriz_txt);
    
    for(l=0;l<qtd_linhas;l++){
        matriz[l] = [];
        for(c=0;c<qtd_colunas;c++){
            matriz[l][c] = matriz_txt[0];
            matriz_txt.shift();
        }
    }
    console.log(matriz);
}
