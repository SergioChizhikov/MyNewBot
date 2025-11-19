<?php
class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }
  function setHp($hp)
  {
    if ($this->hp + $hp > 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }

  function getFather()
  {
    return $this->father;
  }

  function getInfo()
  {
    return "<h3>Пара слов о моих родственниках: </h3><br>" . "Меня зовут - " . $this->getName() .
      "<br> А моя фамилия " . $this->getLastname() . "<br> Моего папу зовут " . $this->getFather();
  }

  function sayHi($name)
  {
    return "Hi, $name! I`m " . $this->name;
  }
}

// Здоровье человека не может быть больше 100 единиц


$igor = new Person("Igor", "Petrov", 62);

$alexey = new Person("Alexey", "Ivanov", 35);
$olga = new Person("Olga", "Ivanova", 34, null, $igor);
$valera = new Person("Valera", "Ivanov", 9, $olga, $alex);

echo $valera->getMother()->getFather()->getName();

// $medKit = 50;
// $alex->setHp(-30); //Шел и упал

// echo $alex->getHp() . "<hr>";

// $alex->setHp($medKit); //Нашел аптечку

// echo $alex->getHp();
