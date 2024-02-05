var t2 = gsap.timeline();

t2.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

t2.to("#loader h3", {
  opacity: 0,
  x: -40,
  stagger: 0.1,
  duration: 1,
});

t2.to("#loader", {
  opacity: 0,
});
t2.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  delay: -0.5,
});

t2.to("#loader", {
  display: "none",
});

t2.to(".one", { opacity: 1, display: "flex" });
t2.fromTo(
  "#dockerText",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  }
);
// t2.set("#fanta", { scale: 2, opacity: 1, x: "", y: "0%" });
// t2.set("#leaf", { scale: 1, opacity: 0, x: "0%", y: "100%" });
t2.fromTo("#fanta", 
{
    scale:0.5,
    opacity:0
},
{
    scale: 1,
    opacity: 1,
    duration: 1,
    y: "0%",
    ease: "power2.out",
});
t2.to("#leaf", {
    scale: 1,
    opacity: 1,
    duration: 1,
    x: "10%",
    y: "0%",
    ease: "power2.out",
});

t2.to(".one-two", {
  opacity: 1,
  display: "flex",
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".one-two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "10%",
    // rotate: "360deg"
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "360deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

// tl2.to("#fanta",{
//     width:"35%",
//     top: "210%",
//     left: "33%",
// }, 'ca')

function animateFanta() {
  gsap.to(".two", { opacity: 0, display: "none" });
  gsap.to(".two-two", { opacity: 0, display: "none" });
  gsap.to(".one", { opacity: 1, display: "flex" });
  gsap.to(".one-two", {
    opacity: 1,
    display: "flex",
  });
  gsap.set("#fanta", { scale: 2, opacity: 1, x: "", y: "0%" });
  gsap.set("#leaf", { scale: 1, opacity: 0, x: "0%", y: "100%" });
  gsap.to("#fanta", {
    scale: 1,
    opacity: 1,
    duration: 2,
    y: "0%",
    ease: "power2.out",
  });
  gsap.to("#leaf", {
    scale: 1,
    opacity: 1,
    duration: 2,
    x: "10%",
    y: "0%",
    ease: "power2.out",
  });

  gsap.fromTo(
    "#dockerText",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 4,
      ease: "power2.out",
    }
  );

  // hideGoContent(); // Hide Go content when Docker is clicked
}

function hideGoContent() {
  gsap.to(".two", {
    opacity: 0,
    duration: 2,
    // onComplete: animateGo // Call animateGo function after hiding Go content
  });
}

function animateGo() {
  gsap.to("#fanta", {
    opacity: 0,
    scale: 2,
    duration: 2,
  });
  gsap.to("#dockerText", {
    opacity: 1,
    duration: 2,
  });
  gsap.to(".two", { opacity: 1, display: "flex" });
  gsap.to(".two-two", { opacity: 1, display: "flex" });
  gsap.to(".one", { opacity: 0, display: "none" });
  gsap.to(".one-two", {
    opacity: 0,
    display: "none",
  });

  gsap.fromTo(
    "#goText",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    }
  );
}
