<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthsystem";

$conn = new mysqli($servername, $username, $password, $dbname); 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    $userID = $_SESSION['userID'];

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
        )); 
    } else {
        http_response_code(404); 
        echo json_encode(array('error' => 'User not found'));
    }

    $stmt->close(); 
} else {
    http_response_code(401);
    echo json_encode(array('error' => 'User not logged in'));
}

$conn->close();
?>
