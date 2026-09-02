(function () {
  var toggle = document.querySelector('.menu-toggle');
  var navigation = document.querySelector('.site-nav');

  if (!toggle || !navigation) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.setAttribute('data-open', 'false');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function () {
    var willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    navigation.setAttribute('data-open', String(willOpen));
    document.body.classList.toggle('menu-open', willOpen);
  });

  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
})();
