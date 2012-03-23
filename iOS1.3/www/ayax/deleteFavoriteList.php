<?php 


include('../include/configuracion.php');


if(isset($_GET['userId']) && isset($_GET['listId']))
	{
		$listId = $_GET['listId'];
		$userId = $_GET['userId'];
		
		$sql="DELETE FROM favList WHERE idLista='$listId' AND idUser='$userId'";
		mysql_query($sql) or die(mysql_error());
		mysql_close($link);

		
	}
	
	
?>