//You might also like by http://codepen.io/fbrz/

function alsolike(pen1, desc1, pen2, desc2, pen3, desc3) {
  
  var url = location.href;
  if(url.indexOf("/boomerang/")!=-1)
    url = document.getElementsByTagName("link")[0].getAttribute("href");
  
   console.log(url);
  
  if(url.indexOf("/debug/")!=-1||url.indexOf("/fullcpgrid/")!=-1) return false;
  
  var def_style = document.getElementsByTagName("style")[0];
  def_style.parentNode.removeChild(def_style);
  
  var debug_url = url.replace("/pen/","/debug/").replace("/fullpage/","/debug/");
  
  
  var pens = '';
  
  pens += '<div><iframe src="http://codepen.io/fbrz/debug/'+pen1+'"></iframe><h2>'+desc1+'</h2><a href="http://codepen.io/fbrz/details/'+pen1+'" target="_blank"></a></div>';
  
  if(pen2!=undefined) 
    pens += '<div><iframe src="http://codepen.io/fbrz/debug/'+pen2+'"></iframe><h2>'+desc2+'</h2><a href="http://codepen.io/fbrz/details/'+pen2+'" target="_blank"></a></div>';
  
  if(pen3!=undefined) 
    pens += '<div><iframe src="http://codepen.io/fbrz/debug/'+pen3+'"></iframe><h2>'+desc3+'</h2><a href="http://codepen.io/fbrz/details/'+pen3+'" target="_blank"></a></div>';
  
  document.body.innerHTML = "<iframe id='pen' src='"+debug_url+"'></iframe><div id='al-overlay'></div><div id='alsolike'><h1>You might also like...</h1><a target='_blank' href='http://codepen.io/fbrz/pen/Guysm' id='more'>What's this?</a><a id='opener'></a><a id='closer'></a><div id='wrapper'>"+pens+"</div><div id='clearfix'></div></div><style>@import url(http://fonts.googleapis.com/css?family=Varela+Round);body{height:100%;margin:0;overflow:hidden;font-family:'Varela Round',sans-serif;-webkit-font-smoothing:antialiased}#pen{position:absolute;z-index:1;width:100%;height:100%;border:none}#al-overlay{z-index:0;-webkit-transition:opacity .5s ease-in-out, z-index .5s linear 1s;transition:opacity .5s ease-in-out, z-index .5s linear 1s;position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0}#al-overlay.visible{-webkit-transition-delay:0;transition-delay:0;z-index:2;opacity:.5;}#alsolike #more{padding-right: 60px;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;text-decoration:none;position:absolute;right:4%;top:50px;color:#717B85;font-weight:800;opacity:.3}#alsolike #more:hover{opacity:1}#alsolike #closer{cursor:pointer;top:50px;opacity:.2;right:4%;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;width:40px;height:34px;position:absolute}#alsolike #closer:after,#alsolike #closer:before{border-left:4px solid #717B85;border-top:4px solid #717B85;position:absolute;top:0;width:15px;height:15px;content:''}#alsolike #closer:before{right:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#alsolike #closer:after{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);right:21px}#alsolike #closer:hover{opacity:1}#alsolike{z-index:3;background:#E2E5E8;width:100%;position:absolute;top:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.7,0,.3,1);transition:transform .5s cubic-bezier(.7,0,.3,1);padding-bottom:40px}#alsolike.open{-webkit-transition-delay:.2s;transition-delay:.2s;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}#alsolike #opener{cursor:pointer;width:20px;height:20px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-bottom:4px solid #4D4D4D;border-right:4px solid #4D4D4D;position:absolute;top:-60px;right:40px;-webkit-animation:opener .5s ease-in-out alternate infinite;animation:opener .5s ease-in-out alternate infinite;cursor:pointer;opacity:0.5;-webkit-transition:opacity .2s ease-in-out, transform .5s ease-in-out .2s;transition:opacity .2s ease-in-out, transform .5s ease-in-out .2s}#alsolike.open #opener{-webkit-transition-delay:0;transition-delay:0;transform:translate3d(0,500px,0) rotate(45deg);-webkit-transform:translate3d(0,500px,0) rotate(45deg);}#alsolike:not(.open) #opener:hover{-webkit-transition-delay:0;transition-delay:0;opacity:1}@-webkit-keyframes opener{100%{top:-65px}}@keyframes opener{100%{top:-65px}}#alsolike h1{margin:40px 4%;color:#717B85}#alsolike #wrapper{margin:2%}#alsolike #wrapper div{border-radius:5px; transform-style:preserve-3d;width:29%;height:250px;overflow:hidden;box-shadow:rgba(0,0,0,.04) 0 0 0 2px;float:left;margin:0 2%;position:relative;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#alsolike #wrapper div:hover{box-shadow:rgba(133, 146, 181, 0.4) 0 0 0 6px}#wrapper a{ display:block;position:absolute;top:0;left:0;width:100%;height:100%;}@media screen and (max-width:480px){#alsolike #wrapper div{height:130px}#alsolike #wrapper h2{font-size:9px}}@media screen and (max-width:680px){#alsolike #wrapper div{height:170px}#alsolike #wrapper h2{font-size:11px}}#alsolike #wrapper iframe{border:none;width:200%;height:200%;margin:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}#alsolike #wrapper h2{font-size:13px;background:#717B85;padding:11px;margin:0;color:#fff;position:absolute;bottom:0;width:100%;letter-spacing:-.5px;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}</style>";
  
  var alsolike = document.getElementById("alsolike");
  var overlay = document.getElementById("al-overlay");
  
  document.getElementById("opener").addEventListener("click", function() {
    alsolike.className = "open";
    overlay.className = "visible";
    return false;
  });
  
  document.getElementById("closer").addEventListener("click", function() {
    alsolike.className = ""; 
    overlay.className = "";
    return false;
  });
}