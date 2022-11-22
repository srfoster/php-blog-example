<?php
  $dsn = 'mysql:host=localhost;dbname=blog';
  $username = "root";
  $password = "";

  try {
   $db = new PDO($dsn, $username, $password);
   $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  catch (PDOException $e) {
    echo "Error, database is likely not created.";
  }

  $query = "DELETE FROM posts WHERE id = :id";

  $statement = $db->prepare($query);
  $statement->bindValue("id", $lastElement);
  $statement->execute();

  $statement->closeCursor();

  echo "{\"message\": \"Blog post deleted!\"}";
?>
