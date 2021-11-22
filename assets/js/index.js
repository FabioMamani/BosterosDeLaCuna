const mainContain = document.getElementById('contain-main');
const containTitular = document.createElement('div')
containTitular.classList.add('contain-titular');
containTitular.innerHTML = `<h2>Titular</h2>`;
const containCarrusel = document.createElement('div')
containCarrusel.classList.add('contain-carrusel');
containCarrusel.innerHTML = `<h2>Carrusel de imagenes</h2>`;
const buttonMain = document.createElement('div')
buttonMain.classList.add('button-main');
buttonMain.innerHTML = `<h3>Button</h3>`

mainContain.appendChild(containTitular)
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
titularCopas.innerHTML = `<h2>Titular de Copas</h2>`;
containCopas.appendChild(titularCopas)