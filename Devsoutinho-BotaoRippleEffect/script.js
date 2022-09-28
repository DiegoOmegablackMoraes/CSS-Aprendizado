document.querySelector("button").addEventListener("click", (event) => {
  //1 - Preparando o HTML
  const $botao = event.target; //pega o elemento clicado
  const $onda = document.createElement("span"); //cria um novo elemento html
  $onda.classList.add("onda"); // adiciona classes a um elemento html
  $botao.insertAdjacentElement("beforeend", $onda); // adiciona um elemento filho a uma tag html

  const posicoesDoBotao = $botao.getBoundingClientRect(); //obtem as coordenadas de um elemento na tela
  const topo = Math.abs(posicoesDoBotao.top - event.clientY); //calcula a posicao do cursor no momento do click
  const esquerda = Math.abs(posicoesDoBotao.left - event.clientX);
  const scale = posicoesDoBotao.height;

  //manipulando as custom properties do CSS
  $onda.style.setProperty("--topo", `${topo}px`);
  $onda.style.setProperty("--esquerda", `${esquerda}px`);
  $onda.style.setProperty("--opacity", 1);
  $onda.style.setProperty("--scale", scale);

  function limpaEfeito() {
    $onda.removeEventListener("transitionend", limpaEfeito);
    $onda.style.setProperty("--opacity", 0);
    //remove o span ao fim da transicao de opacidade
    $onda.addEventListener("transitionend", () => {
      $onda.remove();
    });
  }
  //Monitora o fim do evento de transicao
  $onda.addEventListener("transitionend", limpaEfeito);
});
