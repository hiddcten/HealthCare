<?php
session_start();

// Kiểm tra xem có phiên đăng nhập hiện tại không
if (isset($_SESSION['user'])) {
    // Nếu có, trả về thông tin người dùng
    $response = [
        'loggedIn' => true,
        'user' => $_SESSION['user']
    ];
} else {
    // Nếu không, trả về trạng thái đăng xuất
    $response = [
        'loggedIn' => false,
        'user' => null
    ];
}

header('Content-Type: application/json');
echo json_encode($response);

