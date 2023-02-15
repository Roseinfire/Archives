
/*  USER SIDE */
  
fetch("https://roseinfire.github.io/ManualGuide/ManualGuide.json")
  .then(response => response.text())
  .then(text => establishManualGuide(text))
 
  function establishManualGuide(text) {
    window.__manual__ = (function() {
       var scripts = document.getElementsByTagName("script")
       for(var i = 0; i < scripts.length; i++) {
        if(scripts[i].src == "https://roseinfire.github.io/ManualGuide/ConnectManualGuide.js") { return scripts[i] }
         }
       var scr = document.createElement("script")
       return scr
      })()
    document.write(text)
    }
