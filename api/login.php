<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthsystem";

//CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (empty($email) || empty($password)) {
        echo "Please fill in all the fields.";
    } else {
        $checkEmailSql = "SELECT * FROM user WHERE email = ?"; 
        $stmt = $conn->prepare($checkEmailSql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $hashedPassword = $row['password'];

            if (password_verify($password, $hashedPassword)) {
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $row['username'];
                echo "success";
                exit();
            } else {
                echo "Incorrect password.";
            }
        } else {
            echo "Email does not exist.";
        }

        $stmt->close();
    }
}

$conn->close();
?>
