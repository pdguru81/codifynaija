$(document).ready(function() {

//load facebook plugin
  // $.ajaxSetup({ cache: true });
  /*$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{your-app-id}',
      version: 'v2.3' // or v2.0, v2.1, v2.0
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });*/
  
  $("a").click(function(e) {
      if(e.preventDefault)
        e.preventDefault();
      else
        e.stop();
  });


   $("#motivation").load("motivation.html"); 
   
 
	
	 $("#submit").click(function(){ });

   $("#logo").click(function(){
   
    window.location=  window.location.host+'/philipa/www/codify/'});

  

	$("#").click(function(){

	});

});