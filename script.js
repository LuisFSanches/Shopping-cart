var produtos = [];
var preco_final = 0;

var preco_produtos = {};

var quantidade = document.getElementById("quantidade");
var carrinho = document.getElementById("carrinho-completo");
var carrinho_itens = document.getElementById("carrinho-body");
var valor_dos_produtos = document.getElementById("preco");

function removerProduto(produto) {
  const index = produtos.indexOf(produto);
  if (index > -1) {
    produtos.splice(index, 1);
    quantidade.innerText = produtos.length;
  }
}

function implementarDivProduto(produto, imagem, nome, preco) {
  //-------CRIANDO DIV DO PRODUTO-----//
  var div_produto = document.createElement("div");
  div_produto.className = "produto-no-carrinho";

  //-------CRIANDO DIVS INTERNAS-------//
  var descricao_produto = document.createElement("div");
  descricao_produto.className = "descricao-produto-carrinho";

  var div_quantidade = document.createElement("div");
  div_quantidade.className = "alterar-quantidade";

  //----CRIANDO ELEMENTOS DO PRODUTO----//
  var imagem_produto = document.createElement("img");
  var nome_produto = document.createElement("h2");
  var preco_produto = document.createElement("label");

  var botao_aumentar_quantidade = document.createElement("button");
  var botao_diminuir_quantidade = document.createElement("button");
  var quantidade_produto = document.createElement("span");

  var remover_produto = document.createElement("button");

  //----SETANDO VALORES PARA OS PRODUTOS----//
  imagem_produto.src = imagem;
  nome_produto.innerText = nome;
  preco_produto.innerText = preco;

  var quantidade_atualizada = 1;
  var valor_produto = Number(preco.split(" ")[1]);
  var valor_final;
  quantidade_produto.innerText = quantidade_atualizada;

  preco_final = Number(preco_final) + Number(valor_produto);
  valor_dos_produtos.innerText = `O seu total é de: R$ ${preco_final}`;

  //----CONFIGURANDO PREÇO/QUANTIDADE----//

  botao_aumentar_quantidade.onclick = function () {
    quantidade_atualizada += 1;
    var preco_atualizado = Number(preco.split(" ")[1]) * quantidade_atualizada;
    preco_final += valor_produto;
    valor_dos_produtos.innerText = `O seu total é de: R$ ${preco_final}`;

    quantidade_produto.innerText = quantidade_atualizada;
  };

  botao_diminuir_quantidade.onclick = function () {
    var preco_atualizado = Number(preco.split(" ")[1]) * quantidade_atualizada;

    if (quantidade_atualizada > 1) {
      quantidade_atualizada -= 1;
      quantidade_produto.innerText = quantidade_atualizada;
      preco_final -= valor_produto;
      valor_dos_produtos.innerText = `O seu total é de: R$ ${preco_final}`;
    }
  };

  //----CONFIGURANDO BOTAO DE REMOVER----//

  remover_produto.innerText = "Remover";

  remover_produto.onclick = function () {
    var preco_atualizado = 0;
    preco_final -= valor_produto * Number(quantidade_produto.innerText);
    valor_dos_produtos.innerText = `O seu total é de: R$ ${preco_final}`;
    carrinho_itens.removeChild(div_produto);
    removerProduto(produto);
  };

  //----CONFIGURANDO DIV DE QUANTIDADE----//

  var icone_aumentar_quantidade = document.createElement("i");
  var icone_diminuir_quantidade = document.createElement("i");
  icone_aumentar_quantidade.className = "fas fa-arrow-up";
  icone_diminuir_quantidade.className = "fas fa-arrow-down";

  botao_aumentar_quantidade.appendChild(icone_aumentar_quantidade);

  botao_diminuir_quantidade.appendChild(icone_diminuir_quantidade);

  div_quantidade.append(
    botao_aumentar_quantidade,
    quantidade_produto,
    botao_diminuir_quantidade
  );

  //----CONFIGURANDO DIV DE DESCRIÇÃO DO PRODUTO----//
  descricao_produto.append(nome_produto, preco_produto, remover_produto);

  //----ADICIONANDO ELEMENTOS NA DIV DO PRODUTO----//
  div_produto.append(imagem_produto, descricao_produto, div_quantidade);

  //----ADICIONANDO PRODUTO AO CARRINHO----//
  carrinho_itens.append(div_produto);
}

function addToCart(produto, imagem, nome, preco) {
  var produtoEscolhido = document.getElementById(produto.id);
  var checkProduto = produtos.includes(produto);

  if (checkProduto === false) {
    produtos.push(produto);
    quantidade.innerText = produtos.length;
    implementarDivProduto(produto, imagem, nome, preco);
  }

  carrinho.className = "carrinho-completo-aberto";
}

function closeCart() {
  carrinho.className = "carrinho-completo";
}

function openCart() {
  carrinho.className = "carrinho-completo-aberto";
}
