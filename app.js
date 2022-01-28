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

const reportEl = document.getElementById('report');

let restaurantsCount = 0;
let landmarksCount = 0;
let shoppingCount = 0;
const sayings = [];

// set event listeners 

landmarksSelection.addEventListener('change', () => {
    const value = landmarksSelection.value;
    // console.log(value);
    landmarksCount++;
    landmarksImg.style.backgroundImage = `url("./assets/Landmarks/${value}.png")`;
    // update DOM to reflect the new state
    console.log(landmarksCount);
});

restaurantsSelection.addEventListener('change', () => {
    const value = restaurantsSelection.value;
    // console.log(value);
    restaurantsCount++;
    restaurantsImg.style.backgroundImage = `url("./assets/restaurants/${value}.png")`;
    // update DOM to reflect the new state
    console.log(restaurantsCount);

});

shoppingSelection.addEventListener('change', () => {
    const value = shoppingSelection.value;
    // console.log(value);
    shoppingCount++;
    shoppingImg.style.backgroundImage = `url("./assets/shopping/${value}.png")`;
    // update DOM to reflect the new state
    console.log(shoppingCount);

});

function displayStats() {
    reportEl.textContent = `${landmarksCount} landmarks, ${restaurantsCount} restaurants, ${shoppingCount} shopping.`;
    console.log(displayStats);
}
displayStats();
  // get user input
  // use user input to update state 
