function mostrarPromocao() {
    //criar referencia aos elementos da pagina
   var inHigiene = document.getElementById("inHigiene");
   var inPreco = document.getElementById("inPreço");
   var outValor = document.getElementById("outValor");
   var outUltimoValor = document.getElementById("outUltimoValor");

   // obter conteudo dos campos de entrada
   var higiene = inHigiene.value;
   var preco = Number(inPreco.value);

   //calcular 50% de desconto na compra de 3 unidades
   var precoDesc = preco / 2;
   var calculo = preco + preco + precoDesc;
   outValor.textContent = higiene + " Leve 3 por R$: " + calculo.toFixed(2);
   outUltimoValor.textContent = "O 3 produto custa apenas R$: " + precoDesc.toFixed(2);
}

   // cria referencia ao  btPromoção
   var btPromocao = document.getElementById("btPromocao");
   // registra um evento associado ao botão, para carregar uma função
   btPromocao.addEventListener("click", mostrarPromocao);