var host = "";



$(document).bind("mobileinit", function(){
	$.mobile.pushStateEnabled = true;
	$.mobile.allowCrossDomainPages = true;
	$.support.touchOverflow = true;
   $.mobile.touchOverflowEnabled = true;




});



		$(function(){
			var menuStatus;



			// Show menu

			$("a.showMenu").live("click", function (event) {			
			  document.getElementById("bplayer").style.left = "-2000px";
				if(menuStatus != true){	
				document.getElementById("menu").style.visibility = 'visible';	
				$(".ui-page-active").animate({
					marginLeft: '165px'

				  }, 300, function(){
					  menuStatus = true;
					   //$.mobile.loadPage( "ownLists.html" );
            			//$.mobile.loadPage( "friends.html" );

					});

				  return true;

				  } else {

					$(".ui-page-active").animate({

					marginLeft: "0px"

				  }, 300, function(){

					  menuStatus = false;
					  document.getElementById("menu").style.visibility = 'hidden';

					});

					return true;

				  }
				  
				  
					

			});

			

			

			// Menu behaviour

			$("#menu li a").live("click", function (event) {



				//$.mobile.loadPage(this.getAttribute("goTo")+".html");
				$('.currentSeccion').removeClass('currentSeccion');
				$(this).parent().addClass('currentSeccion');
				$(".ui-page-active").css("margin-left","0");
				menuStatus = false;
				document.getElementById("menu").style.visibility = 'hidden';
				return true;

			});



			$(".content-primary a").live("click", function (event) {



				$(".ui-page-active").css("margin-left","0");

				menuStatus = false;

				document.getElementById("menu").style.visibility = 'hidden';



				return true;

			});



			/*$("#ownLists .tabs li a, #favoriteLists .tabs li a").live("click", function (event) {
				alert(this.getAttribute("tab"));
				$.mobile.loadPage(this.getAttribute("tab")+".html");
				return true;

			});*/

			



			$( '#ownLists' ).live( 'pageshow',function(event, ui)
			{
				$.mobile.showPageLoadingMsg();
				if(userId){
				changeOwnLists();
				}
			});



			$( '#favoriteLists' ).live( 'pageshow',function(event, ui)
			{	$.mobile.showPageLoadingMsg();
  				var list = $( "#favoriteLists" ).find( "#favorites" );
				list.empty();
				var html = '<li><a href="acura.html">Acura</a></li> <li><a href="audi.html">Audi</a></li><li><a href="bmw.html">BMW</a></li>';
				list.append(html);
				$('#favorites').listview("refresh");
				//$.mobile.loadPage("ownLists.html");
				$.mobile.hidePageLoadingMsg();

			});





			$("#searchMusic #musicForm").submit(function() {
  				var search = this.elements[0].value;
  				if(search == 0)
  				return false;
  				$.mobile.showPageLoadingMsg();	
  				var dir = host + "ayax/busqueda2.php?q="+search;
  					//alert(dir);

					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,

     					});

     				request.done(function(msg) {
  							var list = $( "#searchMusic" ).find( "#music" );
							list.empty();
							list.append(msg);
							$('#music').listview("refresh");

						});



					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );

						});
				$.mobile.hidePageLoadingMsg();
    			return false;

			});



			$("#searchLists #searchForm").submit(function() {

  				var search = this.elements[0].value;
  				if(search == 0)
  				return false;
  				$.mobile.showPageLoadingMsg();	
  					var dir = host + "ayax/searchLists.php?q="+search;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
  							var list = $( "#searchLists" ).find( "#lists" );
							list.empty();
							list.append(msg);
							$('#lists').listview("refresh");
						});



					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
						});

				$.mobile.hidePageLoadingMsg();

    			return false;

			});





			$( '#friends' ).live( 'pageshow',function(event, ui)
			{
				//alert(this.getAttribute("status"));
				if(this.getAttribute("status"))
				{
				$.mobile.showPageLoadingMsg();
  				getFriends();
  				this.removeAttribute("status");
				//$.mobile.loadPage("ownLists.html");
				//$.mobile.hidePageLoadingMsg();
			}

			//alert(this.getAttribute("status"));

			});





});

