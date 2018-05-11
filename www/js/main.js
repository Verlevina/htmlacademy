// управление меню в мобильной версии
controls();
var a=document.getElementsByTagName('a');
function controls(){
    var controlEl=document.getElementById('navButton');
    controlEl.addEventListener('click',showNav);
}
function showNav(event){
    var nav=$('nav');
    nav.toggleClass('showNav');
    nav.slideToggle('slow');
    for (var i=0;i<a.length;i++ ) {
        a[i].addEventListener('click', activeClick);
    }
}
function activeClick(event){
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');
}
//активная текущая ссылка
for (var i=0;i<a.length;i++ ) {
    a[i].addEventListener('click', activeClick);
}
//скролл для навигации
jQuery(document).ready(function() {
    jQuery(".scrollto a").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 0;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});
