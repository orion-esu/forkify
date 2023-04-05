import { async } from 'regenerator-runtime';
import {
  API_URL,
  RES_PER_PAGE,
  KEY,
  KEY_ORIONESU,
  KEY_ORION2001,
  KEY_ESUGABRIEL,
  KEY__JAJA,
  KEY__PRINCE,
} from './config';
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

const windowResize = function () {
  if (window.innerWidth < 800) {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.unresponsive').classList.remove('hidden');
  } else {
    document.querySelector('.container').style.display = 'grid';
    document.querySelector('.unresponsive').classList.add('hidden');
  }
};
windowResize();

window.addEventListener('resize', windowResize);

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
    // getIngredient(state.recipe);
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
    console.error(error);
    throw error;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * RES_PER_PAGE; //0;
  const end = page * RES_PER_PAGE; //10

  state.search.totalNumOfPages = Math.ceil(
    state.search.results.length / RES_PER_PAGE
  );
  return state.search.results.slice(start, end);
};

export const updateServings = function (newservings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newservings) / state.recipe.servings;
    ing.calories = (
      (ing.calories * newservings) /
      state.recipe.servings
    ).toFixed(2);

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

const generateIngredients = function (ingredients) {
  // console.log(ingredients);
  // const obj = [];
  // ingredients.forEach((el, index) => {
  //   const buts = ingredients.filter(([description]) =>
  //     description.includes(`ingredient-${index + 1}`)
  //   );
  //   if (buts.length === 0) return;
  //   const butsMap = buts.map(([, value]) => value);
  //   obj.push(butsMap);
  // });
  // console.log(obj);
  // return obj;

  /* For one element */
  // ingredients
  //   .filter(([description]) => description.includes(`ingredient-${ingNo}`))
  //   .map(([, value]) => value);

  return ingredients.reduce((acc, _, index) => {
    const buts = ingredients
      .filter(([desc]) => desc.includes(`ingredient-${index + 1}`))
      .map(([, val]) => val);
    return buts.length > 0 ? [...acc, buts] : acc;
  }, []);
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = generateIngredients(
      Object.entries(newRecipe).filter(
        entry => entry[0].startsWith('ingredient') && entry[1] !== ''
      )
    ).map(ing => {
      if (ing.length !== 3)
        throw new Error(
          'Wrong ingredient format! Please use the correct format.'
        );
      const [quantity, unit, description] = ing;
      return { quantity: quantity ? +quantity : null, unit, description };
    });
    // const generatedIngredients = generateIngredients(filterIngredients);

    // generatedIngredients.map(ing => {
    //   if (ing.length !== 3)
    //     throw new Error(
    //       'Wrong ingredient format! Please use the correct format.'
    //     );
    //   const [quantity, unit, description] = ing;
    //   return { quantity: quantity ? +quantity : null, unit, description };
    // });

    const recipe = {
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      servings: +newRecipe.servings,
      cooking_time: +newRecipe.cookingTime,
      title: newRecipe.title,
      ingredients,
    };
    getIngredient(recipe);
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);

    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};

export const getIngredient = async function (recipe) {
  try {
    for (const ing of recipe.ingredients) {
      const data = await AJAX(
        `https://api.spoonacular.com/food/ingredients/search?apiKey=${KEY__JAJA}&query=${ing.description}`
      );
      if (data.results.length !== 0) {
        const id = data.results[0].id;
        const ingredientNutrient = await AJAX(
          `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=${KEY__JAJA}&amount=${recipe.servings}`
        );
        const nutrients = ingredientNutrient.nutrition.nutrients;

        const butIng = nutrients.filter(nutr => nutr.name === 'Calories');
        ing.calories = butIng[0].amount;
      }
    }
  } catch (error) {
    throw error;
  }
};
retrieveData();

// LIstening for events in mvc using the publisher subscriber pattern. Events should be handled in the controller and should be listened for in the view otherwise DOM elements would be needed in the controller which would be bad practice.

// The publisher knows when to react and the subscriber knows what to do when the event is triggered(code that wants to react).

// To implement this, we need to pass in the subscriber function as an argument for the publisher. When the program loads an init function is called which then calls the publisher from the view. As we call the publisher, we pass in the subscriber as an argument
