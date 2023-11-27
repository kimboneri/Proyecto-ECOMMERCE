//MOVIMIENTO DE IMGS

function bgChanger(){
    let i = 0;
    setInterval(function(){
     i = (i + 1) % 3;
     document.getElementById('cover').className = 'imagen' + (i + 1);
    }, 5000);
}

export default bgChanger;