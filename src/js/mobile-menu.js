(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// data-menu - задаємо на саме мобільне меню

// data-menu-button - задаємо на кнопку відкриття і закриття мобільного меню
// Пропоную структуру кнопки
/* <button>
  <svg>
    <use open></use>
    <use close></use>
  </svg>
</button>; */

// Більш детально можна побачити у відео Репети https://youtu.be/0QXKQXlAfO4?t=6290
