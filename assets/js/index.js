const mainContain = document.getElementById('contain-main');
//const containTitular = document.createElement('div')
//containTitular.classList.add('contain-titular');
//containTitular.innerHTML = `<a href="https://www.fontspace.com/category/brush"><img src="https://see.fontimg.com/api/renderfont4/MVmoY/eyJyIjoiZnMiLCJoIjo3MiwidyI6MTAwMCwiZnMiOjcyLCJmZ2MiOiIjRUZGNjMwIiwiYmdjIjoiIzM1MzUyMyIsInQiOjF9/RGUgYm9jYSBubyBzZSBoYWNlLCBzZSBuYWNlLi4u/better-faster-regular.png" alt="Brush fonts"></a>`;
const containCarrusel = document.createElement('div')
containCarrusel.classList.add('contain-carrusel');
containCarrusel.innerHTML = `
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./assets/img/boca1.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="./assets/img/boca2.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="./assets/img/boca3.jpg" class="d-block w-100" alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`;
const buttonMain = document.createElement('div')
buttonMain.classList.add('button-main');
buttonMain.innerHTML = `<button>Hacer click</button>`

//mainContain.appendChild(containTitular)
mainContain.appendChild(containCarrusel)
mainContain.appendChild(buttonMain)

/*##### SECCION CONTENIDO DE LA PAGE ########*/
const containSecond = document.querySelector('.contain-second');
const containCard = document.createElement('div')
containCard.classList.add('contain-card');
const containText = document.createElement('div')
containText.classList.add('contain-text');

const containCard2 = document.createElement('div')
containCard2.classList.add('contain-card2');
const containText2 = document.createElement('div')
containText2.classList.add('contain-text2');

const containCard3 = document.createElement('div')
containCard3.classList.add('contain-card3');
const containText3 = document.createElement('div')
containText3.classList.add('contain-text3');


containSecond.appendChild(containCard)
containSecond.appendChild(containText)
containSecond.appendChild(containCard2)
containSecond.appendChild(containText2)
containSecond.appendChild(containCard3)
containSecond.appendChild(containText3)

const containCopas = document.querySelector('.contain-copas');
const titularCopas = document.createElement('div')
titularCopas.classList.add('titular-copas')
titularCopas.innerHTML = `<a href="https://www.fontspace.com/category/brush"><img src="https://see.fontimg.com/api/renderfont4/K7wX7/eyJyIjoiZnMiLCJoIjo0OCwidyI6MTAwMCwiZnMiOjQ4LCJmZ2MiOiIjRUZGNjMwIiwiYmdjIjoiIzM1MzUyMyIsInQiOjF9/bnVlc3RyYXMgY29wYXM/better-faster-italic.png" alt="Brush fonts"></a>`;
containCopas.appendChild(titularCopas)