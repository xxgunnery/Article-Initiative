    <?php 
        session_start();
        $metatitle = 'Contact - The Article Initiative';
        $metadesc = 'Send suggestions and report bugs to improve the experience of The Article Initiative.';
        include ('include_markup/header.php');
    ?>
    <main class="row mainContainer">
        <div class="col-xs-12 col-md-8 col-md-offset-2 contactContainer">
            <h1 class="contactHeader">Say Hi, Send Suggestions, or Report Bugs!</h1>
            <div class="flexColumns contactContent">
                <article class="contactText">
                    <h2>We Need Your Input!</h2>
                    <p>The Article Initiative has a lot going on, so please let us know if you have found any bugs in our apps! In addition, please send me content ideas so that I can try to help you!</p>
                    <p>All messages should be sent to pbdantonio@gmail.com.</p>
                </article>
                <article class="contactText">
                    <h2>Go Further:</h2>
                    <p>Social Media is coming!</p>
                    <p>Stay tuned so you can follow The Article Initiative on Twitter. Also, I will be livestreaming web development on Twitch.tv/creative.</p>
                </article>
                <article class="contactText">
                    <h2>Email: pbdantonio@gmail.com</h2>
                </article>
            </div>
        </div>
    </main>
    <?php include ('include_markup/footer.php');?>
</body>
</html>