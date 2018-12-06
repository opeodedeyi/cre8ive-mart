function navBar() {
  //search stylings to be affected
  const nav = document.querySelector('.navbar');
  const navOverlay = document.querySelector('.navbar__overlay');

  //buttons to trigger header
  const navTrigger = document.querySelector('#expanding-navbar-icon');
  const overcancelTrigger = document.querySelector('#navbar__overlay');
  const navcloseTrigger = document.querySelector('#navbar__close');

  //navbar categories change trigger
  const categoriesTrigger = document.querySelector('#nav-categories-trigger');
  const navMenuTrigger = document.querySelector('#nav-menu-trigger');

  //navbar categories style change
  const menuNav = document.querySelector('#navbar__one');
  const categoryNav = document.querySelector('#navbar__two');



  //event listeners for information technology modal
  navTrigger.addEventListener('click', () => {
    nav.classList.toggle('navbar-expanded');
    navOverlay.style.display = "block";
  });

  overcancelTrigger.addEventListener('click', () => {
    nav.classList.toggle('navbar-expanded');
    navOverlay.style.display = "none";
  });

  navcloseTrigger.addEventListener('click', () => {
    nav.classList.toggle('navbar-expanded');
    navOverlay.style.display = "none";
  });

  categoriesTrigger.addEventListener('click', () => {
    categoryNav.style.display = "block";
    menuNav.style.display = "none";
  });

  navMenuTrigger.addEventListener('click', () => {
    categoryNav.style.display = "none";
    menuNav.style.display = "block";
  });
}

export default navBar;