<!DOCTYPE html>
<html lang="en">
    <head>
        <?php require("global-tags.php");?>

        <title>Document</title>
    </head>
    <body>
        <div class="form-signin fixed-bottom">
            <div class="card shadow rounded">
                <form class="card-body" method="post" action="login.php">
                    <!--Email/Username input-->
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtUsername" name="txtUsername" placeholder="Username" autocomplete="off">
                        <label for="txtUsername">Username</label>
                    </div>

                    <!--Password input-->
                    <div class="form-floating">
                        <input type="password" class="form-control" id="txtPass" name="txtPass" placeholder="Password">
                        <label for="txtPass">Password</label>
                    </div>

                    <!--Singin button-->
                    <button class="w-100 mt-5 btn btn-lg btn-success" type="submit" id="btnSignIn">Sign in</button>

                    <!--Copyright-->
                    <p class="mt-5 mb-5 text-muted" style="text-align:center;">&copy; Phytoflex 2021 - 2022</p>
                </form>
            </div>
    </body>
</html>