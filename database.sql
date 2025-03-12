<?php
$servername = "localhost";
$username = "root"; // Default username in XAMPP
$password = ""; // Leave empty if using XAMPP
$dbname = "registration_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
