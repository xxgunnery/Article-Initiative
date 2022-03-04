    <?php 
        session_start();
        $metatitle = "The Article Initiative - Improving the Internet's Best Content";
        $metadesc = 'We browse the internet for content to improve. The best content on the internet is getting better with The Article Initiative.';
        include ('include_markup/header.php');
    ?>
    <main class="row mainContainer">
        <div class="col-xs-12 col-md-8 col-md-offset-2 homeContainer">
            <h1 class="homeHeader">Improving your favorite content, one web-app at a time.</h1>
            <div class="flexColumns homeContent">
                <a class="homeCalltoaction" href="applications.php">Get Started</a>
                <img src="images/itsallfree.png">
            </div>
        </div>
    </main>
    <?php include ('include_markup/footer.php');?>
</body>
</html>