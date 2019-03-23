<?php
session_start();
include 'sicurissimo.php';
if(isset($_GET['action']) && $_GET['action']=="login" && isset($_GET['userType']) && isset($_GET['uName']) && isset($_GET['uPsw']))
{
    $tok;
    if($_GET['userType']=="prof")
    {
        /*tirare fuori nome, cognome, ruolo,id*/
    }
    else if($_GET['userType']=="stud")
    {
        /*tirare fuori nome, cognome, ruolo,id*/

    }
    
    echo json_encode($tok);
}
/*include 'dbCon.php';
$dbh = new PDO($dsn,$username,$password);
$stm = $dbh->prepare("")*/

/*if(isset($_SESSION['userId']) && isset($_SESSION['userName']))
{
    echo '<li class="NavLi" style="float:right"><a href="SignIn.php?action=logout">Disconetti '.$_SESSION['userName'].'</a></li>';
}
else
{
    echo '<li class="NavLi" style="float:right"><a href="SignIn.php">Accedi</a></li>';
}*/

?>
