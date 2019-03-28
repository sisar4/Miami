<?php
session_start();
include 'dbCon.php';
if(isset($_GET['showList'])&&$_GET['showList']==1)
{
    try{
        $dbh = new PDO($dsn,$user,$password);
    }catch(PDOException $e)
    {
        echo 'Connessione fallita:'.$e->getMessage();
        exit;
    }
    $stm=$dbh->prepare("SELECT * FROM docente");
    $stm->execute();
    echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC));
}
else
    echo json_encode('error');
?>