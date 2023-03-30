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

  /**
   * 
   * @returns {string} Returns a string of markup

   */
  #generateMarkup() {
    const curPage = this.returnData.page;
    const numPags = Math.ceil(
      this.returnData.results.length / this.returnData.resultPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPags > 1) {
      return (
        this.#generateTotalPages() + this.#generateMarkupButton(curPage, 'next')
      );
    }

    // last
    if (curPage === numPags && numPags > 1) {
      return (
        this.#generateTotalPages() + this.#generateMarkupButton(curPage, 'prev')
      );
    }

    // others
    if (curPage < numPags) {
      return (
        this.#generateTotalPages() +
        this.#generateMarkupButton(curPage, 'prev') +
        this.#generateMarkupButton(curPage, 'next')
      );
    }
  }

  #generateMarkupButton(page, type) {
    return `
      <button data-goto="${
        type === 'next' ? page + 1 : page - 1
      }" class="btn--inline pagination__btn--${type}">
      <svg class="search__icon">
            <use href="${icons}#icon-arrow-${
      type === 'prev' ? 'left' : ''
    }"></use>
          </svg>
          <span>Page ${type === 'next' ? page + 1 : page - 1}</span>
         
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      type === 'next' ? 'right' : ''
    }"></use>
          </svg>
      </button>
    `;
  }

  #generateTotalPages() {
    return `
      <p class="pagination__text">
        Page ${this.returnData.page} of ${this.returnData.totalNumOfPages}
      </p>
    `;
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new PaginationView();
