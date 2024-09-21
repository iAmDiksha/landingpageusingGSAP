let t1 = gsap.timeline();

t1.from(".container",1,{
    x:"-100%",
    delay:1,
    ease: "power2.inOut"
})

t1.staggerFrom(".nav, .hero-container",1,{
    x:"-100%",
    delay:0.5,
    ease: "power2.inOut"
})

t1.from(".card",1,{
    opacity:0.4,
    delay:0.5,
    x:"-100%"
})

t1.staggerFrom(".content, .right > h1",2,{
    opacity:0,
    delay:0.5,
    x:"-50px"
})