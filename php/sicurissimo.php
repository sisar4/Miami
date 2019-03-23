<?php
$ritrovamiDopo = "bdqygUMVedB5PN9Tc7e8-merluzzo-scpoSR23LiA24I3dBFYz";
function getToken($name, $surname, $role, $id)
{
    $date = time();
    $expireDate = time()+(2*60*60); 
    $fromString = $role.'|'.$id.'|'.$ritrovamiDopo.'|'.$name.'|'.$surname.'|'.$date.'|'.$expireDate;  
    return my_simple_crypt($fromString);
}

function getAllUserData($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[3].';'.$values[4].';'.$values[0].';'.$values[1];
        return $data;
    }
    return false;
}
function getUserName($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[3];
        return $data;
    }
    return false;
}
function getUserSurname($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[4];
        return $data;
    }
    return false;
}
function getUserID($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[1];
        return $data;
    }
    return false;
}
function getUserRole($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[0];
        return $data;
    }
    return false;
}
function getTokenMinDate($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[5];
        return $data;
    }
    return false;
}
function getTokenMaxDate($token)
{
    $fromString = my_simple_crypt($token,'d');
    if($fromString!=false)
    {
        $values = explode('|', $fromString);
        $data = $values[6];
        return $data;
    }
    return false;
}

function my_simple_crypt( $string, $action = 'e' ) {
   // you may change these values to your own
   $secret_key = '9k037tgK3jLDd0DigqSthF9jo';
   $secret_iv = 'VrABdhbs62wqbuQGDDTytgP3x';

   $output = false;
   $encrypt_method = "AES-256-CBC";
   $key = hash( 'sha256', $secret_key );
   $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

   if( $action == 'e' ) {
       $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
   }
   else if( $action == 'd' ){
       $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
       $values = explode('|', $output);
       $date = time();
       if($string!=my_simple_crypt($output) || $date < $values[5] || $date > $values[6] || $values[2]!=$ritrovamiDopo)
        return false;
   }

   return $output;
}
/*$nome = "mario";
$cognome = "rossi";
$id = "12";
$ruolo = "0";
echo "Nome: ".$nome." Cognome: ".$cognome." id: ".$id." ruolo: ".$ruolo."</br>";
if(isset($_GET['token']))
    { $token = $_GET['token']; }
else
    { $token = getToken($nome,$cognome,$id,$ruolo);}
echo "token: ".$token."</br>";
echo "getAllUserData(): ". getAllUserData($token)."</br>";
echo "getUserName(): ". getUserName($token)."</br>"; 
echo "getUserSurname(): ". getUserSurname($token)."</br>";
echo "getUserID(): ". getUserID($token)."</br>";
echo "getUserRole():". getUserRole($token)."</br>";
echo "getTokenMinDate():". date("d-m-y h:m:s",getTokenMinDate($token))."</br>";
echo "getTokenMaxDate():". date("d-m-y h:m:s",getTokenMaxDate($token))."</br>";*/
?>
