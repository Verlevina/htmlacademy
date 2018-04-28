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


//скролл для навигации
jQuery(document).ready(function() {
    jQuery(".scrollto a").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});
