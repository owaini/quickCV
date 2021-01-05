
gsap.to("#box", {
    scrollTrigger : {
        scrub: true
    },
    y: 10,
    opacity: 0,
  
})


gsap.to("#bootstrap", {
    scrollTrigger : {
        scrub: true
    },
    x: -700,
    y: 800,
    scale: 1,
  
})
gsap.to("#css", {
    scrollTrigger : {
        scrub: true
    },
    x: -500,
    y: 1500,
    scale: 0.5,
})
gsap.to("#github", {
    scrollTrigger : {
        scrub: true
    },
    x: 1500,
    y: 600,
    scale: 0.5,
})
gsap.to("#graph", {
    scrollTrigger : {
        scrub: true
    },
    x: -100,
    y: 2500,
    scale: 0.5,
})
gsap.to("#redux", {
    scrollTrigger : {
        scrub: true
    },
    x: 800,
    y: 1900,
    scale: 0.5,
})
gsap.to("#jquery", {
    scrollTrigger : {
        scrub: true
    },
    x: -200,
    y: 1900,
    scale: 0.5,
})
gsap.to("#html", {
    scrollTrigger : {
        scrub: true
    },
    x: -200,
    y: 1900,
    scale: 0.5,
})

gsap.to("#nodejs", {
    scrollTrigger : {
        scrub: true
    },
    x: -10,
    y: 2000,
    scale: 0.5,
})

gsap.to("#npm", {
    scrollTrigger : {
        scrub: true
    },
    x: 3100,
    y: 3000,
    scale: 0.9,
})

gsap.to("#mongodb", {
    scrollTrigger : {
        scrub: true
    },
    x: -100,
    y: 1100,
    scale: 0.8,
})

gsap.to("#react", {
    scrollTrigger : {
        scrub: true
    },
    x: 1500,
    y: 400,
    scale: 1.7,
})

gsap.to("#firebase", {
    scrollTrigger : {
        scrub: true
    },
    x: 3900,
    y: 1700,
    scale: 1,
})
gsap.to("#hooks", {
    scrollTrigger : {
        scrub: true
    },
    x: 2900,
    y: 3100,
    scale: 1,
})
gsap.to("#gatsby", {
    scrollTrigger : {
        scrub: true
    },
    x: 1900,
    y: 1100,
    scale: 1,
})

gsap.to("#js", {
    scrollTrigger : {
        scrub: true
    },
    x: 900,
    y: 1100,
    scale: 1,
})

gsap.to("#swiper", {
    scrollTrigger : {
        scrub: true
    },
    x: 4900,
    y: 1100,
    scale: 0.8,
})
gsap.to("#express", {
    scrollTrigger : {
        scrub: true
    },
    x: 2900,
    y: 4100,
    scale: 1.2,
})


/* DropImage */

let images = [
    'url("img-project/banatDesign.jpg")',
    'url("img-project/barcu.jpg")',
    'url("img-project/blog-developer.png")',
    'url("img-project/contact.jpg")',
    'url("img-project/dashbordmulti.jpg")',
    'url("img-project/festivalcolor.jpg")',
    'url("img-project/formeetup.jpg")',
    'url("img-project/furniture.jpg")',
    'url("img-project/minta.jpg")',
    'url("img-project/mintat.jpg")',
    'url("img-project/notes.jpg")',
    'url("img-project/register.jpg")',
    'url("img-project/tasawaq.jpg")',
    'url("img-project/tech-sel.jpg")',
    'url("img-project/twitter.jpg")',
    'url("img-project/wadiAlnahel.jpg")',
  
];

function dropImage(){
    let portfolio = document.querySelector('.portfolio__container');
    let drop = document.createElement('span');
    // drop.style.left = Math.random() * innerWidth + 'px';
    drop.style.top = Math.random() * innerHeight + '500' + 'px';

    let bg = images[Math.floor(Math.random() * images.length) ];


    let size = Math.random() * 200;

    drop.style.width = 50+size +'px';
    drop.style.height = 50+size +'px';
    drop.style.backgroundImage = bg;

    portfolio.appendChild(drop);

    setTimeout( () =>{
        drop.remove()
    },6000)
    
}
setInterval(dropImage, 100);

window.addEventListener("scroll", () => {
    var nav = document.querySelector('nav');
})