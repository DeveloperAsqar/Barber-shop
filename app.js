window.addEventListener( 'DOMContentLoaded', () => {
    let menu = document.querySelector('.menu');
    let menuicon = document.querySelector('.menuicon');
    let menuimg = document.querySelector('.menuimg');

    menu.style.transform = "translateX(100%)"
    
    menuicon.addEventListener('click', toggle) 

    function toggle (){
        if(menu.style.transform == "translateX(100%)"){
            menu.style.transform = "translateX(0)"
            menuimg.src = "img/Barber_Shop_img/close.png"
        }
        else{
            menu.style.transform = "translateX(100%)"
            menuimg.src = "img/Barber_Shop_img/menu.png"
        }
    }





})