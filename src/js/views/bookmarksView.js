import icons from 'url:../../img/icons.svg';
import View from './views';
import previewView from './previewView';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'Bookmarks not found. Try adding a recipe to bookmark .';

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

  addHandler(handler) {
    window.addEventListener('load', handler);
  }

  #generateMarkup() {
    return this.returnData
      .map(bookmark => previewView.render(bookmark, false))
      .join(''); //render method returns the markup as a string
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new BookmarksView();
