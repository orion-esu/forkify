import icons from 'url:../../img/icons.svg';
import View from './views';

class PreviewView extends View {
  _parentEl = '';

  #generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
        <a class="preview__link ${
          this.returnData.id === id ? 'preview__link--active' : ''
        }" href="#${this.returnData.id}">
        <figure class="preview__fig">
            <img src="${this.returnData.image}" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${this.returnData.title}</h4>
            <p class="preview__publisher">${this.returnData.publisher}</p>
           
            <div class="recipe__user-generated ${
              this.returnData.key ? '' : 'hidden'
            }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
        </div>
        </a>
    </li>
    `;
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new PreviewView();
