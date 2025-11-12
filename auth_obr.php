<?php
session_start();
header('Content-Type: text/html; charset=utf-8');



$mysqli = mysqli_connect($host, $user, $password, $db);

$email = trim(mb_strtolower($_POST['email']));
$pass = trim($_POST['pass']);

$result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
$result = $result->fetch_assoc();

if (password_verify($pass, $result['pass'])) {
  $_SESSION['id'] = $result['id'];
  $_SESSION['name'] = $result['name'];
  $_SESSION['lastname'] = $result['lastname'];
  $_SESSION['email'] = $result['email'];

  print("success");
} else {
  print("error");
}


// if ($result->num_rows == 0) {
//   echo "Пользователя нет";
// } else {
//   echo "Успешная авторизация";
// }
