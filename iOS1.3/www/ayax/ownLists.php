<?php 


include('../include/configuracion.php');


if(isset($_GET['q']))
	{
	
	// Search By Name or Email
	$strSQL = "SELECT * FROM cancion WHERE (id_usuario = '".$_GET["q"]."')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	$Num_Rows = mysql_num_rows($objQuery);

	$objQuery  = mysql_query($strSQL);
	
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#" >'.$objResult["nombre"].'</a></li>';
	}
	

	}	
	
	
?>