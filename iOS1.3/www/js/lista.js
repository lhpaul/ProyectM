$("#ownLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
                
				var options = document.getElementById('editableList');
				options.style.visibility = 'visible';
				options.style.height = '';
				options.style.margin = ".5em 0 1em";
				
				options = document.getElementById('notEditableList');
				options.style.visibility = 'hidden';
				options.style.height = '0px';
				options.style.margin = ".5em 0 0em";
				
				return true;

			});
$("#friendLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
                
                var options = document.getElementById('notEditableList');
				options.style.visibility = 'visible';
				options.style.height = '';
				options.style.margin = ".5em 0 1em";
				
				options = document.getElementById('editableList');
				options.style.visibility = 'hidden';
				options.style.height = '0px';
				options.style.margin = ".5em 0 0em";
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
			var doneBtn = document.getElementById("doneBtn");
			doneBtn.style.visibility = "hidden";
			doneBtn.style.height = "0px";
			
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
	var doneBtn = document.getElementById("doneBtn");
	doneBtn.style.visibility = "visible";
	doneBtn.style.height = "38px";
	doneBtn.setAttribute("onClick", "editReady(this)");
	
	var options = document.getElementById('editableList');
	options.style.visibility = 'hidden';
	options.style.height = '0px';
	options.style.margin = ".5em 0 0em";
	
	
	$('#songlist li a').each(function() {
		var songId = this.getAttribute('songId');
		this.setAttribute("href", "#"); 
		this.setAttribute("onClick", "return false;");
		//var icon = this.parentNode.parentNode.getElementsByTagName("span")[0];
		//this.parentNode.parentNode.removeChild(icon);
		var del = document.createElement("a");
		del.setAttribute('id', 'delBtn');
		del.setAttribute('class', 'ui-li-link-alt ui-btn ui-btn-up-c ui-corner-tr');
		del.setAttribute('onClick', 'deleteSong('+songId+')');
		del.innerHTML ='<span class="ui-btn-inner ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span title="" class="ui-btn ui-btn-icon-notext ui-btn-corner-all ui-shadow ui-btn-up-b"><span class="ui-btn-inner ui-btn-corner-all ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span class="ui-icon ui-icon-delete ui-icon-shadow"></span></span></span></span>';
		this.parentNode.parentNode.parentNode.appendChild(del);
		})
		
		$('#songlist').listview("refresh");
		
		
	//var list = $( "#ListsInfo" ).find( "#songlist" );
	//alert(list.length);
}

function editReady(btn)
{
	//alert("ready");
	
	var doneBtn = document.getElementById("doneBtn");
	doneBtn.style.visibility = "hidden";
	doneBtn.style.height = "0px";
	
	var options = document.getElementById('editableList');
	options.style.visibility = 'visible';
	options.style.height = '';
	options.style.margin = ".5em 0 1em";
	
	
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

function deleteSong(songId)
{
	$.mobile.showPageLoadingMsg();
	var listId = document.getElementById('ListsInfo').getAttribute("listId");
	//alert(songId+" "+listId);
	
	var dir = host + "ayax/deleteSong.php?songId="+songId+"&listId="+listId;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
     					//alert(msg);
     					$('#songlist li a').each(function() {
     						if(this.getAttribute('songId') == songId)
     						{
     							this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
     							$('#songlist').listview("refresh");
     							$.mobile.hidePageLoadingMsg();
     							return false;
     						}
     					})
						});

					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
	
	return false;
}

function clearList()
{
	
}

function editOwnLists()
{
	var options = document.getElementById('doneBtn2');
	options.style.visibility = 'visible';
	options.style.height = '';
	options.style.margin = ".5em 0 1em";
				
	options = document.getElementById('ownListOptions');
	options.style.visibility = 'hidden';
	options.style.height = '0px';
	options.style.margin = ".5em 0 0em";
	
	$('#owns li a').each(function() {
		var listId = this.getAttribute('listId');
		this.setAttribute("href", "#"); 
		this.setAttribute("onClick", "return false;");
		var del = document.createElement("a");
		del.setAttribute('id', 'delBtn');
		del.setAttribute('class', 'ui-li-link-alt ui-btn ui-btn-up-c ui-corner-tr');
		del.setAttribute('onClick', 'deleteList('+listId+')');
		del.innerHTML ='<span class="ui-btn-inner ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span title="" class="ui-btn ui-btn-icon-notext ui-btn-corner-all ui-shadow ui-btn-up-b"><span class="ui-btn-inner ui-btn-corner-all ui-corner-tr"><span class="ui-btn-text ui-corner-tr"></span><span class="ui-icon ui-icon-delete ui-icon-shadow"></span></span></span></span>';
		this.parentNode.parentNode.parentNode.appendChild(del);
		})
		
		$('#owns').listview("refresh");
}

function editOwnListsReady()
{
	var doneBtn = document.getElementById("doneBtn2");
	doneBtn.style.visibility = "hidden";
	doneBtn.style.height = "0px";
	
	var options = document.getElementById('ownListOptions');
	options.style.visibility = 'visible';
	options.style.height = '';
	options.style.margin = ".5em 0 1em";
	
	
	$('#owns li a').each(function() {
		this.setAttribute("href", "#ListsInfo"); 
		})
		$('#owns li #delBtn').each(function() {
			this.parentNode.removeChild(this);
		})
		$('#owns').listview("refresh");
}

function addNewList()
{
	
}

function deleteList(listId)
{
	alert(listId);
}




