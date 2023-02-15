
/*  USER SIDE */
  
fetch('../ManualGuide/ManualGuide.json')
  .then(response => response.text())
  .then(text => establishManualGuide(text))
 
  function establishManualGuide(text) {
    window.content = document.getElementById("content")
    document.write(text)
    }