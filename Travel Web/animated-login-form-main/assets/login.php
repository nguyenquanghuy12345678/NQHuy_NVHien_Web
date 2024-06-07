 <?php 
// session_start(); 

// Thông tin kết nối MySQL
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "web_6_2024";

// Tạo kết nối
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Kiểm tra kết nối
// if ($conn->connect_error) {
//     die("Kết nối thất bại: " . $conn->connect_error);
// }

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $email = $_POST['email'];
//     $password = $_POST['password'];

    // Truy vấn kiểm tra email và mật khẩu
//     $sql = "SELECT * FROM users WHERE email = ?";
//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param("s", $email);
//     $stmt->execute();
//     $result = $stmt->get_result();

//     if ($result->num_rows > 0) {
//         $row = $result->fetch_assoc();
//         // Kiểm tra mật khẩu
//         if (password_verify($password, $row['password'])) {
//             // Đăng nhập thành công, chuyển hướng đến index.html
//             header("Location: index.html");
//             exit();
//         } else {
//             echo "Sai mật khẩu.";
//         }
//     } else {
//         echo "Không tìm thấy tài khoản.";
//     }

//     $stmt->close();
// }

// $conn->close();
?> 
