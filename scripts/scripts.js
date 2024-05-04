// Estructura de JavaScript
/*
- Menú desplegable footer (Botón que despliega el menú de navegación)
- Slide Recetario (Slide de imágenes para cada tipo de cóctel)
- Slide Recetas (Slide del contenido de cada receta)
*/



// MENÚ DESPLEGABLE (FOOTER - MÓVIL)

const footerBtn = document.querySelector('.Footer__btn')
const footerNav = document.querySelector('.Footer__nav')

// COMPROBACIÓN DE SELECCIÓN
// console.log(footerBtn)
// console.log(footerNav)

footerBtn.addEventListener('click', function () {
    footerNav.classList.toggle('isActive')
})

/* ---------- PÁGINAS DE CÓCTELES / RECETAS ---------- */

// SLIDE RECETARIO (CÓCTELES - DESKTOP)
const slideBtn = document.querySelectorAll('.btn__slide')
const slideMain = document.querySelectorAll('.Main__cocteles')

let posicion = 0

slideBtn.forEach(function (each, i) {
    slideBtn[i].addEventListener('click', function () {
        posicion = i

        slideMain.forEach(function (each, i) {
            slideBtn[i].classList.remove('isActive')
            slideMain[i].classList.remove('isVisible')

        })
        slideBtn[posicion].classList.add('isActive')
        slideMain[posicion].classList.add('isVisible')
    })
})


// /* ---------- PÁGINAS DE CÓCTELES / RECETAS ---------- */

// SLIDE RECETAS (CÓCTELES - DESKTOP)
const slideRecetasBtn = document.querySelectorAll('.Recetas__btn--detalles')
const slideRecetas = document.querySelectorAll('.slide__recetas')

let posicionReceta = 0

// Esta línea el DOM la marca como error, pero está realizando su función
slideRecetas[0].classList.add('isVisible')
slideRecetasBtn[0].classList.add('isActive')


slideRecetasBtn.forEach(function (each, i) {
    slideRecetasBtn[i].addEventListener('click', function () {
        posicionReceta = i

        slideRecetas.forEach(function (each, i) {
            slideRecetasBtn[i].classList.remove('isActive')
            slideRecetas[i].classList.remove('isVisible')

        })
        slideRecetasBtn[posicionReceta].classList.add('isActive')
        slideRecetas[posicionReceta].classList.add('isVisible')
    })
})




