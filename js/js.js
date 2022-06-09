$(document).ready(function()
{
    //navbar fixed
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('nav').addClass('black');
        }else{
            $('nav').removeClass('black');
        }
    });
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.scrollspy').scrollSpy();
    //mostrar munu mobile
    $('.button-collapse').sideNav();
    // slider
    $('.slider').slider({
        fullWidth: true,
        indicators: false,
    });
    // tooltipped
    $('.tooltipped').tooltip();
    //todos trabalhos selection
    $("#btn-todos").click(function(){
        $(".items .item").slideDown();
    });
    //trabalhos lajes selection
    $("#btn-site").click(function(){
        $(".items .item").fadeOut();
        $(".items .site").fadeIn();
    });
    //trabalhos vigas selection
    $("#btn-logos").click(function(){
        $(".items .item").hide("slow");
        $(".items .logos").show("slow");
    });
    //trabalhos ferros selection
    $("#btn-lojas").click(function(){
        $(".items .item").slideUp();
        $(".items .lojas").slideDown();
    });
    //trabalhos ferros selection
    $("#btn-artes").click(function(){
        $(".items .item").slideUp();
        $(".items .artes").slideDown();
    });
});