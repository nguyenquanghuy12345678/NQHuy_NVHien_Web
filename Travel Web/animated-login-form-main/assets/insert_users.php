<?php
// Thông tin kết nối MySQL
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "web_6_2024";
// $port = 3306; // Số cổng MySQL mặc định

// Tạo kết nối
// $conn = new mysqli($servername, $username, $password, $dbname,$port);

// Kiểm tra kết nối
// if ($conn->connect_error) {
//     die("Kết nối thất bại: " . $conn->connect_error);
// }

// Danh sách các bản ghi cần chèn

// $users = [
//     ["email" => "user1@example.com", "password" => password_hash("password1", PASSWORD_DEFAULT)],
//     ["email" => "user2@example.com", "password" => password_hash("password2", PASSWORD_DEFAULT)],
//     ["email" => "user3@example.com", "password" => password_hash("password3", PASSWORD_DEFAULT)],
//     ["email" => "user4@example.com", "password" => password_hash("password4", PASSWORD_DEFAULT)],
//     ["email" => "user5@example.com", "password" => password_hash("password5", PASSWORD_DEFAULT)],
//     ["email" => "user6@example.com", "password" => password_hash("password6", PASSWORD_DEFAULT)],
//     ["email" => "user7@example.com", "password" => password_hash("password7", PASSWORD_DEFAULT)],
//     ["email" => "user8@example.com", "password" => password_hash("password8", PASSWORD_DEFAULT)],
//     ["email" => "user9@example.com", "password" => password_hash("password9", PASSWORD_DEFAULT)],
//     ["email" => "user10@example.com", "password" => password_hash("password10", PASSWORD_DEFAULT)],
//     ["email" => "user11@example.com", "password" => password_hash("password11", PASSWORD_DEFAULT)],
//     ["email" => "user12@example.com", "password" => password_hash("password12", PASSWORD_DEFAULT)],
// ];

// foreach ($users as $user) {
//     $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param("ss", $user['email'], $user['password']);
//     $stmt->execute();
//     echo "Đã chèn user: " . $user['email'] . "<br>";
// }

// $stmt->close();
// $conn->close();
// ?>   
