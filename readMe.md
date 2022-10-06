Pseudocode for QwikCooks

Title & Description:
Our app is called QwikCooks.  It’s target demographic is lower to middle income citizens (i.e., college students, and people groups 18-35 yrs. old).  Typically members of this demographic are “on the go”.  They increasingly spend less time preparing meals yet because of the high cost of dining out they are searching for a solution that provides fast, affordable and healthy options for at-home meal preparation.  

Our app will open with a 10-second video that displays a variety of dishes.  After the short video, the UI will then fade into the landing page which will contain a header, navbar, and a highly visible “Select Meal” button.  Simplicity is the focus of the landing page.

Using the App:
As the user scrolls down, our Mission Statement will appear followed by a short bio on each member of our company in the “About Us” section.  This will be followed by the main feature.  Card will display different Ingredient Groups:

    • Fruits
    • Vegetables
    • Meats
    • Dairy
    • Spices
    • Condiments

User will select any number of ingredients from checkboxes - these represent groceries he/she may have in the refrigerator, cupboard, etc.  User will then click a “Get Recipe” Button which will display recipes showing what dishes can be prepared along with other relevant information (calories, etc.).

Then, User has the option to select only dishes for meals belonging to the Appetizer, Entree, or Dessert Group by clicking on the appropriate button for each category.

Languages & Frameworks:
Developers used Bootstrap and CSS to create <divs> and <buttons>.  Recipe cards are displayed through DOM manipulation and an Event Listener using JavaScript and jQuery.  All ingredients are stored in arrays and declared in specific variables.  Recipes are stored in an array of objects.  

A function which includes for loops and condition statements pulls values from the respective array (depending on ingredient selected) and matches those ingredients in their recipe.  These ingredients are stored in an array and compared to the data that contains some of those ingredients.  If there is a significant match of ingredients, then the recipe choices will display in the UI.

Our #1 focus is functionality.  Secondly, we intend on creating a design that is intuitive and easy to use  thus ensuring a pleasing and enjoyable user experience.
