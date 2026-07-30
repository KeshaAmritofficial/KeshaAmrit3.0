/* ==========================================
   FAQ Accordion
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){
                other.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/* ==========================================
   Fade Animation on Scroll
========================================== */

const fadeElements = document.querySelectorAll(
".ingredient-card,.why-card,.gallery-item,.compare-card,.review-card,.trust-card,.benefit-card,.contact-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");
            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

fadeElements.forEach(el=>observer.observe(el));


/* ==========================================
   Header Shadow on Scroll
========================================== */

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});


/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================================
   Hero Bottle Mouse Effect
========================================== */

const bottle=document.querySelector(".hero-bottle");

document.addEventListener("mousemove",(e)=>{

if(!bottle) return;

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

bottle.style.transform=`translate(${x}px,${y}px)`;

});


/* ==========================================
   Lazy Load Images
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});


/* ==========================================
   Page Loaded
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log("✅ KeshaAmrit Website Loaded");

});