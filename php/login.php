<?php
include 'dbCon.php';
$dbh = new PDO($dsn,$username,$password);
$stm = $dbh->prepare("")
/*if(isset($_SESSION['userId']) && isset($_SESSION['userName']))
{
    echo '<li class="NavLi" style="float:right"><a href="SignIn.php?action=logout">Disconetti '.$_SESSION['userName'].'</a></li>';
}
else
{
    echo '<li class="NavLi" style="float:right"><a href="SignIn.php">Accedi</a></li>';
}*/
?>
