    <?php 
        session_start();
        $metatitle = 'Crockpot Freezer Meals - The Article Initiative';
        $metadesc = 'Take thirty seconds and generate your personalized shopping list for an already efficient meal-planning system!';
        include ('../include_markup/header2.php');
    ?>
    <main class="row mainContainer">
        <div class="col-xs-12 applicationContainer">
            <h1 class="applicationHeader">25 Crockpot Freezer Meals with Five Ingredients or Less</h1>
            <div class="applicationOverview">
                <p>
                New Leaf Wellness author Kelly has put together a fantastic article to provide readers with a meal system that's meant to save time while not skipping out on nutrition. In the original article, Kelly talks about the simplicity of crockpot meal-prep, highlighting that you don't need to cook anything during preparation. Simply combine meal ingredients in a baggy and store the food in the freezer! You can check our her original article below:</p>
                <ul class="applicationInstructions">
                    Before You Use This Application:
                    <li>This application is meant to generate a shopping list based on information found in the original article linked below.</li>
                    <li>Make sure to view the original article.</li>
                    <li>Learn about meals by clicking links in original article.</li>
                    <li>Download PDF cooking/shopping instructions.</li>            
                </ul>
            </div>
                          
            <a class="applicationOriginalarticle" href="http://newleafwellness.biz/2015/11/16/25-crockpot-freezer-meals-with-five-ingredients-or-less/">View Original Article</a>
            <?php include('crockpot/crockpot.inc.php');?>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="75ZKG6673MLY4">
                <input type="image" src="http://www.articleinitiative.com/images/donate1.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            </form>
        </div>
    </main>
    <?php include ('../include_markup/footer2.php');?>
</body>
</html>