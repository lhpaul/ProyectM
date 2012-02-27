if (typeof PhoneGap == 'undefined') alert('PhoneGap variable does not exist. Check that you have included phonegap.js correctly');
            if (typeof PG == 'undefined') alert('PG variable does not exist. Check that you have included pg-plugin-fb-connect.js correctly');
            if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');

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
            
            function getFriends() {
                FB.api('/me/friends',{ fields: 'name,id,picture' } ,function(response) {
                	if (response.error) {
                    	alert(JSON.stringify(response.error));
                	} else {
                        var list = $( "#friends" ).find( "#friendsList" );
                        list.empty();
                        var friends = response.data;
                        for (var i = 0; i < friends.length; i++) {
                            var html = "<li><a href='#'><img src=\"" + friends[i].picture + "\" /><h3>"+friends[i].name+"</h3></a></li>";
                            list.append(html);
                        }
                        $('#friendsList').listview("refresh");
                        $.mobile.hidePageLoadingMsg();
                	}
                });
            }
            
            function logout() {
                FB.logout(function(response) {
                    changeMenuBack();
                    //alert('logged out');
                });
            }
            
            function login() {
                FB.login(
                    function(response) {
                        if (response.session) {
                            //$.mobile.changePage( "logged.html", { transition: "fade"} );
                            changeMenu();
                            //alert('logged in');
                        } else {
                            alert('not logged in');
                        }
                    },
                    { perms: "email" }
                );
            }

            function changeMenu () {
                var list = $( "#menu" ).find( "#memberDetails" );
                list.empty();
                var html = '<h3><span>Welcome Luis Hernan</span></h3>';
                list.append(html);

                var list = $( "#menu" ).find( "#menuList" );
                list.empty();
                var html = '<li class="currentSeccion"><a href="#ownLists" class="contentLink" goTo="ownLists">My Lists<span class="icon"></span></a></li><li><a href="#searchMusic" class="contentLink" goTo="searchMusic">Search<span class="icon"></span></a></li><li class="currentSeccion"><a href="#friends" goTo="friends">Friends<span class="icon"></span></a></li><li class="currentSeccion"><a href="#searchMusic" goTo="logout" onClick="logout()">Log Out<span class="icon"></span></a></li>';
                list.append(html);

                //$.mobile.loadPage( "ownLists.html" );
                //$.mobile.loadPage( "friends.html" );
                return true;
            }
            function changeMenuBack () {
                var list = $( "#menu" ).find( "#memberDetails" );
                list.empty();
                var html = '<h3><span>Guest</span></h3>';
                list.append(html);

                var list = $( "#menu" ).find( "#menuList" );
                list.empty();
                var html = '<li class="currentSeccion"><a href="#" class="contentLink" onclick="login()">Login<span class="icon"></span></a></li>';
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

