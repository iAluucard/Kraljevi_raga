/*$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    $("video").css("top", "0" + (scroll / 0.8) + "px");
});*/


jQuery( document ).ready( function( $ ) {
	var body = document.body,
        doc = document.documentElement;
    $(window).scroll(function () {
        body.style.backgroundPosition = "0px " + ( 830 -(Math.max(doc.scrollTop, body.scrollTop) / 4) ) + "px";
    });
});