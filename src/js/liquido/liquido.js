async function GetLiquidProducts(){
    const response = await fetch("/src/data/products.json");
    const data = await response.json();
    const products = document.querySelector('.products__wrapper__products')
    console.log(data)
    function GetLiquidProducts(element){
        return `
        <div class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
    }
    
    data.liquidos.forEach(element => {
      products.innerHTML += GetLiquidProducts(element);
    });
    function brandFilter() {
      const inputMiPods = document.querySelectorAll('.input-button');
       // Asegúrate de tener el elemento correcto
  
     // Variable para acumular HTML de tarjetas de productos
  
      inputMiPods.forEach(elemento => {
          elemento.addEventListener('click', () => {
              let html = '';
  
              // Filtra los elementos de productos según los inputs marcados
              const selectedBrands = Array.from(inputMiPods)
                  .filter(input => input.checked)
                  .map(input => input.value);
  
              data.liquidos.forEach(element => {
                  // Verifica si el producto tiene la marca correspondiente a algún input marcado
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
              // Actualiza el contenido de products con el HTML acumulado
              products.innerHTML = html;
          });
      });
  }
  
  brandFilter()
}
GetLiquidProducts()

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
