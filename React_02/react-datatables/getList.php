<?php 
$servername = "localhost";
$username = "root";
$password = "rootmodern";
$dbname = "mysql";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$trp = mysqli_query($conn, "SELECT * FROM users");
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
print json_encode($rows);
?>