<?php
$requestURI = $_SERVER['REQUEST_URI'];

if ($requestURI == '/healthcare-main/api/register.php') {
    require_once 'register.php';
} elseif ($requestURI == '/healthcare-main/api/login.php') {
    require_once 'login.php';
} elseif ($requestURI == '/healthcare-main/api/logout.php') {
    require_once 'logout.php';
} else {
    // Xử lý các endpoint khác hoặc trả về lỗi 404
    http_response_code(404); // Không tìm thấy trang
    echo "404 Not Found";
}
?>
