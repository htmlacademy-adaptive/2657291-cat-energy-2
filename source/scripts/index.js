const navElement = document.querySelector('.navigation');
if (navElement) {
  const navButton = navElement.querySelector('.navigation__toggle');

  navElement.classList.add('navigation--close');
  navElement.classList.remove('navigation--nojs');

  navButton.addEventListener('click', () => {

    if (navElement.classList.contains('navigation--close')) {
      navElement.classList.remove('navigation--close');
      navElement.classList.add('navigation--open');

    } else {
      navElement.classList.remove('navigation--open');
      navElement.classList.add('navigation--close');
    }
  });
}
/* const headerToggle = document.querySelector('.navigation__toggle');
const navList = document.querySelector('.navigation__list');

if (headerToggle && navList) {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('navigation__toggle--active');
    navList.classList.toggle('navigation__list--close');
  });
}*/
/* в этот файл добавляет скрипты*/
