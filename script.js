 const botoes = document.querySelectorAll('button');

  botoes.forEach( function(botao){
    botao.addEventListener('click', botaoClicado);


  function botaoClicado(){
    let clicks = botao.querySelector('span');
    console.log("fui clicado");
    clicks.textContent++; 
  }
  }
  )
  