<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT * FROM cancionLista WHERE  id_lista = ".$_GET['id'];
			$objQuery = mysql_query($strSQL);			
			
			while($resultado = mysql_fetch_array($objQuery))	{
						
			$strSQL2 = "SELECT filename FROM cancion WHERE id = ".$resultado['id_cancion'];
			$objQuery2 = mysql_query($strSQL2);
			$resultado2 = mysql_fetch_array($objQuery2);
		echo '<li><a href="#songinfo" onclick="SongInfo('.$resultado['id_cancion'].');">'.$resultado2['filename'].'</a></li>';
			
		


	}

}	
	
	
?>