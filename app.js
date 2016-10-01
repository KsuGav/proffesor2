/**
 * Created by ss on 01.10.2016.
 */
$(document).ready(function() {
    $('.btn-default').bind('mouseenter',function(){
        $(this).parent().find('img').animate({opacity:0.7},100);
    }).bind('mouseleave',function(){
        $(this).parent().find('img').animate({opacity:1},100);
    });
});