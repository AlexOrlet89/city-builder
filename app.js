// import functions and grab DOM elements

//Selector Elements
const landmarksSelection = document.getElementById('Landmarks-Selection');
const restaurantsSelection = document.getElementById('Restaurants-Selection');
const shoppingSelection = document.getElementById('Shopping-Selection');

//Elements with Images
const landmarksImg = document.getElementById('LandmarksImg');
const restaurantsImg = document.getElementById('RestaurantsImg');
const shoppingImg = document.getElementById('ShoppingImg');

//Slogan Elements
const sayingsSection = document.getElementById('Sayings-Section');
const sayingsInput = document.getElementById('sayings-input');
const sayingsButton = document.getElementById('sayings-button');
// let state

let restaurantsCount = 0;
let landmarksCount = 0;
let shoppingCount = 0;
const sayings = [];

// set event listeners <<<<<<<<<<<<<<BOOKMARK!

landmarksSelection.addEventListener('change', () => {
    const value = landmarksSelection.value;
    // console.log(value);
    landmarksCount++;
    landmarksImg.style.backgroundImage = `url("./assets/Landmarks/${value}.png")`;
    // update DOM to reflect the new state

});

restaurantsSelection.addEventListener('change', () => {
    const value = restaurantsSelection.value;
    // console.log(value);
    restaurantsCount++;
    restaurantsImg.style.backgroundImage = `url("./assets/restaurants/${value}.png")`;
    // update DOM to reflect the new state

});

shoppingSelection.addEventListener('change', () => {
    const value = shoppingSelection.value;
    // console.log(value);
    shoppingCount++;
    shoppingImg.style.backgroundImage = `url("./assets/shopping/${value}.png")`;
    // update DOM to reflect the new state

});

  // get user input
  // use user input to update state 
