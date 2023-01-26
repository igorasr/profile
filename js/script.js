const profile = {

    btnMenu: document.querySelector('#btn-menu'),
    body: document.querySelector('body'),
    item: document.querySelectorAll("[data-animation]"),

    handleOpenCloseResponsiveMenu(){
        this.btnMenu.classList.contains('bi-list')
                    ? this.btnMenu.classList.replace('bi-list', 'bi-x')
                    : this.btnMenu.classList.replace('bi-x', 'bi-list')

        this.body.classList.toggle('menu-nav-active');
    },

    animeScroll(){

        const windowTop = window.pageYOffset + window.innerHeight * 0.85;
        this.item.forEach(element => {
            if (windowTop > element.offsetTop) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate')

            }
        });
    },

    registerEvents(){
        window.addEventListener("scroll", ()=>this.animeScroll());
        this.btnMenu.addEventListener("click",()=>this.handleOpenCloseResponsiveMenu())
    }
 
}

function main(){
    window.onload = ()=>{
        profile.registerEvents();
    }
}

main();
