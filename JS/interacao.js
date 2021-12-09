
// ABRE E FECHA MENU RESPONSIVO

const btnMenu = document.querySelector('#btn-menu');
const body = document.querySelector('body');


btnMenu.addEventListener("click", ()=>{
    btnMenu.classList.contains('bi-list')
    ? btnMenu.classList.replace('bi-list', 'bi-x')
    : btnMenu.classList.replace('bi-x', 'bi-list')
    
    body.classList.toggle('menu-nav-active');
})




/*ANIMACAO SCROLL*/

const item = document.querySelectorAll("[data-animation]");


const animeScroll = () => {

    const windowTop = window.pageYOffset + window.innerHeight *0.85;
    
    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate');
        }else {
            element.classList.remove('animate')
           
        }
    });


};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
}) ;

// TESTE


