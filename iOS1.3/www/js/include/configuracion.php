<?php

	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$db = 'moonsik';
	
	
$link = @mysql_connect($host,$user,$pass) or die("Ocurri� un error al intentar conectar. Verifica que est�n correctamente los datos dentro de <strong>config.php</strong>.");
	@mysql_select_db($db) or die("Error al seleccionar la base de datos. Posiblemente no existe.");



?>