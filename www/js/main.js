// управление меню в мобильной версии
controls();
function controls(){
    var controlEl=document.getElementById('navButton');
    controlEl.addEventListener('click',showNav);
}
function showNav(){
    var nav=document.getElementsByTagName('nav')[0];
    nav.className += 'showNav';
}
