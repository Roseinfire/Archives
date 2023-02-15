  background("#ffc107", null, 2100) //, "../Works/Paint/Background.png")
  
  var string = ["margin-left: 20px; ", "font-size: 120%"] 
  var head = ["margin-left: 25px; padding: 5px;","font-size: 140%"]
 
  write("Paint Manual Guide", "h2", ["text-align: center; font-size: 40px;"])
  write("Let's get started!", "h3", head)
  write(`Input your own width & height and press "Start Work". By default canvas will appear squared a little smaller your screen height.`, "p", string)
  image("../GetStarted.png", 30)
  write(`By default canvas will appear squared a little smaller your screen height.`, "p", string)
  write("Menu", "h3", head)
  write(`First to be reviewed should be Menu. You can find it in the top left corner.
  By default it indicates time of last update. Any process that's happening on the screen,
  will appear in the Menu, so click on it and get more information about everething.`, "p", string)
  image("../MenuExample.png", 30); /* file:///F:/Html/ */
  write("Hidden buttons?", "h3", head)
  write(`Yes, there are four. We made this decision in according to our design policy.`, "p", string)
