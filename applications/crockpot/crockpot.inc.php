<div class="col-xs-12 crockpotContainer">
    <section class="row crockpotForm">
        <h2 class="col-xs-12 crockpotFormHeader">Check boxes to generate a shopping list! Which meals would you like?</h2>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>1. Salsa Verde Chicken</p>
            <input type="checkbox" name="recipe" value="1">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>2. Lime Shredded Pork</p>
            <input type="checkbox" name="recipe" value="2">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>3. Stuffed Peppers</p>
            <input type="checkbox" name="recipe" value="3">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>4. Macaroni and Cheese</p>
            <input type="checkbox" name="recipe" value="4">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>5. Shredded Beef and Carrots</p>
            <input type="checkbox" name="recipe" value="5">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>6. Lasagna Soup</p>
            <input type="checkbox" name="recipe" value="6">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>7. Party Pork Roast</p>
            <input type="checkbox" name="recipe" value="7">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>8. Chicken Tacos</p>
            <input type="checkbox" name="recipe" value="8">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>9. Lemon Pepper Chicken</p>
            <input type="checkbox" name="recipe" value="9">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>10. Ginger Peach Chicken</p>
            <input type="checkbox" name="recipe" value="10">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>11. Hawaiian Chicken</p>
            <input type="checkbox" name="recipe" value="11">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>12. Basic Pot Roast</p>
            <input type="checkbox" name="recipe" value="12">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>13. Sausage-Stuffed Mini Peppers</p>
            <input type="checkbox" name="recipe" value="13">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>14. Meatball Veggie Soup</p>
            <input type="checkbox" name="recipe" value="14">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>15. Pork and Sauerkraut</p>
            <input type="checkbox" name="recipe" value="15">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>16. Banana Pepper Shredded Beef</p>
            <input type="checkbox" name="recipe" value="16">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>17. Cranberry Chicken with Green Beans</p>
            <input type="checkbox" name="recipe" value="17">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>18. Cranberry Pork Roast</p>
            <input type="checkbox" name="recipe" value="18">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>19. Mississippi Roast</p>
            <input type="checkbox" name="recipe" value="19">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>20. Pepperoncini Shredded Beef</p>
            <input type="checkbox" name="recipe" value="20">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>21. Chicken Teriyaki</p>
            <input type="checkbox" name="recipe" value="21">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>22. Hot Pepper Pork Sirloins and Butternut Squash</p>
            <input type="checkbox" name="recipe" value="22">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>23. Pot Roast with Green Beans</p>
            <input type="checkbox" name="recipe" value="23">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>24. Mexican Chili with Cornbread</p>
            <input type="checkbox" name="recipe" value="24">
        </div>
        <div class="crockpotFormCheckbox col-lg-4 col-md-6 col-xs-12">
            <p>25. Ham and Pinto Bean Soup</p>
            <input type="checkbox" name="recipe" value="25">
        </div>
        
        <div class="crockpotFormSubmit col-xs-12">
            <button id="results">Generate Shopping List</button>
        </div>
        <div class="crockpotFormSubmit col-xs-12">
            <button id="clear">Reset Shopping List</button>
        </div>
    </section>
    <section class="crockpotList row">
        <h2 class="crockpotListHeader col-xs-12">Shopping List:</h2>
        <div class="col-xs-12" id="dumphere">

        </div>
    </section>
</div>
<script src="crockpot/crockpot_generator.js"></script>
<script src="crockpot/crockpot_clear.js"></script>