<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT id_cancion FROM cancionLista WHERE id_lista = ".$_GET['id'];
			$objQuery = mysql_query($strSQL);
			
			
			while($resultado = mysql_fetch_array($objQuery))
			{
			
			$strSQL2 = "SELECT * FROM cancion WHERE id = ".$resultado['id_cancion'];
			$objQuery2 = mysql_query($strSQL2);
			$resultado2 = mysql_fetch_array($objQuery2);
			
		echo 'myPlaylist.add({
			title:"'.$resultado2['filename'].'",
			artist:".'.$resultado2['artista'].'",
			mp3:"'.$resultado2['href'].'"
		});';
			
			}
		


	}	
	
	
?>