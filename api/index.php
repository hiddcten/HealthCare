<?php
$requestURI = $_SERVER['REQUEST_URI'];

if ($requestURI == '/healthcare-main/api/register.php') {
    require_once 'register.php';
} elseif ($requestURI == '/healthcare-main/api/login.php') {
    require_once 'login.php';
} elseif ($requestURI == '/healthcare-main/api/logout.php') {
    require_once 'logout.php';
} else {
    http_response_code(404); 
    echo "er";
}
?>
