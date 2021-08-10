<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- require(); in PHP is used for the forms containing tags that 
        needs to be included in almost if not every other form (i.e. Navbars 
        and Footers) to prevent redundancy-->
        <?php require("global-tags.php");?>
        <link rel="stylesheet" href="../css/landing.css">

        <title>Landing</title>
    </head>

    <body>
        <!-- logo and tagline section -->
        <section id="logo-sec" class="text-center">
            <div class="container">
                <img img src="../images/phytoflex-logo.png" alt="" width="325" height="325">
                <h5>A Store for Plantitos and Plantitas</h5>
            </div>
        </section>

        <!-- Footer -->
        <nav class="navbar fixed-bottom" id="fixed-footer">
            <div class="container-fluid" id="footer-container">
                <form action="login.php">
                    <input class="btn btn-success" type="submit" value="Get Started" id="btn-get-started">
                </form>
            </div>
        </nav>

        <!-- jQuery -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </body>
</html>