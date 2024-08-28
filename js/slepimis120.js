

$(document).ready(function () {
    var circle = document.querySelector(".circle");

    TweenLite.set(circle, {
        xPercent: -50,
        yPercent: -50
    });

    window.addEventListener("mousemove", moveCircle);

    function moveCircle(e) {
        TweenLite.to(circle, 0.2, {
            x: e.clientX,
            y: e.clientY
        });
    }

    /** Mouse hover **/
    $( "a, .image-wrapper" ).mouseover(function() {
        $( ".circle" ).addClass( "circle-hover" );
    }).mouseleave(function() {
        $( ".circle" ).removeClass( "circle-hover" );
    });

    /** Random margin **/
    $(".work .item").each(function() {
        var numRand = Math.floor(Math.random()*40)+ 2 ;
        $(this).css({'padding-left': numRand+"vw"});
    });

    /** Parallax **/
    $(window).scroll(function(e){
        parallaxScroll();
    });

    if (parseInt($(window).width()) < 1024) {
        function parallaxScroll(){
            var scrolled = $(window).scrollTop();
            $('#parallax-bg-1').css('top',(15-(scrolled*.01))+'vw');
        }
    }

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#parallax-bg-1').css('top',(15-(scrolled*.01))+'vw');
    }

    $(".cv-category-content").mouseenter(function() {
        $(this).children( ".what, .where" ).css( "background-color", "var(--lime)" );
    });
    $(".cv-category-content").mouseleave(function() {
        $(this).children( ".what, .where" ).css( "background-color", "transparent" );
    });

});