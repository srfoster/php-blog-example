<?php

 header('Access-Control-Allow-Origin: *');

 $array = explode("/",$_SERVER['REQUEST_URI']);

 $lastElement         = $array[count($array) - 1];
 $secondToLastElement = $array[count($array) - 2];

 # Basic routing for REST API requests:

 # GET /blogs should render JSON for all blogs in the db
 # DELETE /blogs/:id should delete blog with that :id

 if ($_SERVER['REQUEST_METHOD'] === 'GET') {
   if($lastElement == "blogs")
     include("blogs.php");
   else
     include("users.php");
 } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
   #If second to last is "blogs" and last is a number
   if($secondToLastElement === "blogs" && is_numeric($lastElement)){
     include("blogs-delete.php");
   } else {
     echo "Error, could not delete";
   }
 }




 ?>
