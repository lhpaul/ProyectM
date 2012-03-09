<?php 


include('../include/configuracion.php');

if(isset($_GET['q']))
	{
	
	$strSQL = "SELECT * FROM (tz_members as m inner join lista as l on m.id = l.id_usuario) WHERE (facebookid = '".$_GET["q"]."')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	$Num_Rows = mysql_num_rows($objQuery);
	
	if($Num_Rows){
	$objQuery  = mysql_query($strSQL);
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#" >'.$objResult["nombre"].'</a></li>';
	}
	
	}else
		echo "Sorry but your friends doesnt have any list shared.";
	
	}
	
	
?>