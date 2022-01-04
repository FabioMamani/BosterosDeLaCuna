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
buttonMain.innerHTML = `<button>Ver mas</button>`

//mainContain.appendChild(containTitular)
mainContain.appendChild(containCarrusel)
mainContain.appendChild(buttonMain)

/*##### SECCION CONTENIDO DE LA PAGE ########*/
const containSecond = document.querySelector('.contain-second');
const containCard = document.createElement('div')
containCard.classList.add('contain-card');
containCard.setAttribute('data-aos', 'fade-right')
const containText = document.createElement('div')
containText.classList.add('contain-text');
containText.setAttribute('data-aos', 'fade-up')
containText.innerHTML = `<h2>Primera división Masculino</h2>
<p>El plantel de primera división de un club mas que grande, donde los jugadores dejan todo por esta camiseta
    , dejar todo por los colores.Nuestro equipo se entrena y se proyecta a ser siempre competitivo a las proximas
    copas internacionales.
</p>
<button class= button-text type="button" >Seguir leyendo</button>`

const containCard2 = document.createElement('div')
containCard2.classList.add('contain-card2');
containCard2.setAttribute('data-aos', 'fade-right')
const containText2 = document.createElement('div')
containText2.classList.add('contain-text2');
containText2.setAttribute('data-aos', 'fade-up')
containText2.innerHTML = `<h2>Primera división Femenino</h2>
<p>El plantel de primera división de futbol femenino del club Boca Juniors, es uno de los equipos favoritos y muy competitivo,
a nivel local.No solo por su buen juego , sino también por sus individualidades , ganando la mayoria de los partidos 
locales, y llevando al club a la alta competencia en torneos internacionales.
</p>
<button class= button-text type="button" >Seguir leyendo</button>`

const containCard3 = document.createElement('div')
containCard3.classList.add('contain-card3');
containCard3.setAttribute('data-aos', 'fade-right')
const containText3 = document.createElement('div')
containText3.classList.add('contain-text3');
containText3.setAttribute('data-aos', 'fade-up')
containText3.innerHTML = `<h2>Reserva</h2>
<p>El plantel de reserva del club en donde día a día , se van construyendo varias figuras y talentos.
La reserva lleva una valla invicta en lo que va del campeonato, pero su mayor virtud es la de no relajarse ni darse por
vencido nunca.

</p>
<button class= button-text type="button" >Seguir leyendo</button>`


containSecond.appendChild(containCard)
containSecond.appendChild(containText)
containSecond.appendChild(containCard2)
containSecond.appendChild(containText2)
containSecond.appendChild(containCard3)
containSecond.appendChild(containText3)

const containCopas = document.querySelector('.contain-copas');
const titularCopas = document.createElement('div')
const copaImg = document.createElement('div')
copaImg.classList.add('contain-img-copa')
copaImg.setAttribute('data-aos', 'fade-up')
copaImg.innerHTML = `<img src="./assets/img/copas.png" alt="" ></img>`
const buttonCopas = document.createElement('div')
buttonCopas.classList.add('button-copas')
buttonCopas.innerHTML = `<button type="button">Ver títulos</button>`

/*containCopas.appendChild(titularCopas)*/
containCopas.appendChild(copaImg)
containCopas.appendChild(buttonCopas)