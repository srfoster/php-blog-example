<?php



 $array = explode("/",$_SERVER['REQUEST_URI']);

 $lastElement = $array[count($array) - 1];

 # Basic routing for REST API requests:
 
 if($lastElement == "blogs")
   include("blogs.php");
 else
   include("users.php");


 ?>
