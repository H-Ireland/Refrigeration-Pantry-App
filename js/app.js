// ------------------------------------------------------------------------------------------------
// This code is from W3 Schools and is applied to navbar

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------------
// These arrays were only used in development stage of project.  They may be utilized in a future iteration of app.

let fruitArr = ['apples', 'oranges', 'pears', 'bananas', 'strawberries', 'pineapple', 'grapes', 'watermelon', 'mango'];
let vegArr = ['lettuce', 'carrots', 'cucumbers', 'cabbage', 'bell peppers', 'onions', 'spinach', 'broccoli', 'avocados', 'celery',
    'tomatoes'];
let breadArr = ['bagels', 'tortillas', 'white bread', 'wheat bread', 'pancake mix', 'cake mix', 'graham crackers'];
let dairyArr = ['milk', 'swiss cheese', 'american cheese', 'mozzarella', 'yogurt', 'eggs', 'cream cheese', 'ice cream', 'whipped cream'];
let carbArr = ['potatoes', 'pasta', 'rice'];
let meatArr = ['chicken', 'turkey', 'roast beef', 'steak', 'pork chops', 'bacon', 'sausage', 'ham', 'pastrami', 'tuna', 'talapia', 'shrimp'];
let spiceArr = ['salt', 'black pepper', 'sugar', 'onion powder', 'garlic salt', 'chili powder', 'basil', 'cinnamon']
let condArr = ['mustard', 'ketchup', 'mayonnaise', 'hot sauce', 'salsa', 'butter', 'olive oil', 'nuts', 'ranch dressing', 'chocolate syrup'];

//-------------------------------------------------------------------------------------------------------------------------------------
// Initializes the array representing all ingredients chosen/selected by user. 
let chosenIng = [];

