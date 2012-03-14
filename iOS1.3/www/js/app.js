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
				if(!menuStatus){	
				document.getElementById("menu").style.visibility = 'visible';	
				$(".ui-page-active").animate({
					marginLeft: '165px'
				  }, 300, function(){
					  menuStatus = true;
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
			
			//Swipe events para el menu
			$("body").swiperight(function() {
				if(!menuStatus)
				document.getElementById("menu").style.visibility = 'visible';	
				$(".ui-page-active").animate({
					marginLeft: '165px'
				  }, 300, function(){
					  menuStatus = true;
					});
				  return true;
				});
				
				$("body").swipeleft(function() {
				if(menuStatus)
				$(".ui-page-active").animate({
					marginLeft: "0px"
				  }, 300, function(){
					  menuStatus = false;
					  document.getElementById("menu").style.visibility = 'hidden';
					});
					return true;
				});


			// Menu behavior
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
			
			$("#friends li a").live("click", function (event) {
				
				var id = this.getAttribute("fbId");
				//alert(id);
				document.getElementById('friendLists').setAttribute("fbId", id);
				return true;

			});

			
		//cuando se apreta el reproductor
		$( '#reproductor' ).live( 'pageshow',function(event, ui)
			{
			document.getElementById('bplayer').style.left = '0px';
			});




			$( '#ownLists' ).live( 'pageshow',function(event, ui)
			{
				if(userId){
					if(this.getAttribute("status"))
						{
  							this.removeAttribute("status");
  						}else
  						changeOwnLists();
				}
			});



			$( '#favoriteLists' ).live( 'pageshow',function(event, ui)
			{	
				if(this.getAttribute("status"))
						{
							
				$.mobile.showPageLoadingMsg();
  				var list = $( "#favoriteLists" ).find( "#favorites" );
				list.empty();
				var html = '<li><a href="acura.html">Acura</a><a href="#" data-role="button" data-icon="delete" data-iconpos="notext">Delete</a></li><li><a href="audi.html">Audi</a></li><li><a href="bmw.html">BMW</a></li>';
				list.append(html);
				$('#favorites').listview("refresh");
				//$.mobile.loadPage("ownLists.html");
				$.mobile.hidePageLoadingMsg();
							
  							this.removeAttribute("status");
  							//$.mobile.showPageLoadingMsg();
  						}
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
							$.mobile.hidePageLoadingMsg();

						});



					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
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
							$.mobile.hidePageLoadingMsg();
						});



					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});


    			return false;

			});





			$( '#friends' ).live( 'pageshow',function(event, ui)
			{
				/*alert(friendsReady);
				if(this.getAttribute("status"))
				{
  				this.removeAttribute("status");
  				}*/
  				if(!friendsReady)
				$.mobile.showPageLoadingMsg();


			});
			
			
			$( '#friendLists' ).live( 'pagebeforeshow',function(event, ui)
			{
				
			var list = $( "#friendLists" ).find( "#flists" );
			list.empty();
			
			});
			
			
			$( '#friendLists' ).live( 'pageshow',function(event, ui)
			{
				
			var id = this.getAttribute("fbId");
			//alert(id);
			
			$.mobile.showPageLoadingMsg();	
  					var dir = host + "ayax/getFriendLists.php?q="+id;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});

     				request.done(function(msg) {
     						var list = $( "#friendLists" ).find( "#flists" );
							list.empty();
							list.append(msg);
							$('#flists').listview("refresh");
							$.mobile.hidePageLoadingMsg();
						});



					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
  							$.mobile.hidePageLoadingMsg();
						});
			
			});





});

