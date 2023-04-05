import { mark } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg';

export default class View {
  #data;

  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} render If false, creates markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render is false
   * @this {Object} View instance
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this.#data = data;
    const markup = this.getMarkup;

    if (!render) return markup;

    this.#clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);

    this.update(data);
  }

  get returnData() {
    return this.#data;
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    this.#data = data;
    const newMarkup = this.getMarkup;

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentEl.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // console.log(curEl, newEl.isEqualNode(curEl)); // Checking if the element content in the new dom is the same as the current dom

      // Update changes text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // curEl = element already on the page
        // console.log(curEl, newEl.isEqualNode(curEl));

        if (newEl.textContent.includes('contains NaN')) return;
        curEl.textContent = newEl.textContent;
      }

      // Update changed attributes
      if (!newEl.isEqualNode(curEl)) {
        // console.log(newEl.attributes); // it returns the attributes of all the elements that have changed.

        Array.from(newEl.attributes).forEach(attr => {
          //replace attributes in the current element with attributes coming from the new element
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  #clear() {
    this._parentEl.innerHTML = ' ';
  }

  renderSpinner() {
    const markup = `
              <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
            `;

    this.#clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;

    this.#clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSuccessMessage(message = this._successMessage) {
    const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;

    this.#clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
