<?php 


include('../include/configuracion.php');


if(isset($_GET['songId']) && isset($_GET['listId']))
	{
		$listId = $_GET['listId'];
		$songId = $_GET['songId'];
		
		$sql="DELETE FROM cancionLista WHERE id_lista='$listId' AND id_cancion='$songId'";
		mysql_query($sql) or die(mysql_error());
		mysql_close($link);

		
	}
	
	
?>