// recipeObj: array of objects storing the name of meal/dish along with ingredients needed for each recipe
const recipeObj = [
    {
        dish: "Club Sandwich",
        ingredients: ['wheat bread', 'white bread', 'ham', 'turkey', 'roast beef', 'pastrami', 'bacon', 'lettuce', 'tomatoes', 'mayonnaise', 'mustard'],
        type: 'Entree',
        vegan: false,
        calories: 800,
        prepTime: "10 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/clubSandwich.png',
    },
    {
        dish: 'Grilled Ham & Cheese Sandwich',
        ingredients: ['wheat bread', 'white bread', 'ham', 'american cheese', 'swiss cheese', 'mustard'],
        type: 'Entree',
        vegan: false,
        calories: 800,
        prepTime: "5 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/clubSandwichOrig.png',
    },
    {
        dish: "Chicken Quesadilla",
        ingredients: ['chicken', 'tortillas', 'american cheese', 'swiss cheese', 'salsa'],
        type: 'Entree',
        vegan: false,
        calories: 1000,
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        src: './images/foodImgs/chickenQuesadilla.jpg',
    },
    {
        dish: 'Shish Kabobs',
        ingredients: ['chicken', 'steak', 'pork chops', 'turkey', 'bell peppers', 'onions', 'salt', 'black pepper'],
        type: 'Entree',
        vegan: false,
        calories: 1200,
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        src: './images/foodImgs/shishKabobs.jpg',
    },
    {
        dish: 'Spinach Omelette',
        ingredients: ['eggs', 'salt', 'black pepper', 'spinach', 'swiss cheese'],
        type: 'Entree',
        vegan: true,
        calories: 400,
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        src: './images/foodImgs/spinachOmelette.jpg',
    },
    {
        dish: 'Seafood Fettucine',
        ingredients: ['pasta', 'shrimp', 'talapia', 'broccoli', 'mozzarella', 'butter', 'garlic salt'],
        type: 'Entree',
        vegan: false,
        calories: 1100,
        prepTime: "10 minutes",
        cookTime: "25 minutes",
        src: './images/foodImgs/seafoodFettucine.jpg',
    },
    {
        dish: 'Chicken Soup',
        ingredients: ['chicken', 'basil', 'butter', 'salt', 'rice', 'celery', 'carrots', 'onions', 'potatoes'],
        type: 'Appetizer',
        vegan: false,
        calories: 450,
        prepTime: "8 minutes",
        cookTime: "12 minutes",
        src: './images/foodImgs/soup.jpg',
    },
    {
        dish: 'Chef Salad',
        ingredients: ['lettuce', 'tomatoes', 'bell peppers', 'cucumbers', 'carrots', 'avocados', 'celery', 'mayonnaise', 'olive oil', 'nuts', 'ranch dressing'],
        type: 'Appetizer',
        vegan: true,
        calories: 250,
        prepTime: "5 minutes",
        cookTime: "5 minutes",
        src: './images/foodImgs/chefSalad.jpg',
    },
    {
        dish: 'Buffalo Chicken Tenders',
        ingredients: ['chicken', 'hot sauce', 'butter', 'salt'],
        type: 'Appetizer',
        vegan: false,
        calories: 600,
        prepTime: "5 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/chicken2.jpg',
    },
    {
        dish: 'Breakfast Bagel Sandwich',
        ingredients: ['bagels', 'eggs', 'bacon', 'sausage', 'american cheese'],
        type: 'Appetizer',
        vegan: false,
        calories: 350,
        prepTime: "5 minutes",
        cookTime: "8 minutes",
        src: './images/foodImgs/bagels.png',
    },
    {
        dish: 'Potato Salad',
        ingredients: ['potatoes', 'mayonnaise', 'eggs', 'celery', 'onions', 'salt', 'black pepper'],
        type: 'Appetizer',
        vegan: true,
        calories: 250,
        prepTime: "8 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/caprese.jpg',
    },
    {
        dish: 'Macaroni Salad',
        ingredients: ['pasta', 'mayonnaise', 'mustard', 'eggs', 'celery', 'onions', 'salt', 'black pepper'],
        type: 'Appetizer',
        vegan: true,
        calories: 250,
        prepTime: "8 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/macaroniSalad.jpg',
    },
    {
        dish: 'Fruit Salad',
        ingredients: ['apples', 'pears', 'bananas', 'strawberries', 'grapes', 'mango', 'pineapple', 'yogurt'],
        type: 'Appetizer',
        vegan: true,
        calories: 250,
        prepTime: "5 minutes",
        cookTime: "5 minutes",
        src: './images/foodImgs/fruitSalad.jpg',
    },
    {
        dish: 'Apple Pie',
        ingredients: ['apples', 'graham crackers', 'cinnamon', 'sugar'],
        type: 'Dessert',
        vegan: true,
        calories: 500,
        prepTime: "8 minutes",
        cookTime: "20 minutes",
        src: './images/foodImgs/applePie.jpg',
    },
    {
        dish: 'Chocolate Cake',
        ingredients: ['cake mix', 'chocolate syrup', 'sugar'],
        type: 'Dessert',
        vegan: true,
        calories: 500,
        prepTime: "8 minutes",
        cookTime: "15 minutes",
        src: './images/foodImgs/chocolateCake.jpg',
    },
    {
        dish: 'Cheesecake',
        ingredients: ['cream cheese', 'graham crackers', 'milk', 'sugar'],
        type: 'Dessert',
        vegan: true,
        calories: 800,
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        src: './images/foodImgs/cheeseCake.jpg',
    },
    {
        dish: 'Banana Split',
        ingredients: ['ice cream', 'bananas', 'chocolate syrup', 'nuts', 'whipped cream'],
        type: 'Dessert',
        vegan: true,
        calories: 800,
        prepTime: "8 minutes",
        cookTime: "10 minutes",
        src: './images/foodImgs/bananaSplit.jpg',
    },
    {
        dish: 'Yogurt Parfait',
        ingredients: ['yogurt', 'bananas', 'strawberries', 'nuts'],
        type: 'Dessert',
        vegan: true,
        calories: 300,
        prepTime: "3 minutes",
        cookTime: "3 minutes",
        src: './images/foodImgs/yogurtParfait.jpg',
    }
];
// ---------------------------------------------------------------------------------------------------------------------------------
// Main Recipe Maker Function:

