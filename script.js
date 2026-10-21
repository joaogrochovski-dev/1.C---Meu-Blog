 const botoes = document.querySelectorAll('button');

  botoes.forEach( function(botao){
    let curtiu = false;
    botao.addEventListener('click', botaoClicado);



  function botaoClicado(){
    let clicks = botao.querySelector('span');
    if (curtiu === false){
      clicks.textContent++;
      curtiu = true;  
    } else {
      clicks.textContent--;
      curtiu = false;
    }

    clicks.textContent++; 
  }
  }
  )
  
  const btnTemaEscuro = document querySelector(".btnTemaEscuro");
  btnTemaEscuro.addEventListener('click', MudarTema);

  function MudarTema() {
    const Pagina = document.body;
    if (Pagina.classList.contains("tema-escuro")) {
      Pagina.classList.remove("tema-escuro");
    } else {
      Pagina.classList.add("tema-escuro");
    }
  }