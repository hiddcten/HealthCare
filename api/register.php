<?php
session_start();

// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthsystem";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Kiểm tra xem form đã được submit chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form đăng ký
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Kết hợp tên và họ thành username
    $username = $firstName . ' ' . $lastName;

    // Validate dữ liệu đầu vào
    if (empty($username) || empty($email) || empty($password)) {
        echo 'Vui lòng điền đầy đủ thông tin';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Email không hợp lệ';
    } elseif (strlen($password) < 6) {
        echo 'Mật khẩu phải có ít nhất 6 ký tự';
    } else {
        // Kiểm tra xem email đã tồn tại chưa
        $checkEmailSql = "SELECT * FROM user WHERE email = ?";
        $stmt = $conn->prepare($checkEmailSql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo 'Email đã tồn tại';
        } else {
            // Mã hóa mật khẩu
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Thêm người dùng mới vào cơ sở dữ liệu
            $insertSql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($insertSql);
            $stmt->bind_param("sss", $username, $email, $hashedPassword);

            if ($stmt->execute()) {
                echo 'Đăng ký thành công!';
            } else {
                echo 'Lỗi khi đăng ký: ' . $stmt->error;
            }
        }
        $stmt->close();
    }
}
header("Access-Control-Allow-Origin: *"); // Hoặc chỉ định domain cụ thể của frontend
header("Access-Control-Allow-Methods: POST"); // Cho phép method POST
header("Access-Control-Allow-Headers: Content-Type"); // Cho phép header Content-Type

$conn->close(); // Đóng kết nối CSDL
?>
