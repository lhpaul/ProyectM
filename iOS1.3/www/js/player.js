var myPlaylist;$(document).ready(function(){
	myPlaylist = new jPlayerPlaylist({
	jPlayer: "#jquery_jplayer_N",
	cssSelectorAncestor: "#jp_container_N"	}, 
	[		{			title:"Cro Magnon Man",
	artist:"The Stark Palace",
	mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
	}	], 
	{		playlistOptions: {
	enableRemoveControls: false		},	
	swfPath: "js",		supplied: "mp3"	});	

	});		
	
	
	
	function addToPlaylist(id)		{	
	var cancion;			
	var dir = host+ "ayax/cancion.php?id="+id; 
	/*alert(dir); */				
	$.ajax({ type: "GET", url: dir,	cache: false,success: function(html) {
	if(html){	
	cancion = html;		
	eval(cancion);
	document.getElementById("bplayer").style.left = "0px";
	}
	
	else
	alert('Sorry, unexpected error. Please try again later.');
	}     					
	});	
	}	


	function addAndPlay(id)	
	{						
	var cancion;
	var dir = host+ "ayax/cancion.php?id="+id;
	/*alert(dir);*/	
	$.ajax({
	type: "GET",
	url: dir,
	cache: false,
	success: function(html) {
	if(html){
	cancion = html;	
	eval(cancion);
	myPlaylist.play(-1);
	document.getElementById("bplayer").style.left = "0px";
	}else
	alert('Sorry, unexpected error. Please try again later.');	
	}
	});
	}	

	function SongInfo(id)	
	{
	$.mobile.showPageLoadingMsg(); 
	var list = $( "#songinfo" ).find( "#song" );
	list.empty();
	var html = '<li><a href="#reproductor" onclick="addAndPlay('+id+');" >Play</a></li> <li><a href="#addSong" data-transition="slideup" onclick="changeSongId('+id+');" >Add to List</a></li>';
	list.append(html);
	$('#song').listview("refresh");
	$.mobile.hidePageLoadingMsg();
	}	
	
	
	