<?php
  $servername = "localhost";
  $username = "u818437894_munus_user";
  $password = "2024@Munus";
  $database = "u818437894_munus";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
?>
