const itemList = [];

let total = itemList.preco


function adicionar() {
    const produto = document.getElementById('produto').value;
    const nomeProduto = produto.split('-')[0];
    const valorunitario = parseFloat(produto.split('R$')[1]);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if (quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    

    const preco = quantidade * valorunitario;

    // Adiciona o item ao array
    const item = {
        nome: nomeProduto,
        quantidade: quantidade,
        preco: preco
    };
    itemList.push(item);

    // Atualiza a exibição dos itens
    const resultDiv = document.getElementById('lista-produtos');
    resultDiv.innerHTML = ''; // Limpa o conteúdo atual

    itemList.forEach(item => {
        resultDiv.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${item.quantidade}x</span>
            ${item.nome}
            <span class="texto-azul">R$${item.preco.toFixed(2)}</span>
        </section>`;
    });
}





function limpar() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('result').innerHTML = '';
}