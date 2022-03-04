button = document.getElementById("results");
button.onclick = function () {
    //Initialize variables

    //Produce
    var onion = 0;
    var garlic = 0;
    var bellpeppers = 0;
    var limes = 0;
    var bananapeppers = 0;
    var carrots = 0;
    var ginger = 0;
    var greenbeans = 0;
    var minisweetpeppers = 0;
    var russets = 0;
    var lemon = 0;
    var pineapple = 0;
    var spinach = 0;

    //Meat
    var leangroundbeef = 0;
    var beefshoulder = 0;
    var skinlesschickenbreasts = 0;
    var chickenthighs = 0;
    var boneinham = 0;
    var boneinpork = 0;
    var bonelesspork = 0;
    var porksirloins = 0;
    var italiansausage = 0;

    //Freezer
    var frozenbutternut = 0;
    var frozencorn = 0;
    var frozengreenbeans = 0;
    var meatballs = 0;
    var stirfry = 0;

    //Italian
    var pastasauce = 0;
    var elbowmacaroni = 0;
    var lasagnanoodles = 0;

    //Spices
    var salt = 0;
    var cayenne = 0;
    var allspice = 0;
    var caraway = 0;
    var tacoseasoning = 0;
    var onionsoupmix = 0;
    var dryranch = 0;
    var dryaujus = 0;
    var seasoning = 0;
    var mincedonion = 0;
    var blackpepper = 0;

    //Canned
    var canblackbeans = 0;
    var cancorn = 0;
    var jarsalsaverde = 0;
    var beefbroth = 0;
    var cancanellinibeans = 0;
    var chickenbroth = 0;
    var cranberrysauce = 0;
    var hotpepperjelly = 0;
    var grapejelly = 0;
    var pepperoncini = 0;
    var sauerkraut = 0;
    var peachjam = 0;
    var teriyaki = 0;
    var condensedtomato = 0;

    //Dried
    var driedpintobeans = 0;

    //Cold
    var creamcheese = 0;
    var cheddarcheese = 0;
    var milk = 0;
    var unsaltedbutter = 0;
    var mozzarella = 0;

    //Baking
    var honey = 0;
    var lightbrownsugar = 0;

    //Oils and Vinegars
    var oliveoil = 0;
    var redwinevinegar = 0;

    //Miscellaneous
    var ketchup = 0;
    var soysauce = 0;

    //Materials
    var galfreezerbag = 0;
    var qtfreezerbag = 0;

    //Gather all of the recipes
    var recipes = document.getElementsByName("recipe");
    //cycle through the recipes
    for(i=0; i < recipes.length; i++) {
        //if the recipe selected is checked, then add the ingredients for that recipe to initialized variables
        if (recipes[i].checked) {
            console.log(recipes[i]);
            var recipeselected = recipes[i].value;
            //complete for salsa verde chicken
            if (recipeselected === "1") {
                skinlesschickenbreasts += 2;
                canblackbeans += 1;
                cancorn += 1;
                jarsalsaverde += 1;
                creamcheese += 1;
                galfreezerbag += 1;
            }
            //complete for lime shredded pork
            if (recipeselected === "2") {
                boneinpork += 2;
                limes += 2;
                honey += 1;
                cayenne += .5;
                salt += .25;
                galfreezerbag += 1;
            }
            //complete for stuffed peppers
            if (recipeselected === "3") {
                leangroundbeef += 1;
                onion += 1;
                garlic += 1;
                minisweetpeppers += 1;
                pastasauce += 1;
                galfreezerbag +=1;
                qtfreezerbag += 1;
            }
            //complete for macaroni and cheese
            if (recipeselected === "4") {
                elbowmacaroni += 4.5;
                cheddarcheese += 1;
                creamcheese += 1;
                milk += 4;
                salt += .25;
                blackpepper += .25;
                galfreezerbag += 1;
            }
            //complete for beef roast and carrots
            if (recipeselected === "5") {
                beefshoulder += 1;
                carrots += 2;
                oliveoil += 3;
                redwinevinegar += 3;
                seasoning += 1;
                galfreezerbag += 1;
            }
            //complete for lasagna soup
            if (recipeselected === "6") {
                pastasauce += 1;
                cancanellinibeans += 1;
                spinach += 2.5;
                chickenbroth += 4;
                lasagnanoodles += 3;
                galfreezerbag += 1;
            }
            //complete for party pork roast
            if (recipeselected === "7") {
                boneinpork += 1;
                grapejelly += 1;
                ketchup += 1;
                allspice += .25;
                galfreezerbag += 1;
            }
            //complete for chicken tacos
            if (recipeselected === "8") {
                skinlesschickenbreasts += 1;
                tacoseasoning += 1;
                chickenbroth += 1;
                galfreezerbag += 1;
            }
            //complete for lemon pepper chicken
            if (recipeselected === "9") {
                skinlesschickenbreasts += 1;
                oliveoil += 4;
                lemon += 1;
                blackpepper += .5;
                salt += .25;
                galfreezerbag += 1;
            }
            //complete for ginger peach chicken
            if (recipeselected === "10") {
                chickenthighs += 2;
                peachjam += 1;
                soysauce += 1;
                ginger += 1;
                garlic += 3;
                galfreezerbag += 1;
            }
            //complete for hawaiian chicken
            if (recipeselected === "11") {
                skinlesschickenbreasts += 2;
                pineapple += 1;
                lightbrownsugar += 2;
                soysauce += 2;
                galfreezerbag += 1;
            }
            //complete for basic pot roast
            if (recipeselected === "12") {
                beefshoulder += 1;
                onionsoupmix += 1;
                onion += 1;
                carrots += 1;
                galfreezerbag += 1;
            }
            //complete for sausage-stuffed minipeppers
            if (recipeselected === "13") {
                minisweetpeppers += 1;
                italiansausage += 1;
                pastasauce += 1;
                mozzarella += 1;
                qtfreezerbag += 1;
                galfreezerbag += 1;
            }
            //complete for meatball veggie soup
            if (recipeselected === "14") {
                meatballs += 1;
                pastasauce += 1;
                carrots += 1;
                greenbeans += 3;
                chickenbroth += 4;
                galfreezerbag +=1;
            }
            //complete for pork and sauerkraut
            if (recipeselected === "15") {
                bonelesspork += 2;
                sauerkraut += 2;
                honey += 2;
                caraway += 1;
                galfreezerbag +=1;
            }
            //complete for banana pepper shredded beef
            if (recipeselected === "16") {
                beefshoulder += 1;
                bananapeppers += 4;
                onion += 1;
                beefbroth += 2;
                galfreezerbag +=1;
            }
            //complete for cranberry chicken and green beans
            if (recipeselected === "17") {
                frozengreenbeans += 1;
                cranberrysauce += 1;
                onionsoupmix += 1;
                skinlesschickenbreasts += 2;
                galfreezerbag +=1;
            }
            //complete for cranberry pork roast
            if (recipeselected === "18") {
                boneinpork += 1;
                cranberrysauce += 1;
                honey += 4;
                mincedonion += .25;
                galfreezerbag +=1;
            }
            //complete for mississippi roast
            if (recipeselected === "19") {
                beefshoulder += 1;
                dryranch += 1;
                dryaujus += 1;
                unsaltedbutter += 1;
                pepperoncini += .5;
                galfreezerbag +=1;
            }
            //complete for pepperoncini shredded beef
            if (recipeselected === "20") {
                beefshoulder += 1;
                pepperoncini += 1;
                garlic += 6;
                blackpepper += .5;
                galfreezerbag +=1;
            }
            //complete for chicken teriyaki
            if (recipeselected === "21") {
                skinlesschickenbreasts += 1;
                teriyaki += 5;
                stirfry += 1;
                galfreezerbag +=1;
            }
            //complete for hot pepper pork and butternut squash
            if (recipeselected === "22") {
                porksirloins += 1;
                frozenbutternut += 1;
                hotpepperjelly += 1;
                galfreezerbag +=1;
            }
            //complete for pot roast with green beans
            if (recipeselected === "23") {
                beefshoulder += 1;
                greenbeans += 1;
                russets += 1;
                onionsoupmix += 1;
                galfreezerbag +=1;
            }
            //complete for mexican chili with cornbread
            if (recipeselected === "24") {
                leangroundbeef += 1;
                onion += 1;
                bellpeppers += 1;
                frozencorn += 1;
                tacoseasoning += 1;
                condensedtomato += 1;
                galfreezerbag +=1;
            }
            //complete for ham and pinto bean soup
            if (recipeselected === "25") {
                driedpintobeans += 1;
                boneinham += 1.5;
                ketchup += .75;
                salt += .5;
                galfreezerbag +=1;
            }
        }
    }

    //Initialize tables
    var produce = [
        ["yellow onions",onion],
        ["cloves of garlic",garlic],
        ["bell peppers",bellpeppers],
        ["limes",limes],
        ["fresh banana peppers",bananapeppers],
        ["pounds of carrots",carrots],
        ["inch fresh ginger root",ginger],
        ["cups green beans",greenbeans],
        ["16oz bag of mini sweet peppers",minisweetpeppers],
        ["pound russet potatoes",russets],
        ["lemon",lemon],
        ["pineapple",pineapple],
        ["oz baby spinach",spinach]
    ];

    var meat = [
        ["pounds of lean ground beef",leangroundbeef],
        ["boneless beef chuck shoulder roasts (2 pounds each)",beefshoulder],
        ["pounds of boneless chicken breasts",skinlesschickenbreasts],
        ["pounds of boneless chicken thighs",chickenthighs],
        ["pounds of bone-in-ham shank",boneinham],
        ["bone-in pork shoulders (2.5 pounds each)",boneinpork],
        ["pounds of boneless pork roast",bonelesspork],
        ["pounds of pork sirloins",porksirloins],
        ["pounds of ground italian sausage",italiansausage]
    ];

    var freezer = [
        ["16oz bag of frozen butternut squash",frozenbutternut],
        ["cup of frozen corn",frozencorn],
        ["pound of frozen green beans",frozengreenbeans],
        ["pound of small meatballs",meatballs],
        ["16oz bag of frozen stir fry veggies",stirfry]
    ];

    var italian = [
        ["24oz jars of pasta sauce",pastasauce],
        ["lasagna noodles",lasagnanoodles],
        ["cups uncooked elbow macaroni",elbowmacaroni]
    ];

    var spices = [
        ["teaspoons of salt",salt],
        ["teaspoons of ground cayenne pepper",cayenne],
        ["teaspoons of ground allspice",allspice],
        ["teaspoon of caraway seeds",caraway],
        ["packets of taco seasoning",tacoseasoning],
        ["packet of onion soup mix",onionsoupmix],
        ["ounce packet of dry ranch seasoning mix",dryranch],
        ["ounce packet of dry au jus gravy mix",dryaujus],
        ["seasoning packet",seasoning],
        ["cup of dried minced onion",mincedonion],
        ["teaspoons of freshly cracked black pepper",blackpepper]
    ];

    var canned = [
        ["cups of beef broth",beefbroth],
        ["15oz can of black beans",canblackbeans],
        ["15oz can of cannellini beans",cancanellinibeans],
        ["cup of chicken broth",chickenbroth],
        ["15oz can of corn",cancorn],
        ["15oz cans of whole cranberry sauce",cranberrysauce],
        ["8oz jar of hot pepper jelly",hotpepperjelly],
        ["cups of grape jelly",grapejelly],
        ["12oz jar of pepperoncini",pepperoncini ],
        ["16oz jars of sauerkraut",sauerkraut],
        ["cup of peach jam",peachjam],
        ["oz of teriyaki sauce",teriyaki],
        ["10.75oz can of condensed tomato soup",condensedtomato],
        ["16oz jar of salsa verde",jarsalsaverde]
    ];

    var dried = [
        ["pounds of dried pinto beans",driedpintobeans]
    ];

    var cold = [
        ["8oz packages of cream cheese",creamcheese],
        ["8oz cheddar cheese",cheddarcheese],
        ["cups of milk",milk],
        ["sticks of unsalted butter",unsaltedbutter],
        ["8oz of mozzarella cheese",mozzarella]
    ];
    var baking = [
        ["tablespoons of honey",honey],
        ["tablespoons of light brown sugar",lightbrownsugar],
    ];
    var oils = [
        ["tablespoons of extra virgin olive oil",oliveoil],
        ["tablespoons of red wine vinegar",redwinevinegar]
    ];

    var misc = [
        ["cups of ketchup",ketchup],
        ["tablespoons of low-sodium soy sauce",soysauce]    
    ];

    var materials = [
        ["gallon-sized plastic freezer bags",galfreezerbag],
        ["quart-sized plastic freezer bags",qtfreezerbag]
    ];
    var currentingredients = document.getElementsByClassName("crockpotListCategory");
    if(currentingredients.length === 0) {
        var dumplocation = document.getElementById("dumphere");

        //PRODUCE
        var producehtml = '<section class="crockpotListCategory">Produce <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var producearray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < produce.length; i++) {
            var ingrednumber = produce[i][1];
            if (ingrednumber > 0) {
                var ingredtext = produce[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                producearray.push(newtext);
            }
        }
        if (producearray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < producearray.length; i++) {
                var newli = '<li>' + producearray[i] + '</li>';
                producehtml += newli;
            }
            dumplocation.innerHTML += producehtml + htmlclose;
        }

        //MEAT
        var meathtml = '<section class="crockpotListCategory">Meat <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var meatarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < meat.length; i++) {
            var ingrednumber = meat[i][1];
            if (ingrednumber > 0) {
                var ingredtext = meat[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                meatarray.push(newtext);
            }
        }
        if (meatarray.length != 0) {
            //add list elements to the ul in meat
            for (i=0; i < meatarray.length; i++) {
                var newli = '<li>' + meatarray[i] + '</li>';
                meathtml += newli;
            }
            dumplocation.innerHTML += meathtml + htmlclose;
        }

        //FREEZER
        var freezerhtml = '<section class="crockpotListCategory">Freezer <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var freezerarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < freezer.length; i++) {
            var ingrednumber = freezer[i][1];
            if (ingrednumber > 0) {
                var ingredtext = freezer[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                freezerarray.push(newtext);
            }
        }
        if (freezerarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < freezerarray.length; i++) {
                var newli = '<li>' + freezerarray[i] + '</li>';
                freezerhtml += newli;
            }
            dumplocation.innerHTML += freezerhtml + htmlclose;
        }

        //ITALIAN
        var italianhtml = '<section class="crockpotListCategory">Italian <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var italianarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < italian.length; i++) {
            var ingrednumber = italian[i][1];
            if (ingrednumber > 0) {
                var ingredtext = italian[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                italianarray.push(newtext);
            }
        }
        if (italianarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < italianarray.length; i++) {
                var newli = '<li>' + italianarray[i] + '</li>';
                italianhtml += newli;
            }
            dumplocation.innerHTML += italianhtml + htmlclose;
        }

        //SPICES
        var spiceshtml = '<section class="crockpotListCategory">Spices <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var spicesarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < spices.length; i++) {
            var ingrednumber = spices[i][1];
            if (ingrednumber > 0) {
                var ingredtext = spices[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                spicesarray.push(newtext);
            }
        }
        if (spicesarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < spicesarray.length; i++) {
                var newli = '<li>' + spicesarray[i] + '</li>';
                spiceshtml += newli;
            }
            dumplocation.innerHTML += spiceshtml + htmlclose;
        }

        //CANNED
        var cannedhtml = '<section class="crockpotListCategory">Canned <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var cannedarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < canned.length; i++) {
            var ingrednumber = canned[i][1];
            if (ingrednumber > 0) {
                var ingredtext = canned[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                cannedarray.push(newtext);
            }
        }
        if (cannedarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < cannedarray.length; i++) {
                var newli = '<li>' + cannedarray[i] + '</li>';
                cannedhtml += newli;
            }
            dumplocation.innerHTML += cannedhtml + htmlclose;
        }

        //DRIED
        var driedhtml = '<section class="crockpotListCategory">Dried <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var driedarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < dried.length; i++) {
            var ingrednumber = dried[i][1];
            if (ingrednumber > 0) {
                var ingredtext = dried[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                driedarray.push(newtext);
            }
        }
        if (driedarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < driedarray.length; i++) {
                var newli = '<li>' + driedarray[i] + '</li>';
                driedhtml += newli;
            }
            dumplocation.innerHTML += driedhtml + htmlclose;
        }

        //COLD
        var coldhtml = '<section class="crockpotListCategory">Cold <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var coldarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < cold.length; i++) {
            var ingrednumber = cold[i][1];
            if (ingrednumber > 0) {
                var ingredtext = cold[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                coldarray.push(newtext);
            }
        }
        if (coldarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < coldarray.length; i++) {
                var newli = '<li>' + coldarray[i] + '</li>';
                coldhtml += newli;
            }
            dumplocation.innerHTML += coldhtml + htmlclose;
        }

        //BAKING
        var bakinghtml = '<section class="crockpotListCategory">Baking <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var bakingarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < baking.length; i++) {
            var ingrednumber = baking[i][1];
            if (ingrednumber > 0) {
                var ingredtext = baking[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                bakingarray.push(newtext);
            }
        }
        if (bakingarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < bakingarray.length; i++) {
                var newli = '<li>' + bakingarray[i] + '</li>';
                bakinghtml += newli;
            }
            dumplocation.innerHTML += bakinghtml + htmlclose;
        }

        //OILS
        var oilshtml = '<section class="crockpotListCategory">Oils <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var oilsarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < oils.length; i++) {
            var ingrednumber = oils[i][1];
            if (ingrednumber > 0) {
                var ingredtext = oils[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                oilsarray.push(newtext);
            }
        }
        if (oilsarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < oilsarray.length; i++) {
                var newli = '<li>' + oilsarray[i] + '</li>';
                oilshtml += newli;
            }
            dumplocation.innerHTML += oilshtml + htmlclose;
        }

        //MISCELLANEOUS
        var mischtml = '<section class="crockpotListCategory">Miscellaneous <ul class="crockpotListGroceries">';
        var htmlclose = '</ul></section>';

        var miscellaneousarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < misc.length; i++) {
            var ingrednumber = misc[i][1];
            if (ingrednumber > 0) {
                var ingredtext = misc[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                miscellaneousarray.push(newtext);
            }
        }
        if (miscellaneousarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < miscellaneousarray.length; i++) {
                var newli = '<li>' + miscellaneousarray[i] + '</li>';
                mischtml += newli;
            }
            dumplocation.innerHTML += mischtml + htmlclose;
        }

        //MATERIALS
        var materialshtml = '<section class="crockpotListCategory">Materials <ul class="crockpotListGroceries">';
        var materialsclose = '</ul></section>';

        var materialsarray = [];
        //cycle through produce ingredient list and concatenate the members together, storing them in another list
        for (i=0; i < materials.length; i++) {
            var ingrednumber = materials[i][1];
            if (ingrednumber > 0) {
                var ingredtext = materials[i][0];
                var space = " ";
                var newtext = ingrednumber + space + "x" + space + ingredtext;
                materialsarray.push(newtext);
            }
        }
        if (materialsarray.length != 0) {
            //add list elements to the ul in produce
            for (i=0; i < materialsarray.length; i++) {
                var newli = '<li>' + materialsarray[i] + '</li>';
                materialshtml += newli;
            }
            dumplocation.innerHTML += materialshtml + htmlclose;
        }
    }

};

