//MOVIMIENTO DE IMGS

function bgChanger(){
    let i = 0;
    setInterval(function(){
     i = (i + 1) % 3;
    
     const ajustar =  document.getElementById('cover')
     if(!ajustar){
        return
     }else{
     return ajustar.className = 'imagen' + (i + 1);
     }
    }, 5000);
}

export default bgChanger;