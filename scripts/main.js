const menuMobileToggle = document.querySelector('#mobileMenuToggle');
const openMenuPre = document.querySelector('#menu-overlay');

function openMenu() {
  openMenuPre.style.width = '100%';
}

function closeMenuPre() {
  openMenuPre.style.width = '0';
}

menuMobileToggle.addEventListener('click', () => {
  openMenu();
});

const closeMenu = document.querySelector('#mobileMenuClose');
closeMenu.addEventListener('click', () => {
  closeMenuPre();
  });

  const mobileMenuLinks = document.querySelectorAll('.mobile-menu li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMenuPre();
  });
}