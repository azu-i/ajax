<?php

$words = $_POST['inputwords'];

$DBO = new DBO();

$DBO->insert($words);

class DBO
{
	const DSN = "mysql:host=localhost;dbname=shop;charset=utf8";
	const USER = "root";
	const PASS = "root";
	const TABLE = "test";

	private $pdo;

  public function __construct()
  {
    $this->pdo = new PDO(self::DSN, self::USER, self::PASS);
  }

  public function pdo()
  {
    return $this->pdo;
  }

  public function insert($words)
  {
  	$table = self::TABLE;
  	foreach ($words as $word) {
  		$st = $this->pdo->query("INSERT INTO `$table`(`name`) VALUES ($word)");
  	}
  }

}

?>