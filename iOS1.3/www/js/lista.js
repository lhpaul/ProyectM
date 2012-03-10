$("#ownLists li a, #friendLists li a").live("click", function (event) {
				
				var id = this.getAttribute("listId");
				//alert(id);
				document.getElementById('ListsInfo').setAttribute("listId", id);
				var title = $( "#ListsInfo" ).find( "#headerTitle" );
                title.empty();
                title.append(this.innerHTML);
				return true;

			});

$( '#ListsInfo' ).live( 'pageshow',function(event, ui)
			{
				
			var id = this.getAttribute("listId");
			//alert(id);
			
			$.mobile.showPageLoadingMsg();	
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


