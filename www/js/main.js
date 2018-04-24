// управление меню в мобильной версии
controls();
function controls(){
    var controlEl=document.getElementById('navButton');
    controlEl.addEventListener('click',showNav);
}
function showNav(event){
    var nav=document.getElementsByTagName('nav')[0];
    nav.classList.toggle('showNav');

    nav.addEventListener('click',activeClick);

}
function activeClick(event){
    document.getElementsByClassName('active')[0].classList.remove('active');
    event.target.classList.add('active');
}