const recipeMaker = (arr) => {
    let matchingRecipes = []

    recipeObj.map(recipe => {
        arr.map(item => recipe.ingredients.includes(item) ? matchingRecipes.push(recipe) : null);
    })
}

let ings = document.getElementsByName("ingredients");
let display = document.getElementById("display");
let getRecipeBtn = document.getElementById("getRecipeBtn");
let choices = document.getElementById("choices");
let clearBtn = document.getElementById("clearBtn");
let goBackBtn = document.getElementById("goBackBtn");
let allMealsBtn = document.getElementById("allMealsBtn");
let apptzBtn = document.getElementById("apptzBtn");
let entreeBtn = document.getElementById("entreeBtn");
let dessertBtn = document.getElementById("dessertBtn");
let gotVeganBtn = document.getElementById("gotVeganBtn");

// -------------------------------------------------------------------------------------------------------------------------------------
// cardMaker function which dynamically creates & displays Recipe Cards based on user's choice of ingredients

function cardMaker(arr) {
    let deck = document.getElementById("deck")
    deck.innerHTML = '' 
    arr.map(recipeObj => {

        let card = document.createElement("div");
        let img = document.createElement('img');
        let body = document.createElement('div');
        let title = document.createElement("h4");
        let calories = document.createElement("h5");
        let ingredientsLabel = document.createElement('p');
        let recipeLabel = document.createElement('p');
        let prepTimeLabel = document.createElement("p");
        let cookTimeLabel = document.createElement("p");
        let cardDiv = document.createElement('div');
        let type = document.createElement("medium");
        let footer = document.createElement("div");

        img.src = recipeObj.src;
        cardDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");

        card.setAttribute("class", "card mb-3")
        img.setAttribute("class", "card-img-top")
        body.setAttribute("class", "card-body")
        title.setAttribute("class", "card-title bold")
        ingredientsLabel.setAttribute("class", "card-text")
        prepTimeLabel.setAttribute("class", "card-text")
        cookTimeLabel.setAttribute("class", "card-text")
        type.setAttribute("class", "bold")
        footer.setAttribute("class", "card-footer")

        recipeObj.type === 'Appetizer' ? (footer.style.background = 'green', footer.style.color = 'white') :
            recipeObj.type === 'Entree' ? (footer.style.background = 'red', footer.style.color = 'white') :
                footer.style.background = '#ffc107';

        // ----------------------------------------------------------------------------------------------------------------------------
        title.innerHTML = `<em>${recipeObj.dish}</em>`
        calories.innerHTML = `${"<b>Calories: </b>"}` + recipeObj.calories
        ingredientsLabel.innerHTML = `${"<b>Ingredients: </b>"}` + recipeObj.ingredients.join(", ")
        prepTimeLabel.innerHTML = `${"<b>Prep Time: </b>"}` + recipeObj.prepTime
        cookTimeLabel.innerHTML = `${"<b>Cook Time: </b>"}` + recipeObj.cookTime
        recipeLabel.innerHTML = `${"<b>Recipe: </b>"}` + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad facere enim! Earum, asperiores architecto praesentium."
        type.innerHTML = `<em>${recipeObj.type}</em>`

        deck.appendChild(card)
        cardDiv.appendChild(card)
        deck.appendChild(cardDiv)
        card.appendChild(img)
        card.appendChild(body)
        body.appendChild(title)
        body.appendChild(calories)
        body.appendChild(ingredientsLabel)
        body.appendChild(prepTimeLabel)
        body.appendChild(cookTimeLabel)
        body.appendChild(recipeLabel)
        card.appendChild(footer)
        footer.appendChild(type)
    })

    display.style.display = "block"   
}

