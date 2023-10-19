<?php 
    $nombreRegistro = $_POST['nombreRegistro'];
    $telefonoRegistro = $_POST['telefonoRegistro'];
    $tipoDeDocumento = $_POST['tipoDeDocumento'];
    $numeroDeDocumento = $_POST['numeroDeDocumento'];
    $correoRegistro = $_POST['correoRegistro'];
    $contraseñaRegistro = $_POST['contraseñaRegistro'];
    $emisor = $_POST['emisor'];

    $conn = new mysqli('localhost','root','','boostin');
    if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
    } else {
		$stmt = $conn->prepare("insert into usuario(NOMBRE, TELEFONO, TIPO_DOCUMENTO, DOCUMENTO, CORREO, CONTRASEÑA) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sisiss", $nombreRegistro, $telefonoRegistro, $tipoDeDocumento, $numeroDeDocumento, $correoRegistro, $contraseñaRegistro);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
    }
?>