$("#ownLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
                
				document.getElementById('editableList').style.visibility = 'visible';
				document.getElementById('editableList').style.height = '';
				document.getElementById('editableList').style.margin = ".5em 0 1em";
				
				document.getElementById('notEditableList').style.visibility = 'hidden';
				document.getElementById('notEditableList').style.height = '0px';
				document.getElementById('notEditableList').style.margin = ".5em 0 0em";
				
				return true;

			});
$("#friendLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
				document.getElementById('notEditableList').style.visibility = 'visible';
				document.getElementById('notEditableList').style.height = '';
				document.getElementById('notEditableList').style.margin = ".5em 0 1em";
				
				document.getElementById('editableList').style.visibility = 'hidden';
				document.getElementById('editableList').style.height = '0px';
				document.getElementById('editableList').style.margin = ".5em 0 0em";
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
			
			$( '#ListsInfo' ).live( 'pagebeforeshow',function(event, ui)
			{
				
			var list = $( "#ListsInfo" ).find( "#songlist" );
			list.empty();
			
			});
			
$( '#ListsInfo' ).live( 'pagebeforeshow',function(event, ui)
			{
				
			var list = $( "#ListsInfo" ).find( "#songlist" );
			list.empty();
			
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
							list.append(msg);
							$('#songlist').listview("refresh");
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

function editList(btn)
{
	alert("llega");
	
	btn.getElementsByTagName("span")[1].innerHTML = "Done";
	btn.setAttribute("onClick", "editReady(this)");
	
	$('#songlist li a').each(function() {
		var songId = this.getAttribute('songId');
		this.setAttribute("href", "#"); 
		this.setAttribute("onClick", "alert("+songId+");");
		//var icon = this.parentNode.parentNode.getElementsByTagName("span")[0];
		//this.parentNode.parentNode.removeChild(icon);
		var del = document.createElement("a");
		del.setAttribute('id', 'delBtn');
		del.setAttribute('class', 'ui-li-link-alt ui-btn ui-btn-up-c ui-corner-tr');
		del.innerHTML ='<span class="ui-btn-inner ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span title="" class="ui-btn ui-btn-icon-notext ui-btn-corner-all ui-shadow ui-btn-up-b"><span class="ui-btn-inner ui-btn-corner-all ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span class="ui-icon ui-icon-delete ui-icon-shadow"></span></span></span></span>';
		this.parentNode.parentNode.parentNode.appendChild(del);
		})
		
		//alert($( "#songlist li").length);
		//list.append('<a href="#" data-role="button" data-icon="delete" data-iconpos="notext">Delete</a>');
		$('#songlist').listview("refresh");
		
		
	//var list = $( "#ListsInfo" ).find( "#songlist" );
	//alert(list.length);
}

function editReady(btn)
{
	alert("ready");
	
	btn.getElementsByTagName("span")[1].innerHTML = "Edit";
	btn.setAttribute("onClick", "editList(this)");
	
	$('#songlist li a').each(function() {
		this.setAttribute("href", "#songinfo"); 
		this.setAttribute("onClick", "SongInfo("+this.getAttribute('songId')+")");
		//alert(this.innerHtml) 
		})
		$('#songlist li #delBtn').each(function() {
			this.parentNode.removeChild(this);
		})
		$('#songlist').listview("refresh");
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


