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
            
            function me() {
                FB.api('/me/friends', function(response) {
                	if (response.error) {
                    	alert(JSON.stringify(response.error));
                	} else {
	                    var data = document.getElementById('data');
	                    response.data.forEach(function(item) {
	                        var d = document.createElement('div');
	                        d.innerHTML = item.name;
	                        data.appendChild(d);
	                    });
                	}
                });
            }
            
            function logout() {
                FB.logout(function(response) {
                    alert('logged out');
                });
            }
            
            function login() {
                FB.login(
                    function(response) {
                        if (response.session) {
                            changeMenu();
                            alert('logged in');
                        } else {
                            alert('not logged in');
                        }
                    },
                    { perms: "email" }
                );
            }

            function changeMenu()
            {
                var html = '<h3><span>Welcome,</span><br /> <em>Luis Hernan</em></h3>';
                var men = $( "#menu" ).find("#memberDetails");
                men.empty();
                men.append(html);
                html = '<li><a href="#ownLists" class="contentLink">My Lists<span class="icon"></span></a></li><li class="currentSeccion"><a href="#searchMusic" class="contentLink">Search<span class="icon"></span></a></li><li><a href="footer-persist-a.html" class="contentLink">Friends<span class="icon"></span></a></li>';
                men = $( "#menu" ).find( "#menuList");
                men.empty();
                men.append(html);
                return true;
            }

            document.addEventListener('deviceready', function() {
                try {
                    alert('Device is ready! Make sure you set your app_id below this alert.');
                    FB.init({ appId: "129284287187173", nativeInterface: PG.FB });
                } catch (e) {
                    alert(e);
                }
            }, false);
