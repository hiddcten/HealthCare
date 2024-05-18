<?php
session_start();

// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthsystem";

// Thêm các header CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Kiểm tra xem form đã được submit chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form đăng nhập
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Kiểm tra xem email và mật khẩu đã được nhập chưa
    if (empty($email) || empty($password)) {
        echo "Vui lòng điền đầy đủ thông tin.";
    } else {
        // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu không
        $checkEmailSql = "SELECT * FROM user WHERE email = ?"; 
        $stmt = $conn->prepare($checkEmailSql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $hashedPassword = $row['password'];

            // Xác thực mật khẩu
            if (password_verify($password, $hashedPassword)) {
                // Đăng nhập thành công
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $row['username'];

                // Trả về thông báo thành công
                echo "success";
                exit();
            } else {
                echo "Sai mật khẩu."; // Trả về thông báo lỗi cụ thể
            }
        } else {
            echo "Email không tồn tại."; // Trả về thông báo lỗi cụ thể
        }

        $stmt->close();
    }
}

$conn->close();
