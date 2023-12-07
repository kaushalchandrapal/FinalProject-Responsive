window.addEventListener('scroll', handleScroll);

var header = document.getElementById('header-element');
var sticky = header?.offsetTop;

function handleScroll() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}