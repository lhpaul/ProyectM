$(document).bind("mobileinit", function(){
	$.mobile.pushStateEnabled = true;
});

		$(function(){
			var menuStatus;
			

			// Show menu
			$("a.showMenu").click(function(){
				//alert(menuStatus);
				if(menuStatus != true){	
				document.getElementById("menu").style.visibility = 'visible';	
				$(".current").animate({
					marginLeft: '165px'
				  }, 300, function(){
					  menuStatus = true;
					});
				  return false;
				  } else {
					$(".current").animate({
					marginLeft: "0px"
				  }, 300, function(){
					  menuStatus = false;
					  document.getElementById("menu").style.visibility = 'hidden';
					});
					return false;
				  }
			});
			

			$('#jqt').swipe(function(evt, data) {
                    if(data.deltaX >= 40){
                    	if (!menuStatus){
							document.getElementById("menu").style.visibility = 'visible';	
							$(".current").animate({
							marginLeft: "165px",
				  			}, 300, function(){
					 		 menuStatus = true;
							});
				  }
                    }else if(data.deltaX <= -5){
                    	if (menuStatus){
							$(".current").animate({
								marginLeft: "0px",
				  			}, 300, function(){
					  			menuStatus = false;
					  			document.getElementById("menu").style.visibility = 'hidden';
							});
				  }
                    }
                    
                });
			
			
			// Menu behaviour
			$("#menu li a").click(function(){

				$('.currentSeccion').removeClass('currentSeccion');
				$(this).parent().addClass('currentSeccion');

				//alert($(".p").length);
				$(".current").css("margin-left","0");
				menuStatus = false;
				document.getElementById("menu").style.visibility = 'hidden';
			});

			$("#jqt li a").click(function(){

				//alert($(".p").length);
				$(".current").css("margin-left","0");
				menuStatus = false;
				document.getElementById("menu").style.visibility = 'hidden';
			});
		
			// Tabs 
			$('div[data-role="navbar"] a').live('click', function () {
				$(this).addClass('ui-btn-active');
				$('div.content_div').hide();
				$('div#' + $(this).attr('data-href')).show();
			});


});	