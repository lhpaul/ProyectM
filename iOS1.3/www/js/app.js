var host = "http://www.moonsik.com/iphone2/";

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
				if(menuStatus != true){	
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
			
			
			// Menu behaviour
			$("#menu li a").live("click", function (event) {

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

			

			$( '#ownLists' ).live( 'pageshow',function(event, ui)
			{
				$.mobile.showPageLoadingMsg();
  				var list = $( "#ownLists" ).find( "#owns" );
				list.empty();
				var html = '<li><a href="acura.html">Acura</a></li> <li><a href="audi.html">Audi</a></li><li><a href="bmw.html">BMW</a></li>';
				list.append(html);
				$('#owns').listview("refresh");
				$.mobile.hidePageLoadingMsg();
			});

			$( '#favoriteLists' ).live( 'pageshow',function(event, ui)
			{
				$.mobile.showPageLoadingMsg();
  				var list = $( "#favoriteLists" ).find( "#favorites" );
				list.empty();
				var html = '<li><a href="acura.html">Acura</a></li> <li><a href="audi.html">Audi</a></li><li><a href="bmw.html">BMW</a></li>';
				list.append(html);
				$('#favorites').listview("refresh");
				$.mobile.hidePageLoadingMsg();
			});


			$("#searchMusic #musicForm").submit(function() {
  				var search = this.elements[0].value;
  				if(search == 0)
  				return false;
  				$.mobile.showPageLoadingMsg();	
  					var dir = host+"ayax/busqueda2.php?q="+search;
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
  					var dir = host+"ayax/busqueda2.php?q="+search;
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


			

});


