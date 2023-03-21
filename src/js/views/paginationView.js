import icons from 'url:../../img/icons.svg';
import View from './views';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  #generateMarkup() {
    const curPage = this.returnData.page;
    const numPags = Math.ceil(
      this.returnData.results.length / this.returnData.resultPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPags > 1) {
      return this.#generateMarkupButton(curPage, 'next');
    }

    // last
    if (curPage === numPags && numPags > 1) {
      return this.#generateMarkupButton(curPage, 'prev');
    }

    // others
    if (curPage < numPags) {
      return (
        this.#generateMarkupButton(curPage, 'next') +
        this.#generateMarkupButton(curPage, 'prev')
      );
    }
  }

  #generateMarkupButton(page, type) {
    return `
      <button data-goto="${
        type === 'next' ? page + 1 : page - 1
      }" class="btn--inline pagination__btn--${type}">
          <span>Page ${type === 'next' ? page + 1 : page - 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      type === 'next' ? 'right' : 'left'
    }"></use>
          </svg>
      </button>
    `;
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new PaginationView();
