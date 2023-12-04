import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
const products = document.querySelector('.products__wrapper__products')
const getProducts = async ()=>{
const response = await fetch("/src/data/products.json");
const data = await response.json();
  function addBag(){
    let bag = [];
    const addCard =document.getElementById('add-bag');
    addCard.addEventListener('click',() => {
        
    })
  }

  function generateCardHTML(element) {
    return `
    <div class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <div class="card__img">
      <img src="${element.img}" alt=""> 
    </div>
    <div class="card__text">
      <p>${element.name}</p>
      <span>s/${element.price}</span>
      <div id="add-bag" class="card__text__price">
        <span>Enviar a la bolsa</span>
      </div>
    </div>
  </div>`;
  }
  data.vapeKits.forEach(element => {
    products.innerHTML += generateCardHTML(element);
  });
  
  data.desechables.forEach(element => {
    products.innerHTML += generateCardHTML(element);
  });
  
  data.liquidos.forEach(element => {
    products.innerHTML += generateCardHTML(element);
  });
  
  function brandFilter() {
    
    const inputBrands = document.querySelectorAll('.input-button');
  
    inputBrands.forEach(elemento => {
        elemento.addEventListener('click', () => {
            let html = '';

            
            const selectedBrands = Array.from(inputBrands)
                .filter(input => input.checked)
                .map(input => input.value);

            [...data.vapeKits, ...data.desechables, ...data.liquidos].forEach(element => {
                if (selectedBrands.length === 0 || selectedBrands.includes(element.brand)) {
                    html += `<div class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="card__img">
                            <img src="${element.img}" alt=""> 
                        </div>
                        <div class="card__text">
                            <p>${element.name}</p>
                            <span>s/${element.price}</span>
                            <div class="card__text__price">
                                <span>Enviar al carrito</span>
                            </div>
                        </div>
                    </div>`;
                    
                }else{
                  products.innerHTML="";
                }
            });
            
            products.innerHTML = html;
        });
    });

}
  brandFilter()


}
getProducts()

 function toggleCart(){
  const cart = document.getElementById('cart');
  const close = document.getElementById('close');
  const closedCart = document.getElementById('menu-cerrado');
  cart.addEventListener('click' ,() => {
       closedCart.classList.toggle('menu-abierto')
       close.addEventListener('click',() => {
           closedCart.classList.remove('menu-abierto')
       })
  })
   
}
toggleCart()









