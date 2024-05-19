<?php
session_start(); // Khởi tạo session (nếu chưa có)

header("Access-Control-Allow-Origin: http://localhost:3000"); // Cho phép yêu cầu từ React app
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Cho phép các phương thức POST, GET và OPTIONS
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Cho phép các header Content-Type và Authorization

session_destroy(); // Hủy session

?>

