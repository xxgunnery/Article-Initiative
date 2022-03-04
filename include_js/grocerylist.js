console.log("Hello World, this is grocerylist.js");
console.log("hellooo");
jQuery(document).ready( 
    function() {
        //Load JSON data from file and then run an anonymous function which takes the data as a parameter
        jQuery.getJSON("crockpotdata.json", function(data) {

            //store the JSON arrays in variables
            var ingredients = data.ingredients;
            var recipes = data.recipes;

            //Initialize data storage variables outside the scope where attribute - value was retrieved
            var jsingredients = [];
            var jsrecipes = [];
            var jsingredients2 = [];
            var jsrecipes2 = [];

            //get the data for recipes
            for(i = 0; i <= recipes.length; i++) {
                //splice jsrecipes created so far and store it in another array
                if (jsrecipes.length !== 0) {
                    var spliced = jsrecipes.splice(0, jsrecipes.length);
                    jsrecipes2.push(spliced);
                }
                //if we still have a recipes array to work with
                if(i < recipes.length) {
                    var recipe = recipes[i];
                    for (var ingredient in recipe) {
                        if(ingredient !== "Name") {
                            var value = recipe[ingredient];
                            jsrecipes.push([ingredient,value]);
                        }
                    }
                }
            }
            //get the data for ingredients
            for(i = 0; i < ingredients.length; i++) {
                var ingredient = ingredients[i];
                for (var property in ingredient) {
                    var value = ingredient[property];
                    jsingredients.push(value);
                }
            }
            //splice the ingredients array and store it in another array
            while(jsingredients.length) {
                var spliced = jsingredients.splice(0,3);
                jsingredients2.push(spliced);
            }

            //loop over the recipes array, take the ingredients and add to the total ingredients quantity
            for(i = 0; i < jsrecipes2.length; i++) {
                var currentrecipe = jsrecipes2[i];
                //loop over the current recipe
                for(j = 0; j < currentrecipe.length; j++) {
                    var ingredientname = currentrecipe[j][0];
                    var ingredientquantity = currentrecipe[j][1];
                    //find the ingredient inside of the list of possible ingredients by looping and performing a check
                    for(k = 0; k < jsingredients2.length; k++) {
                        var selectedingredient = jsingredients2[k][0];
                        var currentquantity = jsingredients2[k][1];
                        var unit = jsingredients2[k][2];
                        //if the questioned ingredient in the recipe is equal to the selected ingredient in the ingredients list, add the quantity to the total found in the ingredients list.
                        if(selectedingredient == ingredientname) {
                            currentquantity += ingredientquantity;
                            jsingredients2[k][1] = currentquantity;
                            console.log(selectedingredient);
                            console.log(currentquantity + " " + unit);
                        }
                    }
                }
            }
            console.log("hellooo");
            console.log(JSON.stringify(jsingredients2));
        });
    }
);
console.log("hellooo");