var tl = gsap.timeline();
tl .from(".brand, .service>p",{
    y: -60,
    duration:0.5,
    stagger:0.05
})
gsap .from(".left h1",{
    x: -1000,
    duration:1,
    stagger:0.5,
})

tl .from(".right",{
    x:1000,
    duration:1,
    stagger:0.5,
})


gsap .from(".box1",{
    scale:0,
    duration:1,
    scrollTrigger:{ 
        trigger:".box1",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:true,
      
    }
})