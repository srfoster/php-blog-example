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

  $query = "SELECT * FROM posts JOIN users ON posts.user_id = users.id;";

  $statement = $db->prepare($query);
  $statement->execute();
  $results = $statement->fetchAll();
  $statement->closeCursor();

  echo json_encode($results);
?>
