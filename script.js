gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".min-container .row");

containers.forEach((container) => {
  const h2s = container.querySelector("h2");
  const ps = container.querySelectorAll("p");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "+=200",
        scrub: true,
        //pin: true,
        // markers: true,
      },
    })

    .from(h2s, {
      duration: 1,
      opacity: 0,
    })
    .from(ps, {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 1,
    });
});
