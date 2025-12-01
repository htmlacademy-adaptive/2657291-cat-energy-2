const headerToggle = document.querySelector('.navigation__toggle');
const navList = document.querySelector('.navigation__list');

if (headerToggle && navList) {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('navigation__toggle--active');
    navList.classList.toggle('navigation__list--close');
  });
}
/* в этот файл добавляет скрипты*/
