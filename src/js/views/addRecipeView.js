import icons from 'url:../../img/icons.svg';
import View from './views';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _successMessage = 'Recipe successfully uploaded';
  #window = document.querySelector('.add-recipe-window');
  #overlay = document.querySelector('.overlay');
  #btnClose = document.querySelector('.btn--close-modal');
  #btnOpen = document.querySelector('.nav__btn--add-recipe');

  constructor() {
    super();
    this.#addHandlerShowWindow();
    this.#addHandlerHideWindow();
  }

  toggleWindow() {
    this.#overlay.classList.toggle('hidden');
    this.#window.classList.toggle('hidden');
  }

  #addHandlerShowWindow() {
    this.#btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  #addHandlerHideWindow() {
    this.#btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  #generateMarkup() {}

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new AddRecipeView();
