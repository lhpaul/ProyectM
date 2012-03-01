<?php 


include('../include/configuracion.php');


if(isset($_GET['q']))
	{
	
	// Search By Name or Email
	$strSQL = "SELECT * FROM cancion WHERE (filename LIKE '%".$_GET["q"]."%' or titulo LIKE '%".$_GET["q"]."%')";
	$objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
	$Num_Rows = mysql_num_rows($objQuery);


	$Per_Page = 10;   // Per Page
if(isset($_GET["Page"]))
{
	$Page = $_GET["Page"];
	}
	
	else
	{
		$Page=1;
	}

	$Prev_Page = $Page-1;
	$Next_Page = $Page+1;

	$Page_Start = (($Per_Page*$Page)-$Per_Page);
	if($Num_Rows<=$Per_Page)
	{
		$Num_Pages =1;
	}
	else if(($Num_Rows % $Per_Page)==0)
	{
		$Num_Pages =($Num_Rows/$Per_Page) ;
	}
	else
	{
		$Num_Pages =($Num_Rows/$Per_Page)+1;
		$Num_Pages = (int)$Num_Pages;
	}


	$strSQL .=" order  by id ASC LIMIT $Page_Start , $Per_Page";
	$objQuery  = mysql_query($strSQL);
	
	while($objResult = mysql_fetch_array($objQuery))
	{
	
	
	
	echo '<li><a href="#songinfo" onclick="SongInfo('.$objResult["id"].');" >'.$objResult["filename"].'</a></li>';
	}
	
	?>

	
	<br>

	<?php
	

	
	


	}	
	
	
?>