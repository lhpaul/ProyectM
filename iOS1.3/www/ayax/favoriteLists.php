<?php 


include('../include/configuracion.php');

if(isset($_GET['userId']))
	{
	$userId = $_GET['userId'];
	// Search By Name or Email
	$strSQL = "SELECT id, nombre FROM lista inner join favList on lista.id = favList.idLista WHERE (favList.idUser = '".$userId."')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	$Num_Rows = mysql_num_rows($objQuery);
	if($Num_Rows){
	$objQuery  = mysql_query($strSQL);
	
	while($objResult = mysql_fetch_array($objQuery))
	{
	echo '<li><a href="#ListsInfo" listId="'.$objResult['id'].'" >'.$objResult["nombre"].'</a></li>';
	}
	
	}else
		echo "You currently dont have any favorite Lists.";
	

	}	
	
	
?>