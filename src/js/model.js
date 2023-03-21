import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config';
import { AJAX } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    console.error(`${error} 2.`);
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
        ...(rec.key && { key: rec.key }),
      };
    });

    state.search.page = 1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * RES_PER_PAGE; //0;
  const end = page * RES_PER_PAGE; //10

  return state.search.results.slice(start, end);
};

export const updateServings = function (newservings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newservings) / state.recipe.servings;

    // nQT = (oQT * nServ) / oServ;
  });

  state.recipe.servings = newservings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // add bookmark
  state.bookmarks.push(recipe);

  // mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // persist bookmarks
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete Boomark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as not bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // persist bookmarks
  persistBookmarks();
};

const retrieveData = function () {
  const data = localStorage.getItem('bookmarks');
  if (data) state.bookmarks = JSON.parse(data);
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',');

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format.'
          );

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      servings: +newRecipe.servings,
      cooking_time: +newRecipe.cookingTime,
      title: newRecipe.title,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};

retrieveData();

// LIstening for events in mvc using the publisher subscriber pattern. Events should be handled in the controller and should be listened for in the view otherwise DOM elements would be needed in the controller which would be bad practice.

// The publisher knows when to react and the subscriber knows what to do when the event is triggered(code that wants to react).

// To implement this, we need to pass in the subscriber function as an argument for the publisher. When the program loads an init function is called which then calls the publisher from the view. As we call the publisher, we pass in the subscriber as an argument
