    <?php 
        session_start();
        $metatitle = 'Easy DOTA Hotkeys - The Article Initiative';
        $metadesc = 'Take thirty seconds to optimize your DOTA 2 hotkeys!';
        include ('../include_markup/header2.php');
    ?>
    <main class="row mainContainer">
        <div class="col-xs-12 applicationContainer">
            <h1 class="applicationHeader">Easy DOTA 2 Hotkeys</h1>
            <div class="applicationOverview">
                <p>Use this application to optimize your DOTA 2 hotkeys efficiently. Type your hotkeys and view them on our keyboard layout, then use our interface to play around with your setup to see how they feel!</p>
                <ul class="applicationInstructions">
                    Before You Use This Application:
                    <li>I am in no way affiliated with Valve, I am merely a fan of the game. All content provided is for Valve's DOTA 2.</li>
                    <li>This app is designed for use on a large-screen device. I suggest zooming out a bit on the screen while selecting hotkeys.</li>
                    <li>Updates will be made to this app, please feel free to contact me in order to make a suggestion.</li>
                    <li>This application mimics the DOTA 2 hotkey selection interface.</li>
                    <li>Click the shaded box called a "hotkey slot" to the bottom, or right of the hotkey label and then enter a key.</li>
                    <li>Click outside of the selected hotkey slot to cancel a selection and remove a key.</li>
                    <li>Once your hotkeys are set, click anywhere on the keyboard layout and start typing, so that you can get a visual of your layout while you test it out.</li>            
                </ul>
            </div>
            <?php include('dotakeys/dotakeys.inc.php');?>
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