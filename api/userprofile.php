
<?php
session_start();

// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthsystem";

// Tạo kết nối database ngay sau khi khai báo các biến kết nối
$conn = new mysqli($servername, $username, $password, $dbname); 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Thêm các header CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Xử lý yêu cầu preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Kiểm tra xem người dùng đã đăng nhập chưa
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    // Lấy userID từ session
    $userID = $_SESSION['userID'];

    // Chuẩn bị câu truy vấn và thực hiện
    $getUserSql = "SELECT username, email FROM user WHERE userID = ?";
    $stmt = $conn->prepare($getUserSql);
    $stmt->bind_param("i", $userID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $username = $row['username'];
        $email = $row['email'];
        echo json_encode(array(
            'username' => $username,
            'email' => $email,
        )); // Trả về dữ liệu username và email dưới dạng JSON
    } else {
        http_response_code(404); // Trả về mã lỗi 404 nếu không tìm thấy thông tin người dùng
        echo json_encode(array('error' => 'User not found'));
    }

    $stmt->close(); // Đóng statement ở mọi trường hợp
} else {
    http_response_code(401); // Trả về mã lỗi 401 nếu chưa đăng nhập
    echo json_encode(array('error' => 'User not logged in'));
}

$conn->close();
?>
