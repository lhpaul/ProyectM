<?php 


include('../include/configuracion.php');


if(isset($_GET['listId']))
	{
		$listId = $_GET['listId'];
		
		$sql="DELETE FROM cancionLista WHERE id_lista='$listId'";
		mysql_query($sql) or die(mysql_error());
		
		$sql="DELETE FROM lista WHERE id='$listId'";
		mysql_query($sql) or die(mysql_error());
		
		mysql_close($link);

		
	}
	
	
?>