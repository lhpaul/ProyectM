<?php 


include('../include/configuracion.php');

if(isset($_GET['q']))
	{
	
	$strSQL = "SELECT lista.nombre as nombre, lista.id as id FROM tz_members natural join lista WHERE (facebookid = '".$_GET["q"]."')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	
	$objQuery  = mysql_query($strSQL);
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#ListsInfo" onclick="OpenList('.$objResult["id"].');" >'.$objResult["nombre"].'</a></li>';
	}
	
	
	}
	
	
?>