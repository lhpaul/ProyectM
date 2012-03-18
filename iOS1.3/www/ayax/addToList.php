<?php 


include('../include/configuracion.php');


if(isset($_GET['songId']) && isset($_GET['listId']))
	{
		$listId = $_GET['listId'];
		$songId = $_GET['songId'];
		
		$sql="INSERT INTO cancionLista(id_lista, id_cancion) VALUES ('$listId','$songId')";
		$resultado=mysql_query($sql,$link);
		mysql_close($link);

		
	}
	
	
?>