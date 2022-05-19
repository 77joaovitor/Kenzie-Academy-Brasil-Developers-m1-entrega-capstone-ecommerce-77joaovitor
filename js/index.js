const body = document.querySelector("body")
const pagina = document.querySelector(".pagina")
const main = document.querySelector("main")
const vitrine = document.createElement("ul")
      vitrine.classList.add("vitrine")
      main.appendChild(vitrine)
      console.log(pagina)


function listarProdutos(listaProduto){

    for(let i = 0; i < listaProduto.length; i++){
        const produto = listaProduto[i]
        const cardProduct = criarCardProduto(produto)
        vitrine.appendChild(cardProduct)
    }

}      

listarProdutos(data)

function criarCardProduto(produto){

    const cardProduto      = document.createElement("li")
          cardProduto.classList.add("card")
    const imgProduto       = document.createElement("img")
          imgProduto.classList.add("imgCard")
    const categoProduto    = document.createElement("div")
          categoProduto.classList.add("categor")
    const categoriaProduto = document.createElement("h3")
          categoriaProduto.classList.add("category")
    const corpoProduto     = document.createElement("section")
          corpoProduto.classList.add("productbody")
    const nomeProduto      = document.createElement("h2")
    const description      = document.createElement("p")
          description.classList.add("description")
    const preco            = document.createElement("p")
          preco.classList.add("preco")
    const addCar           = document.createElement("button")
          addCar.classList.add("add")
          addCar.id = produto.id
          
    vitrine.appendChild(cardProduto)
    cardProduto.appendChild(imgProduto)
    cardProduto.appendChild(categoProduto)
    categoProduto.appendChild(categoriaProduto)
    cardProduto.appendChild(corpoProduto)
    corpoProduto.appendChild(nomeProduto)
    corpoProduto.appendChild(description)
    corpoProduto.appendChild(preco)
    corpoProduto.appendChild(addCar)
    

    imgProduto.src             = produto.img
    categoriaProduto.innerHTML = `${produto.tag}`
    nomeProduto.innerHTML      = `<strong>${produto.nameItem}</strong>`
    description.innerHTML      = `${produto.description}`
    preco.innerHTML            = `R$ ${produto.value}.00`
    addCar.innerText           = "Adicionar ao carrinho"


    return cardProduto

}



const ulCarrinho = document.createElement("ul")
      ulCarrinho.classList.add("pro")      
const produtoCarrinho = document.querySelector(".produtocarrinho")
produtoCarrinho.appendChild(ulCarrinho)

function cardCarrinho(produto){
    const liCarrinho = document.createElement("li")
    const boxImg = document.createElement("div")
    const imgCarrinho = document.createElement("img")
    const descricaoCarrinhoCompra = document.createElement("div")
    const nomeCardCarrinho = document.createElement("h4")
    const precoCardCarrinho = document.createElement("p")
    const removerCarrinho = document.createElement("button")
    removerCarrinho.addEventListener("click", function(){
          liCarrinho.splice(index, 1)
    })
    
    console.log(removerCarrinho)
          
          liCarrinho.classList.add("cardcarrinho")
          boxImg.classList.add("boximg")
          imgCarrinho.classList.add("imgcar")
          descricaoCarrinhoCompra.classList.add("descricaocarrinho")
          nomeCardCarrinho.classList.add("nomecarrinho")
          precoCardCarrinho.classList.add("precocarrinho")
          removerCarrinho.classList.add("removerproduto")

    ulCarrinho.appendChild(liCarrinho)
    liCarrinho.appendChild(boxImg)
    boxImg.appendChild(imgCarrinho)
    liCarrinho.appendChild(descricaoCarrinhoCompra)
    descricaoCarrinhoCompra.appendChild(nomeCardCarrinho)
    descricaoCarrinhoCompra.appendChild(precoCardCarrinho)
    descricaoCarrinhoCompra.appendChild(removerCarrinho)

    imgCarrinho.src = produto.img
    nomeCardCarrinho.innerHTML = `<strong>${produto.nameItem}</strong>`
    precoCardCarrinho.innerHTML = `R$${produto.value}.00`
    removerCarrinho.innerText = "Remover Produto"
    removerCarrinho.id = produto.id

    return liCarrinho      
}
    
