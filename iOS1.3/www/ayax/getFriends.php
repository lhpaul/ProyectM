<?php 

$json = $_POST['friends'];
$friends = json_decode($json, true);
$result = array();

include('../include/configuracion.php');

$o = 0;

if(isset($friends))
	{
		for ($i = 1; $i <= sizeof($friends); $i++) {
    		if(mysql_num_rows(mysql_query("SELECT 1 FROM tz_members as t inner join lista as l on t.id = l.id_usuario  WHERE facebookid = '".$friends[$i]["id"]."'"))){
				$result["friends"][$o] = $friends[$i];
				$o = $o+1;
				}
		}

	}else
		$result["error"]="Conection problem on the server.";
	
	echo json_encode($result);
	
	
	
	
	
?>