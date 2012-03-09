<?php 


include('../include/configuracion.php');

if(isset($_GET['q']))
	{
	
	$strSQL = "SELECT * FROM lista WHERE (nombre LIKE '%".$_GET["q"]."%')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	
	$objQuery  = mysql_query($strSQL);
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#ListsInfo" onclick="OpenList('.$objResult['id'].');" >'.$objResult["nombre"].'</a></li>';
	}
	
	}
	
	
?>