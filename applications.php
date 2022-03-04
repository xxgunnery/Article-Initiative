    <?php 
        session_start();
        $metatitle = 'Our Applications - The Article Initiative';
        $metadesc = "The Article Initiative designs web-apps to improve some of the internet's best content";
        include ('include_markup/header.php');
    ?>
    <main class="mainContainer applicationsContainer">
        <h1 class="applicationsHeader">Our Current Applications</h1>
        <p class="applicationsInstructions">We're browsing the internet every day for content to improve on the web. Take a look at some of the content we're working on!</p>
        <div class="row">
            <div class="flexRows">
                <article class="col-lg-6 col-sm-12 col-xs-12 applicationsCard">
                    <div>
                        <h3>Article</h3>
                        <h2>25 Crockpot Freezer Meals with Five Ingredients or Less</h2>
                        <img src="images/crockpot.png">
                        <p>This fantastic article provides a bunch of free information to get you started cooking easy crockpot freezer meals. It's a fantastic system that is user-friendly in every way, besides selecting your meals and generating your shopping list. The problem is solved in this easy-to-use application.</p>
                        <a href="applications/crockpot.php">Go To App</a>
                        <a href="http://newleafwellness.biz/2015/11/16/25-crockpot-freezer-meals-with-five-ingredients-or-less/">View Original Article</a>
                    </div>
                </article>
                <article class="col-lg-6 col-sm-12 col-xs-12 applicationsCard">
                    <div>
                        <h3>New App</h3>
                        <h2>Easy DOTA Hotkeys</h2>
                        <img src="images/dotakeys.png">
                        <p>Take thirty seconds to optimize your DOTA 2 hotkeys!</p>
                        <a href="applications/dotakeys.php">Go To App</a>
                    </div>
                </article>
            </div>
        </div>
    </main>
    <?php include ('include_markup/footer.php');?>
</body>
</html>