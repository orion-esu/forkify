import View from './views';

class recipeViews extends View {
  _parentEl = document.querySelector('.header');

  addHandlerHome(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.header__logo');
      if (!btn) return;
      handler();
    });
  }
}

export default new recipeViews();
