import icons from 'url:../../img/icons.svg';
import View from './views';
import previewView from './previewView';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'Recipe not found, try another .';

  //   #generateMarkup() {
  //     return this.returnData.map(this.#generateMarkupPreview).join('');
  //   }

  //   #generateMarkupPreview(result) {
  //     const id = window.location.hash.slice(1);

  //     return `
  //     <li class="preview">
  //         <a class="preview__link ${
  //           result.id === id ? 'preview__link--active' : ''
  //         }" href="#${result.id}">
  //         <figure class="preview__fig">
  //             <img src="${result.image}" alt="Test" />
  //         </figure>
  //         <div class="preview__data">
  //             <h4 class="preview__title">${result.title}</h4>
  //             <p class="preview__publisher">${result.publisher}</p>

  //         </div>
  //         </a>
  //     </li>
  // `;
  //   }

  #generateMarkup() {
    return this.returnData
      .map(result => previewView.render(result, false))
      .join('');
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new ResultsView();
