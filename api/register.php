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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $username = $firstName . ' ' . $lastName;

    if (empty($username) || empty($email) || empty($password)) {
        echo 'Fill in information';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email';
    } elseif (strlen($password) < 6) {
        echo 'Atleast 6 characters';
    } else {
        $checkEmailSql = "SELECT * FROM user WHERE email = ?";
        $stmt = $conn->prepare($checkEmailSql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo 'Existed email';
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $insertSql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($insertSql);
            $stmt->bind_param("sss", $username, $email, $hashedPassword);

            if ($stmt->execute()) {
                echo 'Register successfully!';
            } else {
                echo 'Error: ' . $stmt->error;
            }
        }
        $stmt->close();
    }
}
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type");

$conn->close(); 
?>
