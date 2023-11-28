import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
const products = document.querySelector('.products__wrapper__products')
const getProducts = async ()=>{
    const response = await fetch("/src/data/products.json");
    const data = await response.json();
    console.log(data)
    data.vapeKits.forEach(element => {
        products.innerHTML += `
        <div class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card__img">
        <img src="${element.img}" alt=""> 
        </div>
        
        <div class="card__text">
        <p>${element.name}</p>
        <span>s/${element.price}</span>
        </div>
        </div>`

    });
}
getProducts()


function setUpImageClickHandler(){
    const modalImg = document.querySelector('.modal__img')
    const imgs = document.querySelectorAll('.products__wrapper__products');
  
    imgs.forEach(element => {
        
        element.addEventListener('click',()=>{
            modalImg.src = element.img
            console.log(element)
        })
    });
}
setUpImageClickHandler()



