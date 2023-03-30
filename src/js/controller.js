import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeViews from './views/recipeViews.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import { getJSON } from './helper.js';
import homeView from './views/homeView.js';
// import recipeViews from './views/recipeViews.js';

// https://forkify-api.herokuapp.com/v2

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeViews.renderSpinner();

    // 0. Update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    // 0. Update bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 1.) Load Recipe
    await model.loadRecipe(id);

    // Getingredients
    await model.getIngredient(model.state.recipe);

    // 2.) Render Recipie
    recipeViews.render(model.state.recipe);

    // controlServings(8);
  } catch (error) {
    recipeViews.renderError();
    console.error(error);
  }
};
// showRecipie();

const controlSearchResults = async function (query) {
  try {
    // 1. Get search query
    query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render search result
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // 4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (gotoPage) {
  // 3. Render NEW search result
  resultsView.render(model.getSearchResultPage(gotoPage));

  // 4. Render NEW initial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {

  // Update recipie servings in state
  model.updateServings(newServings);

  // Update recipie view
  // recipeViews.render(model.state.recipe);
  recipeViews.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1.) Add / remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2.) Update recpie view
  recipeViews.update(model.state.recipe);

  // 3.) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlHome = function () {
  if (window.location.hash !== '') {
    window.location.hash = '';
    location.reload();
  }
};

const controlUpload = async function (newRecipe) {
  try {
    // render spinner
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    // getIngredient(state.recipe);
    await model.getIngredient(model.state.recipe);

    // Render recipe
    recipeViews.render(model.state.recipe);

    // Success message
    addRecipeView.renderSuccessMessage();

    // Rerender bookmarks
    bookmarksView.render(model.state.bookmarks);

    // 0. Update bookmarks view
    bookmarksView.update(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarksView.addHandler(controlBookmarks);
  recipeViews.addHandlerRender(controlRecipes);
  recipeViews.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeViews.addHandlerBookmark(controlAddBookmark);
  homeView.addHandlerHome(controlHome);
  addRecipeView.addHandlerUpload(controlUpload);
};
init();

// [('hashchange', 'load')].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );
// window.addEventListener('hashchange', showRecipie);
// window.addEventListener('load', showRecipie);

// Model view controller or presenter, flux
// Business Logic - code that actually solves the business problem. Logic related to solve the problem that the business set out to solve
// State - stores data about the application in the browser. Like data fetched from api, or input from user or page currently being viewed by user. UI should be in sync with state
// HTTP Library - responsibe for making http requests to the server
// Application Logic(ROuter) - implementation of the application itself. Doing something in the application
// PResentation Logic (UI layer) - code that is concerend about the physical part of the application

// MVC - Model View Controller
/* 
  It contains three parts. The model, view and controller.
  The view is for the presentation logic
  The Model is for the business logic and state. it also contains the http library
  THe controller is for the application logic and it acts as a bridge between the model and views. The contaoller can also be said to dispatch task between the model and the view. The controller is responsible for importing and calling functions
*/
