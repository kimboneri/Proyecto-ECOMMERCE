 export function toggleCart(){
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

