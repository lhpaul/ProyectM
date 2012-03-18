<?php 


include('../include/configuracion.php');


if(isset($_GET['userId']) && isset($_GET['name']) && ($_GET['privacy']))
	{
		$userId = $_GET['userId'];
		$name = $_GET['name'];
		$privacy = $_GET['privacy'];
		
		$sql="INSERT INTO lista(id_usuario, nombre, public) VALUES ('$userId','$name',$privacy)";
		$resultado=mysql_query($sql,$link);
		echo $resultado;
		mysql_close($link);

		
	}else
		echo "no entra";
	
	
?>
