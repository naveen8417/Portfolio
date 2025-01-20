var typed2 = new Typed('#typed2', {
    strings: ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    fadeOut: true,
    loop: true
  });
    

document.addEventListener('DOMContentLoaded', function(){
    const humburger = document.querySelector(".hamburger");
    const navlink = document.querySelector(".nav-links");

    humburger.addEventListener('click', ()=>{
        humburger.classList.toggle("active");
        navlink.classList.toggle("active");
    })


    const skillsection = document.querySelector(".skill-section");
const skillbar = document.querySelectorAll(".skill-progress");
const percentNumber = document.querySelectorAll(".skill-number");

let skillAnimate = false;

function animateSkills() {
    if (skillAnimate) return;

    skillbar.forEach((bar, index) => {
        const percent = parseInt(bar.getAttribute('data-percent'));
        bar.style.width = percent + '%';

        let currentPercent = 0;
        const updatePercent = setInterval(() => {
            if (currentPercent < percent) {
                currentPercent++;
                percentNumber[index].textContent = currentPercent;
            } else {
                clearInterval(updatePercent);
            }
        }, 20);
    });
    skillAnimate = true;
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

  skillObserver.observe(skillsection);


  const statssection = document.querySelector(".state-section");
const counter = document.querySelectorAll(".state-number");

let statsAnimate = false;

function animateStats() {
    if (statsAnimate) return;

    counter.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 16);

        let currentCount = 0;
        const updateCount = () => {
            if (currentCount < target) {
                currentCount += increment;
                counter.textContent = Math.floor(currentCount);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    });
    statsAnimate = true;
}

const stateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            stateObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

stateObserver.observe(statssection);


    AOS.init();

})

const skillbox = document.querySelectorAll(".frontend");

skillbox.forEach((box) => {
    box.addEventListener('mouseover', (event) => { 
        event.target.classList.toggle("active");
    });

    box.addEventListener('mouseout', (event) => { 
        event.target.classList.toggle("active");
    });
});


// Get all dots
// Select all dots
const dots = document.querySelectorAll('.dot');

// Add hover effect to each dot
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dot.target.classList.toggle('active'); // Add the active class on hover
    });
});

const projectbox = document.querySelectorAll(".info-item");

projectbox.forEach((box) => {
    box.addEventListener('mouseover', (event) => { 
        event.target.classList.toggle("active");
    });

    box.addEventListener('mouseout', (event) => { 
        event.target.classList.toggle("active");
    });
});

const projectbox1 = document.querySelectorAll(".state-item");

projectbox1.forEach((box) => {
    box.addEventListener('mouseover', (event) => { 
        event.target.classList.toggle("active");
    });

    box.addEventListener('mouseout', (event) => { 
        event.target.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".personel-circle");

    circles.forEach(circle => {
        const percentage = parseInt(circle.getAttribute("data-percentage"));
        const percentageText = circle.querySelector(".personel-percentage-text");
        let progress = 0;

        const animateProgress = () => {
            progress++;
            const angle = (progress / 100) * 360;
            circle.style.background = `conic-gradient(
                orange 0deg,
                orange ${angle}deg,
                #e0e0e0 ${angle}deg
            )`;
            percentageText.textContent = `${progress}%`;

            if (progress < percentage) {
                requestAnimationFrame(animateProgress);
            }
        };

        animateProgress();
    });
});


const projectitems = document.querySelectorAll(".project-item");

projectitems.forEach((item)=>{
    item.addEventListener('mouseover', (event)=>{
        event.target.classList.toggle("active");
    });
     
    item.addEventListener('mouseout', (event)=>{
        event.target.classList.toggle("active");
    });
})
