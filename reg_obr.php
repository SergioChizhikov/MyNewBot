<?php
header('Content-Type: text/html; charset=utf-8');



$mysqli = mysqli_connect($host, $user, $password, $db);


if (!empty($_POST["name"]) && !empty($lastname = $_POST["lastname"])) {
  $name = $_POST["name"];
  $lastname = $_POST["lastname"];
  $email = trim(mb_strtolower($_POST["email"]));
  $pass = trim($_POST["pass"]);
  $pass = password_hash($pass, PASSWORD_DEFAULT);

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  // var_dump($result->num_rows);

  if ($result->num_rows != 0) {
    print('exist');
  } else {
    print("ok");
    $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name', '$lastname', '$email', '$pass')");
    // mail('se@napli.ru', 'Тестовой письмо с приветом', "Привет, Сергей. Вот тебе данные: $name $lastname");
  }
} else {
  echo "empty";

}




  //Пример подготовленного запроса
  // $sql = "INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES (?, ?, ?, ?)";
  // $stmt = $mysqli->prepare($sql);
  // $stmt->bind_param("ssss", $name, $lastname, $email, $pass);
  // $stmt->execute();
