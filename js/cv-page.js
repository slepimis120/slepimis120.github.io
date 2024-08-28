window.onload = function(){
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";

    gsap.timeline()
        .from("header span", {y: '-100%', stagger: 0.2, duration: 2.0, ease: Expo.easeInOut}, "-=0.0")
        .from(".back-link", {y: '-130%', duration: 2.0, ease: Expo.easeInOut}, "-=1.8")
        .from(".first-element", {y: '100%', opacity:0, duration: 2.0, ease: Expo.easeInOut}, "-=2.5")
        .from(".project-info span", {y: '250%', stagger: 0.3, duration: 2.0, ease: Expo.easeInOut}, "-=3.0")
};
