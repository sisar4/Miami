<?php
session_start();
include 'dbCon.php';
require_once('jwt.php');
if(isset($_GET['action']) && $_GET['action']=="login" && isset($_GET['userType']) && isset($_GET['uName']) && isset($_GET['uPwd']))
{
    $tok="error";
    try{
        $dbh = new PDO($dsn,$user,$password);
    }catch(PDOException $e)
    {
        echo 'Connessione fallita:'.$e->getMessage();
        exit;
    }
    if($_GET['userType']=="prof")
    {
        /*tirare fuori nome, cognome, ruolo,id*/
        $stm=$dbh->prepare("SELECT nome, cognome, ruolo, iddocente FROM docente WHERE username = :uname AND password = :passwordParm");
        $stm->bindvalue(":uname",$_GET['uName']);
        $stm->bindvalue(":passwordParm",$_GET['uPwd']);
        $stm->execute();
        $result = $stm->fetch();
        $tok = jwt::encode($result, 'ciao');
    }
    else if($_GET['userType']=="stud")
    {
        /*tirare fuori nome, cognome, ruolo,id*/

    }
    
    echo json_encode($tok);
}
else if(isset($_GET['action']) && $_GET['action']=="getInfo" && isset($_GET['token']))
{
   /* if($_GET['token']!='error')
        echo 'logged';//json_encode(jwt::decode($_GET['token']), 'ciao');*/
        $decodeResult;
        try{
            $decodeResult =  json_encode(jwt::decode($_GET['token']), 'ciao');
        }catch(exception $e) {$decodeResult=json_encode($e->getMessage());}
        catch (InvalidArgumentException $e) {
            json_encode($e->getMessage());
        }
    echo $decodeResult;
}
else
    echo json_encode($_GET['action'].$_GET['userType'].$_GET['uName'].$_GET['uPsw']);
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
