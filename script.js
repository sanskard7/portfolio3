function downloadResume(){
  window.open('resume.pdf');
}

/* Scroll Animation FIXED */
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 50){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});