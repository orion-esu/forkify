import View from './views';
import icons from 'url:../../img/icons.svg';
import Fraction from '@mathematics/fraction';

class recipeViews extends View {
  _parentEl = document.querySelector('.recipe');
  _errorMessage = "Recipe isn't found, try another one .";
  #successMessage;

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;

      const updateTo = +btn.dataset.updateTo;
      if (updateTo < 1) return;

      handler(updateTo);
    });
  }

  addHandlerBookmark(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  #generateMarkup() {
    return `
    <figure class="recipe__fig">
      <img src="${this.returnData.image}" alt="${
      this.returnData.title
    }" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.returnData.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this.returnData.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this.returnData.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${
            this.returnData.servings - 1
          }">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${
            this.returnData.servings + 1
          }">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${
        this.returnData.key ? '' : 'hidden'
      }">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      this.returnData.bookmarked ? '-fill' : ''
    }"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.returnData.ingredients
          .map(this.#generateMarkupIngredient)
          .join('')}
      </ul>
      <p class="recipe__ingredient--totalCalories">Total calories: ${
        this.returnData.totalCalories
      }</p>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this.returnData.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.returnData.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
  }

  #generateMarkupIngredient(ing) {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${new Fraction(ing.quantity)}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
        <span class="recipe__ingredient--calories">
          ${
            ing.calories !== undefined || NaN
              ? `- contains ${ing.calories} calories`
              : ''
          }
        </span>
      </div>
      
    </li>
  `;
  }

  get getMarkup() {
    return this.#generateMarkup();
  }
}

export default new recipeViews();
