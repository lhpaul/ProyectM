<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT * FROM cancionLista WHERE  id_lista = ".$_GET['id'];
			$objQuery = mysql_query($strSQL);			
			
			$i = 0;
			while($resultado = mysql_fetch_array($objQuery))	{
						
			$strSQL2 = "SELECT filename FROM cancion WHERE id = ".$resultado['id_cancion'];
			$objQuery2 = mysql_query($strSQL2);
			$resultado2 = mysql_fetch_array($objQuery2);		
			
		if($i == 0)
		{
		echo '<li id="valorlista" idlista="'.$_GET['id'].'"><a href="#songinfo" onclick="SongInfo('.$resultado['id_cancion'].');">'.$resultado2['filename'].'</a></li>';
		}
		
		else
		{
		echo '<li><a href="#songinfo" onclick="SongInfo('.$resultado['id_cancion'].');">'.$resultado2['filename'].'</a></li>';
		}
		$i++;

	}

}	
	
	
?>