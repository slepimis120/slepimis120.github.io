window.onload = function(){
    document.querySelector(".preloader").style.display = "none";

    gsap.timeline()
        .from("#parallax-bg-1", {opacity:0, scale:1.1, duration:1.0, ease:Power1.easeInOut}, "+=0.0")
        .from(".hero span", {y:'90%', stagger:0.2, duration:2.0, ease:Expo.easeInOut}, "-=1.0")
        .from(".cv-link", {opacity:0, duration:0.5, ease:Power1.easeInOut}, "-=1.5")
};