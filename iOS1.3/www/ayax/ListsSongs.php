<?php 


include('../include/configuracion.php');

if(isset($_GET['q']))
	{
	
	$strSQL = "SELECT * FROM tz_members natural join lista WHERE (facebookid = '".$_GET["q"]."')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	
	$objQuery  = mysql_query($strSQL);
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#" >'.$objResult["nombre"].'</a></li>';
	}
	
	}
	
	
?>