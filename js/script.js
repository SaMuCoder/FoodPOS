"use strict";

const filtro = document.querySelector(".filtro");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar-modal");
const pagar = document.querySelector(".btn-pagar");
const backButton = document.querySelector(".backButton");

let quantidade;

let formatCurrency = Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

let categoryList = [
  { name: "Comidas", url: "img/comidas.svg" },
  { name: "Sandes", url: "img/Sandes.svg" },
  { name: "Alcoólicas", url: "img/Alcoolicas.svg" },
  { name: "Bebidas", url: "img/Bebidas.svg" },
  { name: "Cafetaria", url: "img/Cafeteria.svg" },
  { name: "Sobremesas", url: "img/Sobremesas.svg" },
];

//Guardar produtos do array productList num array local

let productList = [
  {
    name: "Hamburguer",
    price: 6.5,
    category: "Comidas",
    url: "img/Comidas/Hamburger.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Cachorro",
    price: 4.5,
    category: "Comidas",
    url: "img/Comidas/Cachorro.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Salada",
    price: 4,
    category: "Comidas",
    url: "img/Comidas/Salada.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Bife",
    price: 10,
    category: "Comidas",
    url: "img/Comidas/Bife.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Lasanha",
    price: 8,
    category: "Comidas",
    url: "img/Comidas/Lasanha.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Pizza",
    price: 12,
    category: "Comidas",
    url: "img/Comidas/Pizza.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Tosta Mista",
    price: 2.5,
    category: "Sandes",
    url: "img/Sandes/tosta.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Sandes Atum",
    price: 3.0,
    category: "Sandes",
    url: "img/Sandes/sandes_atum.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Sandes Frango",
    price: 3.0,
    category: "Sandes",
    url: "img/Sandes/sandes_frango.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Cerveja",
    price: 1.0,
    category: "Alcoólicas",
    url: "img/Alcoolicas/cerveja.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Copo Vinho",
    price: 1.5,
    category: "Alcoólicas",
    url: "img/Alcoolicas/vinho.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Cidra",
    price: 1.2,
    category: "Alcoólicas",
    url: "img/Alcoolicas/cidra.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Água Mineral",
    price: 0.7,
    category: "Bebidas",
    url: "img/Bebidas/agua.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Coca-Cola",
    price: 1.0,
    category: "Bebidas",
    url: "img/Bebidas/coca_cola.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Fanta",
    price: 1.0,
    category: "Bebidas",
    url: "img/Bebidas/fanta.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Sprite",
    price: 1.0,
    category: "Bebidas",
    url: "img/Bebidas/sprite.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Coca-Cola Zero",
    price: 1.0,
    category: "Bebidas",
    url: "img/Bebidas/coca_zero.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Gelado",
    price: 1.5,
    category: "Sobremesas",
    url: "img/Sobremesas/gelado.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Mouse Chocolate",
    price: 3.0,
    category: "Sobremesas",
    url: "img/Sobremesas/mousse.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Bolo Chocolate",
    price: 3.2,
    category: "Sobremesas",
    url: "img/Sobremesas/bolo.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Café",
    price: 0.7,
    category: "Cafetaria",
    url: "img/Cafetaria/cafe.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Galão",
    price: 0.8,
    category: "Cafetaria",
    url: "img/Cafetaria/galao.svg",
    quantidadeCarrinho: 0,
  },
  {
    name: "Cappuccino",
    price: 1.2,
    category: "Cafetaria",
    url: "img/Cafetaria/cappuccino.svg",
    quantidadeCarrinho: 0,
  },
];

function renderMenu() {
    document.getElementById("cat-atual").innerHTML = "";
  let html = "";

  for (const element of categoryList) {
    html += `<div class="cat" onclick="renderSelectedCategory('${element.name}')">
            <div class="img">
                <div class="circulo-laranja">
                    <img src="${element.url}" alt="">
                </div>
            </div>
            <div class="titulo-cat">
                <h3>${element.name}</h3>
                <button class="btn-direita"><img src="img/setaDireita.svg" alt=""></button>
            </div>
        </div>`;
  }

  document.getElementById("grid-comida").innerHTML = html;
  
 backButton.classList.remove("backButton--open");
  renderListaProdutos();
}

backButton.addEventListener("click", function() {
    renderMenu();
});

function renderSelectedCategory(newCategory) {

    document.getElementById("cat-atual").innerHTML = newCategory;
    backButton.classList.add("backButton--open");

  let html = "";

  console.log(newCategory);

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].category == newCategory)
      html += `<div class="cat-food" onclick="openAddModel(${i})">
            <div class="img">
                <div class="item">
                    <img src="${productList[i].url}" alt="">
                </div>
            </div>
            <div class="titulo-cat">
                <div class="content">
                    <h4>${productList[i].name}</h4>
                    <h3>${formatCurrency.format(productList[i].price)}</h3>
                </div>
                <button class="btn-plus"><img src="img/plus.svg" alt=""></button>
            </div>
        </div>`;
  }
  if (html != "") document.getElementById("grid-comida").innerHTML = html;
  else
    document.getElementById("grid-comida").innerHTML =
      "No items for this category";
}

