if(document.querySelector('.burger-content') != null && document.querySelector('.burger-content') != undefined){
    document.querySelector('.burger-content').addEventListener('click', function(e){
        document.querySelector('.burger-content').classList.toggle('burger-active');
        document.querySelector('.nav-menu').classList.toggle('nav-menu-active');
    });
}