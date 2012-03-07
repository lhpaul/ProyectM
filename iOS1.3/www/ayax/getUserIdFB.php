<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT id FROM tz_members WHERE facebookid = '".$_GET['id']."'";
			$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
			$resultado = mysql_fetch_array($objQuery);
			
			
		echo $resultado['id'];
			
		


	}	
	
	
?>