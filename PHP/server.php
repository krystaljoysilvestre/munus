<?php
  include 'db_connection.php';

  header('Access-Control-Allow-Origin: http://localhost:3000');

  // Check if form is submitted
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Retrieve email
      $email = $_POST['email'];

      // Sanitize the data (prevent SQL injection)
      $email = mysqli_real_escape_string($conn, $email);

      // Insert data into database
      $sql = "INSERT INTO open_office (email) VALUES ('$email')";

      if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
  }

  // Close connection
  $conn->close();
?>
