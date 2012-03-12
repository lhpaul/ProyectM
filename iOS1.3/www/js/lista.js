$("#ownLists li a, #friendLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
				return true;

			});
			
$("#addSong li a").live("click", function (event) {
				
				$.mobile.showPageLoadingMsg();
				var listId = this.getAttribute("listId");
				//alert(listId);
				var songId = document.getElementById('addSong').getAttribute("songId");
				//alert(songId);
					
  					var dir = host + "ayax/addToList.php?songId="+songId+"&listId="+listId;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
     					//alert(msg);
     					$.mobile.hidePageLoadingMsg();
						});

					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
				
				return true;

			});

$( '#ListsInfo' ).live( 'pageshow',function(event, ui)
			{
			$.mobile.showPageLoadingMsg();		
			var id = this.getAttribute("listId");
			//alert(id);
			var list = $( "#ListsInfo" ).find( "#songlist" );
			list.empty();
			$('#songlist').listview("refresh");
			
  					var dir = host + "ayax/getList.php?id="+id;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
     					//alert(msg);
     						var list = $( "#ListsInfo" ).find( "#songlist" );
							list.empty();
							list.append(msg);
							$('#songlist').listview("refresh");
							$.mobile.hidePageLoadingMsg();
						});

					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
			
			});
			
			
$( '#addSong' ).live( 'pageshow',function(event, ui)
			{
				
			$.mobile.showPageLoadingMsg();	
  					var dir = host + "ayax/listsToAdd.php?q="+userId;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
     					//alert(msg);
     						var list = $( "#addSong" ).find( "#addToList" );
							list.empty();
							list.append(msg);
							$('#addToList').listview("refresh");
							$.mobile.hidePageLoadingMsg();
						});

					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
			
			});

function OpenList(id)
{

var dir = host + "ayax/getList.php?id="+id;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
  							var list = $( "#ListsInfo" ).find( "#songlist" );
							list.empty();
							list.append(msg);							
							$('#songlist').listview("refresh");
						});
}

function changeSongId(id)
{
	document.getElementById('addSong').setAttribute("songId", id);
}

function editList()
{
	
}

function playAll(id)
{


var dir = host+ "ayax/playAll.php?id="+id; 
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

function clearList()
{
	
}


