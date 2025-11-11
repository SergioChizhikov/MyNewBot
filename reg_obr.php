<?php
header('Content-Type: text/html; charset=utf-8');


$mysqli = mysqli_connect($host, $user, $password, $db);

if ($mysqli == false) {
  print("Ошибка: Невозможно подключиться к MySQL ");
} else {
  //print("Соединение установлено успешно");
  $name = $_POST["name"];
  $lastname = $_POST["lastname"];
  $email = $_POST["email"];
  $pass = $_POST["pass"];

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  // var_dump($result->num_rows);

  if ($result->num_rows != 0) {
    print('exist');
  } else {
    print("ok");
    $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name', '$lastname', '$email', '$pass')");
  }



  //Пример подготовленного запроса
  // $sql = "INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES (?, ?, ?, ?)";
  // $stmt = $mysqli->prepare($sql);
  // $stmt->bind_param("ssss", $name, $lastname, $email, $pass);
  // $stmt->execute();
}
