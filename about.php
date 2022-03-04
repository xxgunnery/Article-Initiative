    <?php 
        session_start();
        $metatitle = 'About - The Article Initiative';
        $metadesc = 'The Article Initiative is a website dedicated to improving various types of content on the internet!';
        include ('include_markup/header.php');
    ?>
    <main class="row mainContainer">
        <div class="col-xs-12 col-md-8 col-md-offset-2 aboutContainer">
            <h1 class="aboutHeader">About The Article Initiative</h1>
            <div class="flexColumns aboutContent">
                <article class="aboutText">
                    <h2>Introduction:</h2>
                    <p>My name is Paul D'Antonio, owner and sole-developer of The Article Initiative. I am a self-taught web developer looking to sharpen my skills and pursue independent work while I begin a career in engineering.</p>
                </article>
                <img src="images/profile_picture.png">
                <article class="aboutText">
                    <h2>My Goal With The Article Iniative:</h2>
                    <p>The Article Initiative is a website which hosts web-apps designed to improve content that is already on the internet. </p>
                    <p>My first app has been designed to improve information delivery in the article <a href="http://newleafwellness.biz/2015/11/16/25-crockpot-freezer-meals-with-five-ingredients-or-less/">25 Crockpot Recipes With 5 Ingredients or Less</a>. I've created a <a href="applications/crockpot.php">form</a> to help users generate their own personal shopping list for the recipes that they would like to make.</p>
                    <p>The Article Initiative is a work in progress, meaning that I am constantly searching for new content to create apps for. The plan is for this site to be free with no ads. I'm going to be placing donation buttons here and there to create the experience of "pay what you want".</p>
                </article>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="75ZKG6673MLY4">
                    <input type="image" src="http://www.articleinitiative.com/images/donate1.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                </form>
                <article class="aboutText">
                    <h2>Web-App Updates:</h2>
                    <p>Each web-app created on The Article Initiative will be updated and maintained, where priority will be given to apps which receive more traffic.</p>
                    <p>I will not be doing extensive bug-checking for each app, so I am relying on my audience to be vigilant about communicating any problems.</p>
                    <p>Please feel free to report bugs and make suggestions for future content by using the <a href="contact.php">Contact</a> link. Send me an email at pbdantonio@gmail.com</p>
                </article>
            </div>
        </div>
    </main>
    <?php include ('include_markup/footer.php');?>
</body>
</html>