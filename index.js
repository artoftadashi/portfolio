
//art page parallax effect.

const gallery = document.querySelector('.gallery');
const track = document.querySelector('.gallery-track');
const cards = document.querySelectorAll('.card');
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;
const lerp = (start,end,t) => start * (1-t) + end * t;

function updateScroll() {
  startY = lerp(startY,endY,easing);
  gallery.style.height = `${track.clientHeight}px`;
  track.style.transform = `translateY(-${startY}px)`;
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY; 
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.card-image-wrapper');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const {top} = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load',updateScroll,false);
window.addEventListener('scroll',init,false);
window.addEventListener('resize',updateScroll,false);

//animation on scroll
window.addEventListener('scroll', () => {
  let page = this;
  let pageTop = this.scrollY;
  let pageHeight = this.outerHeight / 2 ;
  let mouse = document.querySelector('.scroll-obj');

  let project = document.querySelectorAll('.add-anim');
    project.forEach( frame => {
    let frameTop = frame.offsetTop;
    let frameHeight = frame.offsetHeight;
    
    if ( pageTop  >= frameTop - pageHeight) {
      frame.classList.add('section-anim');
      setTimeout(() => {
        frame.style.opacity = "1";
      }, 1000);
    }
  });
  $('.scroll-obj').addClass('remove-scroll');
  setTimeout(() => {
    mouse.style.display = 'none';
  }, 500);
});

//spotlight effect

const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = "radial-gradient(circle at "+ clientX +"px "+ clientY +"px, #101D3D 10px, #00000000 500px)";
}

document.addEventListener("mousemove", handleMouseMove)


//copyright date
const today = new Date().getFullYear();
document.querySelector(".copyright-date").innerText = (" "+today);

$( document ).ready(function() {
  let pr= document.querySelector('.projects')
  pr.classList.add('section-anim');
  setTimeout(() => {
    pr.style.opacity = "1";
  }, 1000);
});