function renderListaProdutos() {
  let html = "";
  let total = 0;

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].quantidadeCarrinho > 0){
      html += `
            <li>
                <div class="listaproduct"><p class="comida">${productList[i].name}</p> 
                    <p>${productList[i].quantidadeCarrinho}x</p>
                    <p>${formatCurrency.format(
                      productList[i].price * productList[i].quantidadeCarrinho
                    )}</p>
                    <div class="buttons">
                        <button class="change" onclick="
                        openEditModal(${i})">
                            <img src="img/edit.svg" alt="" srcset="">
                        </button> 
                        <button class="delete" onclick="removeFromCart(${i})"> 
                            <img src="img/trash-alt.svg" alt="" srcset="">
                        </button>
                    </div> 
                </div>
            </li>`;
            total += productList[i].quantidadeCarrinho * productList[i].price;
        }
  }
  document.getElementById("listaProdutos").innerHTML = html;

  document.getElementById("precoTotal").innerHTML = formatCurrency.format(total)
}


function abrirModal() {
  filtro.classList.add("aberto");
  modal.classList.add("aberto");
}

function fecharModal() {
    filtro.classList.remove("aberto");
    modal.classList.remove("aberto");
}

function openAddModel(position) {
  quantidade = 1;
  document.getElementById("modalContent").innerHTML = `
    <div class="img">
        <div class="modal-fotoComida">
            <div>
                <img src="${productList[position].url}" alt="">
            </div>
        </div>
    </div>
    <div class="cont_quantity">
        <div class="content">
            <h4>${productList[position].name}</h4>
            <h3>${formatCurrency.format(productList[position].price)}</h3>
        </div>
        <div class="quantity">
            <h5>Quantidade</h5>
            <div class="quantidade">
            <button class="btn-minus" onclick="changeQuantidade(false)"><img src="img/minus.svg" alt=""></button>
            <div class="valor-quantidade" id = "valor-quantidade">${quantidade}</div>
            <button class="btn-plus" onclick="changeQuantidade(true)"><img src="img/plus.svg" alt=""></button>
            </div>
        </div>
    </div>
    <div class="adicionar">
        <button class="add" onclick="addToCart(${position})">Adicionar</button>
    </div>
    `;

  abrirModal();
}

pagar.addEventListener("click", function () {
  renderFatura();
  abrirModal();
});

fechar.addEventListener("click", function () {
    fecharModal();
});

function changeQuantidade(isAdding) {
  if (isAdding) {
    quantidade += 1;
  } else {
    if (quantidade > 1) quantidade -= 1;
  }
  document.getElementById("valor-quantidade").innerHTML = quantidade;
}

function renderFatura() {
  let html = "<p class='conta'>Conta </p> <br>  <div class='modal-listaFatura'>";
  let total = 0;
  for(const element of productList) {
    if (element.quantidadeCarrinho > 0) {
      total += element.price * element.quantidadeCarrinho;
      html += `
                <div class="modal-listaFatura-listItem"><p class="comida">${
                  element.name
                }</p> 
                    <p>${element.quantidadeCarrinho}</p>
                    <p>${formatCurrency.format(
                      element.price * element.quantidadeCarrinho
                    )}</p>
                </div>`;
    }
  }
  html += `</div>
                <div class="addTotal">
                    <p class='total'>Total</p>
                    <p class='total-preco'>${formatCurrency.format(total)}</p>
                </div>
                <div class="btn-confirmar">
                  <button class="add" onclick="resetarall()">Confirmar Pagamento</button>
                </div>`;

  document.getElementById("modalContent").innerHTML = html;
}

function removeFromCart(position) {
  productList[position].quantidadeCarrinho = 0;
  renderListaProdutos();
}

function openEditModal(position) {

    quantidade = productList[position].quantidadeCarrinho;

    document.getElementById("modalContent").innerHTML = `
        <div class="img">
            <div class="modal-fotoComida">
                <div>
                    <img src="${productList[position].url}" alt="">
                </div>
            </div>
        </div>
        <div class="cont_quantity">
            <div class="content">
                <h4>${productList[position].name}</h4>
                <h3>${formatCurrency.format(productList[position].price)}</h3>
            </div>
            <div class="quantity">
                <h5>Quantidade</h5>
                <div class="quantidade">
                <button class="btn-minus" onclick="changeQuantidade(false)"><img src="img/minus.svg" alt=""></button>
                <div class="valor-quantidade" id = "valor-quantidade">${quantidade}</div>
                <button class="btn-plus" onclick="changeQuantidade(true)"><img src="img/plus.svg" alt=""></button>
                </div>
            </div>
        </div>
        <div class="adicionar" >
            <button class="add" onclick="changeCartAmount(${position})">Editar</button>
        </div>
        `;
    abrirModal();
}

function changeCartAmount(position){
    productList[position].quantidadeCarrinho = quantidade;
    renderListaProdutos();
    fecharModal();    
}

function addToCart(position){
    productList[position].quantidadeCarrinho += quantidade;
    renderListaProdutos();
    fecharModal();    
}

const expandBtn = document.querySelector('.expand-btn');
const lista = document.querySelector('.lista');

expandBtn.addEventListener('click', () =>{
    lista.classList.toggle('lista');
    expandBtn.classList.toggle('aberto');
});


// function resetarall e voltar ao menu

function resetarall() {
  for (const element of productList) {
    element.quantidadeCarrinho = 0;
  }
  renderListaProdutos();
  renderMenu();
  fecharModal();
}

