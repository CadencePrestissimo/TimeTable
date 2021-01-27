var date = new Date()
var hrs = date.getHours()
var min = date.getMinutes()
var day = date.getDay()
let k = -1
if (hrs == 9 || hrs == 10)
  k = 0
else if ((hrs == 11 && min >= 10) || hrs == 12 || (hrs == 13 && min <= 10))
  k = 1;
else if (hrs == 15 || hrs == 16)
  k = 2;
if(k != -1)
  document.querySelectorAll(".guide-slot_card > h4:first-child")[day*3-3+k].style.color = "darkcyan"
