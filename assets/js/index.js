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