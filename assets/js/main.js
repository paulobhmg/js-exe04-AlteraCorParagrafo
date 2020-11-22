function carregar(){
  const bodyConfig = getComputedStyle(document.body);
  const bgBody     = bodyConfig.backgroundColor;
  const container  = document.querySelector('.paragrafos');

  for(let i = 0; i < 4; i++){
    criaParagrafos('.paragrafos');
  }

  const paragrafos = container.querySelectorAll('p');
  // for(let paragrafo of paragrafos){
  //   alteraCor(paragrafo, bgBody, '#FFF');
  // }

  paragrafos.forEach(paragrafo => alteraCor(paragrafo, bgBody, '#FFF'));
}

function criaParagrafos(elemento){
  let paragrafos = document.querySelector(elemento);
  let paragrafo  = document.createElement('p');
  paragrafo.innerText = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
    + 'Delectus distinctio dolor accusantium aspernatur illum. Incidunt,' 
    + 'delectus non temporibus exercitationem iusto voluptate tenetur '
    + 'rerum tempore, iste, eius quae atque illo dolor.'
  ;
  paragrafos.appendChild(paragrafo);
}

function alteraCor(paragrafo, bg, bf){
  paragrafo.style.backgroundColor = bg;
  paragrafo.style.color = bf;
  paragrafo.style.textAlign = 'justify';
  paragrafo.style.padding = '5px';
}

carregar();