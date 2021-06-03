import '../scss/app.scss';

const mobileMenu = document.getElementById('mobileMenu');
const hamburger = document.getElementById('hamburger');
const mobileMenuInner = document.getElementById('mobileMenu__inner');

let isMenuOpened = false;

function handleMenuClick() {
  isMenuOpened = !isMenuOpened;

  if (isMenuOpened) {
    mobileMenu.classList.add('mobileMenuActive');
  } else {
    mobileMenu.classList.remove('mobileMenuActive');
  }
}

hamburger.addEventListener('click', handleMenuClick);
mobileMenuInner.addEventListener('click', handleMenuClick);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
