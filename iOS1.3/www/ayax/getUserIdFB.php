<?php 


include('../include/configuracion.php');


if(isset($_GET['id']))
	{
	
			$strSQL = "SELECT id FROM tz_members WHERE facebookid = '".$_GET['id']."'";
			$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
			$Num_Rows = mysql_num_rows($objQuery);
			if($Num_Rows)
			{
				$resultado = mysql_fetch_array($objQuery);
				echo $resultado['id'];
			}else
				{
					echo "no esta";
				}
			
		


	}	
	
	
?>