//--------------------------------------------------------------------------------------------------------------------------------
// Go Back Button takes user back to the UI displaying checkboxes

goBackBtn.addEventListener("click", () => {

    for (let i = 0; i < ings.length; i++) {
        ings[i].checked = ings[i].defaultChecked
    }

    display.style.display = "none"
    choices.style.display = "contents"
    goBackBtn.style.visibility = "hidden"
    matchingRecipes = []
    onlyApptz = []
    onlyEntrees = []
    onlyDesserts = []
    onlyVegan = []
    mininav.style.visibility = "hidden"
})
//--------------------------------------------------------------------------------------------------------------------------------
// Clear Fields Button clears all selected checkboxes

clearBtn.addEventListener("click", () => {
    for (let i = 0; i < ings.length; i++) {
        ings[i].checked = ings[i].defaultChecked
    }
});

document.getElementById("body").onload = function () { clearFields() };
const clearFields = () => {

    for (let i = 0; i < ings.length; i++) {
        ings[i].checked = ings[i].defaultChecked
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------
// The mininav displays button choices for 3 categories: Appetizers, Entrees, and Desserts

let mininav = document.getElementById("mininav")
let matchingRecipes = []
let onlyApptz = []
let onlyEntrees = []
let onlyDesserts = []
let onlyVegan = []
let count = 0;
//-------------------------------------------------------------------------------------------------------------------------
// Event listener for Get Recipe Button

getRecipeBtn.addEventListener("click", () => {

    matchingRecipes = [] ///added
    chosenIng = [] // added     

    for (let i = 0; i < ings.length; i++) {
        if (ings[i].checked) {
            chosenIng.push(ings[i].value)
        }
    }
    
    //---------------------------------------------------------------------------------------------------------------------
    // This code maps through the recipeObj array to select out dishes (using ternary statements) that belong to one of the 3 main categories of Appetizer, Entree, or Dessert

    recipeObj.map(recipe => {

        chosenIng.map(item => recipe.ingredients.includes(item) ? count++ : null);

        count > 1 && recipe.type === "Appetizer" ? onlyApptz.push(recipe) :
            count > 1 && recipe.type === "Entree" ? onlyEntrees.push(recipe) :
                count > 1 && recipe.type === "Dessert" ? onlyDesserts.push(recipe) :
                    null;

        matchingRecipes.concat(onlyApptz, onlyEntrees, onlyDesserts)
        count = 0
    })
    matchingRecipes = matchingRecipes.concat(onlyApptz, onlyEntrees, onlyDesserts)


    cardMaker(matchingRecipes)

    choices.style.display = "none"
    mininav.style.visibility = "visible"
    goBackBtn.style.visibility = "visible"

    //----------------------------------------------------------------------------------------------------------------   
    // Alert box in the event the User has not made any selections   

    !chosenIng.length > 0 ? (choices.style.display = "contents",
        display.style.display = "none",
        goBackBtn.style.visibility = "hidden",
        mininav.style.visibility = "hidden",
        alert("PLEASE MAKE A SELECTION.  THANK YOU!")) : null;
})
//-----------------------------------------------------------------------------------------------------------------
// Event listeners to display recipes by categories  

apptzBtn.addEventListener("click", () => {
    cardMaker(onlyApptz)   
})

entreeBtn.addEventListener("click", () => {
    cardMaker(onlyEntrees)   
})

dessertBtn.addEventListener("click", () => {
    cardMaker(onlyDesserts)   
})

allMealsBtn.addEventListener("click", () => {
    cardMaker(matchingRecipes)    
})

gotVeganBtn.addEventListener("click", () => {
    matchingRecipes.map(recipe => recipe.vegan === true ? (onlyVegan.push(recipe), cardMaker(onlyVegan)) : null)
    // onlyVegan = []
})
