// JavaScript Document

window.onload=checkcookie();


function starttracking(){
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

    gtag('config', 'G-HJTCFGZ87K');
	/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'G-SRC8XTZ052', 'auto');
ga('send', 'pageview');*/
	
}

 


 function checkcookie() {
	if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{

	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	starttracking();
  }
 }

function funzustimmen(){
	var now = new Date();
  var time = now.getTime();
  var expireTime = time + 3600*4392000;
  now.setTime(expireTime);
  document.cookie = 'name=nocookie;expires='+now.toUTCString()+';path=/';
	
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
	starttracking();

	
	
}

function funanpassen(){
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
}

function deletecookie(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
 
