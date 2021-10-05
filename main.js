$(function() {
    $(document).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});

let menu = document.getElementById('bar');
let toggler = document.getElementById('navbar');

toggler.style.right = "-360px";

menu.onclick = function(){
    if(toggler.style.right == "-360px") {
        toggler.style.right = "0";
    }else {
        toggler.style.right = "-360px"
    }

}