let objetoCarrinho = []
let count = 0
let soma = 0
    function pegarId(event){
        const precoProduto = +event.target.parentNode.children[2].innerText.slice(3,) 
        const imagemProduto = event.target.parentNode.parentNode.children[0]
        const nomeProduto = event.target.parentNode.children[0].innerText 
        const idProduto = event.target 
        const produto = data.filter(product => product.id == idProduto.id)  
        let objeto = {id: idProduto, img: imagemProduto , nameItem: nomeProduto, value: precoProduto} 
        objetoCarrinho.push(objeto)
        console.log(objetoCarrinho)
        count += 1
        soma += precoProduto
        const quantidadeValor = document.querySelectorAll(".quantidade")
        quantidadeValor[1].innerHTML = ""
        quantidadeValor[1].innerHTML = `${count}`
        
        const totalValor = document.querySelectorAll(".valortotal")
        totalValor[1].innerHTML      = ""
        totalValor[1].innerHTML      = `RS ${soma}`



    const liCarrinho = document.createElement("li")
    const boxImg = document.createElement("div")
    const imgCarrinho = document.createElement("img")
    const descricaoCarrinhoCompra = document.createElement("div")
    const nomeCardCarrinho = document.createElement("h4")
    const precoCardCarrinho = document.createElement("p")
    const removerCarrinho = document.createElement("button")
    removerCarrinho.addEventListener("click", (e) => {
        liCarrinho.remove()
    })

          
          liCarrinho.classList.add("cardcarrinho")
          boxImg.classList.add("boximg")
          imgCarrinho.classList.add("imgcar")
          descricaoCarrinhoCompra.classList.add("descricaocarrinho")
          nomeCardCarrinho.classList.add("nomecarrinho")
          precoCardCarrinho.classList.add("precocarrinho")
          removerCarrinho.classList.add("removerproduto")

    ulCarrinho.appendChild(liCarrinho)
    liCarrinho.appendChild(boxImg)
    boxImg.appendChild(imgCarrinho)
    liCarrinho.appendChild(descricaoCarrinhoCompra)
    descricaoCarrinhoCompra.appendChild(nomeCardCarrinho)
    descricaoCarrinhoCompra.appendChild(precoCardCarrinho)
    descricaoCarrinhoCompra.appendChild(removerCarrinho)

    imgCarrinho.src = imagemProduto.src
    nomeCardCarrinho.innerHTML = `<strong>${nomeProduto}</strong>`
    precoCardCarrinho.innerHTML = `R$${precoProduto}.00`
    removerCarrinho.innerText = "Remover Produto"
    removerCarrinho.id = produto.id


    return liCarrinho  
    }

const adicionarCarrinho = document.querySelectorAll(".add")


for(let i = 0; i < adicionarCarrinho.length; i++){
    adicionarCarrinho[i].addEventListener("click" , pegarId)
}


const rProduto = document.querySelectorAll(".removerproduto")
console.log(rProduto)
const listaCarrinho = document.querySelectorAll(".cardcarrinho")
const boxCarrinho = document.querySelector(".boxcarrinho")
const precoCarrinho = document.querySelectorAll(".precocarrinho")
console.log(precoCarrinho)

function somarValores(valor){
    const total = 0
    for(let i = 0; i < precoCarrinho.length; i++){
        objetoCarrinho.push(precoCarrinho[i])
    }
}


function criarInformacaoTotal(valor){

const quantidade = document.createElement("p")
const quantidadeValor = document.createElement("p")
const divQuantidade = document.createElement("div")


const total = document.createElement("p")
const totalValor = document.createElement("p")
const divTotal = document.createElement("div")

const sectionCheckout = document.querySelector("#infocheckout")


divQuantidade.classList.add("quantidade1")
quantidade.classList.add("quantidade")
quantidadeValor.classList.add("quantidade")
total.classList.add("valortotal")
totalValor.classList.add("valortotal")
divTotal.classList.add("total")

divQuantidade.appendChild(quantidade)
divQuantidade.appendChild(quantidadeValor)
divTotal.appendChild(total)
divTotal.appendChild(totalValor)
sectionCheckout.appendChild(divQuantidade)
sectionCheckout.appendChild(divTotal)
// carrinhoDeCompras.appendChild(sectionCheckout)
// quantidadeValor = 0


    quantidade.innerText      = "Quantidade"
    quantidadeValor.innerHTML =  `${count}`
    total.innerText           = "Total"
    totalValor.innerHTML      = `RS ${soma}`
     return sectionCheckout
}
criarInformacaoTotal()

function pegarCategoria(event){
    const idProduto = event.target
    const produto = data.filter(product => product.tag == idProduto.tag)
    console.log(cardCarrinho(produto[0]))
}







// function carrinhoVazio(){
//     if(ulCarrinho === []){
//         return ulCarrinho.innerHTML = ` ${"carrinho Vazio"}`
// }




// for(let i = 0; i < removerProduto.length; i++){
//     rProduto[i].addEventListener("click" , removerProduto)
// }
// console.log(adicionarCarrinho)


/* <li class= "cardcarrinho">
                        <div class="boximg">
                        <img class="imgcar" src="./img/camiseta_branca.svg" alt="Camisa branca">
                        </div>
                        <div class="descricaocarrinho">
                           <h4 class="nomecarrinho">Short-Sleeve T-Shirt</h4>
                           <p class="precocarrinho">R$ 100.00</p>
                           <button class="removerproduto">Remover produto</button>
                        </div>
                   </li> */


/* <li class="card">
                <img src="../img/jaqueta.svg">
                <div class="categor">
                    <h3 class="category">
                        Camisetas
                    </h3>
                </div>
                <section class="productbody">
                    <h2><strong>Lightweight Jacket</strong></h2>
                        <p class=description"></p>Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
                        <p class="preco">R$ 100.00</p>
                    <button class="add">Adicionar ao carrinho</button>
                </section>

            </li> */