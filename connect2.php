<?php 
    $emisor = $_POST['emisor'];
    $mensaje = $_POST['mensaje'];

  $conn2 = new mysqli('localhost','root','','boostin');
  if($conn2->connect_error){
		echo "$conn2->connect_error";
		die("Connection Failed : ". $conn2->connect_error);
    } else {
		$stmt2 = $conn2->prepare("insert into mensajes(EMISOR, MENSAJE) values(?, ?)");
		$stmt2->bind_param("ss", $emisor, $mensaje);
		$execval2 = $stmt2->execute();
		echo $execval2;
		echo "mensaje enviado...";
		$stmt2->close();
		$conn2->close();
  }
?>