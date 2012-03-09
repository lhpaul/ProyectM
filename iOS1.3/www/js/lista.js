//funcion que se carga al apretar el la secion #myownlist
function onLoadMyList()
{

var id = 1;

//Cambiar Nombre menu

     var list = $( "#menu" ).find( "#memberDetails" );
                list.empty();
                var name = GetFacebookName();
                var html = '<h3><span>'+name+'</span></h3>';
                list.append(html);

                var list = $( "#menu" ).find( "#menuList" );
                list.empty();
                var html = '<li><a href="#ownLists"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>My Lists</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#searchMusic"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Search</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#friends"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Friends</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#searchMusic"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Logout</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li>';
                list.append(html);





}


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
  							var list = $( "#ListsInfo" ).find( "#owns" );
							list.empty();
							list.append(msg);
							$('#owns').listview("refresh");
						});



}


