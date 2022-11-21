<?php
  $dsn = 'mysql:host=localhost;dbname=blog';
  $username = "root";
  $password = "";

  try {
   $db = new PDO($dsn, $username, $password);

  }
  catch (PDOException $e) {
    echo "Error, database is likely not created.";
  }

  $query = "DELETE posts WHERE id = :id";

  $statement = $db->prepare($query);
  $statement->bindParam("id", $lastElement, PDO::PARAM_INT);
  $statement->execute();


  $statement->closeCursor();

  echo "{\"message\": \"Blog post deleted!\"}";
?>
