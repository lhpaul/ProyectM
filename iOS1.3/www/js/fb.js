//if (typeof PhoneGap == 'undefined') alert('PhoneGap variable does not exist. Check that you have included phonegap.js correctly');
            //if (typeof PG == 'undefined') alert('PG variable does not exist. Check that you have included pg-plugin-fb-connect.js correctly');
            //if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');


var userId;
var userFbId;
var userFriends;
var friendsReady = false;


FB.Event.subscribe('auth.login', function(response) {
                //alert('auth.login event');
            });
            
            FB.Event.subscribe('auth.logout', function(response) {
                //alert('auth.logout event');
            });
            
            FB.Event.subscribe('auth.sessionChange', function(response) {
                //alert('auth.sessionChange event');
            });
            
            FB.Event.subscribe('auth.statusChange', function(response) {
                //alert('auth.statusChange event');
            });
            
            function getSession() {
                alert("session: " + JSON.stringify(FB.getSession()));
            }
            
            function isLogged() {
                FB.getLoginStatus(function(response) {
                    if (response.status == 'connected') {
                        return true
                    }
                    return false;
                });
            }
            
            
            function logout() {
            	userId = null;
				userFbId = null;
				userFriends  = null;
				friendsReady = false;
            	changeMenuBack();
                FB.logout(function(response) {
                    //alert('logged out');
                });
            }
            
            function login() {
                FB.login(
                    function(response) {
                        if (response.session) {
                        	cambiosDeLogeo(); 
                        } else {
                            alert('not logged in');
                        }
                    },
                    { perms: "email" }
                );
                return false;
            }
            
            function getFriends() {
                FB.api('/me/friends',{ fields: 'name,id,picture' } ,function(response) {
                	if (response.error) {
                    	alert(JSON.stringify(response.error));
                	} else {
                        var list = $( "#friends" ).find( "#friendsList" );
                        list.empty();
                        
                        var jsonObjects = response.data;
                        userFriends = response.data;
 
						jQuery.ajax({
          						url: "ayax/getFriends.php",
          						type: "POST",
          						data: {friends: JSON.stringify(jsonObjects) },
          						dataType: "json",
          						beforeSend: function(x) {
            						if (x && x.overrideMimeType)
            						{
              						x.overrideMimeType("application/j-son;charset=UTF-8");
            						}
          						},
          						success: function(result) {
          							if(result.error){
          							alert(result.error);
          							$.mobile.hidePageLoadingMsg();
          							}
          							else{
          								var friends = result["friends"];
          								//alert(JSON.stringify(result["friends"]));          							
                        				for (var i = 0; i < friends.length-1; i++) {
                            				var html = "<li><a href='#friendLists' fbId="+friends[i].id+"><img src=\"" + friends[i].picture + "\" /><h3>"+friends[i].name+"</h3></a></li>";
                            				list.append(html);
                        					}
                        				friendsReady = true;
                        				$('#friendsList').listview("refresh");
                        				$.mobile.hidePageLoadingMsg();
                        				}
                        			
         						 }
						});

                	}
                });
            }

            function changeMenuBack () {
                var list = $( "#menu" ).find( "#memberDetails" );
                list.empty();
                var html = '<h3><span>Guest</span></h3>';
                list.append(html);

                var list = $( "#menu" ).find( "#menuList" );
                list.empty();
                var html = '<li><a href="#" class="ui-btn ui-btn-up-b ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined" onClick="login()"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Login</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#" class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Login</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li>';
                list.append(html);
                return true;
            }

        function playAudio() {
            $.mobile.showPageLoadingMsg();
            //console.log("empieza");
            my_media = new Audio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');
            my_media.id = 'playerMyAdio';
            my_media.play();
            $.mobile.hidePageLoadingMsg();
            //console.log("termina");
            return true;

        }
        
        function changeOwnLists()
        {
        	var dir = host + "ayax/ownLists.php?q="+ userId;
  					//alert(dir);
					var request = $.ajax({
      					type: "GET",
      					url: dir,
	  					cache: false,
     					});
     				request.done(function(msg) {
  							var list = $( "#ownLists" ).find( "#owns" );
							list.empty();
							list.append(msg);
							$('#owns').listview("refresh");
						});

					request.fail(function(jqXHR, textStatus) {
  							alert( "Request failed: " + textStatus );
						});
				$.mobile.hidePageLoadingMsg();
        }
        
        
        function changeMenu() 	{
			FB.api('/me', function(response) { 

			var list = $( "#menu" ).find( "#memberDetails" );
                			list.empty();               
                
                			var html = '<h3><span>'+response.name+'</span></h3>';
                			list.append(html);

                			var list = $( "#menu" ).find( "#menuList" );
                			list.empty();
                			var html = '<li><a href="#ownLists"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>My Lists</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#searchMusic"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Search</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#friends"class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Friends</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li><li><a href="#searchMusic" onClick="logout()" class="ui-btn ui-btn-up-a ui-btn-corner-all ui-btn-icon-right ui-shadow ui-btn-up-undefined"><span class="ui-btn-inner ui-btn-corner-all ui-corner-top ui-corner-bottom"><span>Logout</span><span class="ui-icon ui-icon-star ui-icon-shadow"></span></span></a></li>';
                			list.append(html);
  							return;
				});
				}
				
		function cambiosDeLogeo()
		{
			changeMenu();
            $.mobile.changePage( "#ownLists", { transition: "slide"} );
            $.mobile.showPageLoadingMsg();
                            
                         	FB.api('/me', function(response)
            				{
            					if (response.error) {
            						//alert("llega");
                    				alert(JSON.stringify(response.error));
                    				return false;
                				} else
                				{
                					userFbId = response.id;
                					var dir = "ayax/getUserIdFB.php?id="+ response.id;
  									//alert(dir);
									var request = $.ajax({
      									type: "GET",
      									url: dir,
	  									cache: false,
     									});
     								request.done(function(msg) {
  											userId = msg;
                							changeOwnLists();
                							getFriends();
										});

									request.fail(function(jqXHR, textStatus) {
  											alert( "Request failed: " + textStatus );
										});
										//termino rquest
                				}
							});
		}

