const timeline = gsap.timeline({ defaults: { duration: 0.75 } });

timeline.fromTo(".header", { opacity: 0 }, { opacity: 1 }, 0.25);

timeline.fromTo(".top-heading", { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, 0.5);

timeline.fromTo(".bottom-heading", { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, 1);

timeline.fromTo(".intro", { opacity: 0 }, { opacity: 1 }, 2);

gsap.fromTo(".works-header", { opacity: 0 }, { opacity: 1, scrollTrigger: ".works-header" }, 1.5);

gsap.fromTo(".cms-slider", { y: 100 }, { y: 0, scrollTrigger: ".cms-slider" }, 2.5);

gsap.fromTo(".contact", { opacity: 0 }, { opacity: 1, scrollTrigger: ".contact" }, 2.5);

// aniamte the heading in the footer with a duration of 1.25 seconds
gsap.fromTo(".thanks-line", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: ".footer" }, 2.5);

const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



