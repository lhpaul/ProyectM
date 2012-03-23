<?php 


include('../include/configuracion.php');


if(isset($_GET['listId']) && isset($_GET['userId']))
	{
		$userId = $_GET['userId'];
		$listId = $_GET['listId'];
		
		$sql="INSERT INTO favList(idUser, idLista) VALUES ('$userId','$listId')";
		$resultado=mysql_query($sql,$link);
		echo $resultado;
		mysql_close($link);

		
	}else
		echo "nop";
	
	
?>