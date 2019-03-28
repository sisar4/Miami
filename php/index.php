<?php
session_start();
if(isset($_GET['page']))
{
    switch($_GET['page'])
    {
        case 1:
            $file = __DIR__ ."/../pages/home.html";
        break;
        case 2:
            $file = __DIR__ ."/../pages/login.html";
        break;
        case 3:
        $file = __DIR__ ."/../pages/docente.html";
        break;
    }
    
    $result = file_get_contents($file);
    echo json_encode($result);
}
else if(isset($_GET['menu'])&& $_GET['menu']=='noLogged')
{
    $file = __DIR__ ."/../data/noLoggedMenu.json";
    $result = file_get_contents($file);
    echo $result; /*e' gia' in formato json*/   
}

?>