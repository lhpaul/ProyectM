<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT * FROM cancion WHERE id = ".$_GET['id'];
			$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
			$resultado = mysql_fetch_array($objQuery);
			
			
		echo $resultado['filename'].';'.$resultado['href'];
			
		


	}	
	
	
?>