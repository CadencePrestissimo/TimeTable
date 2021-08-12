var date = new Date();
var hrs = date.getHours();
var min = date.getMinutes();
var day = date.getDay();
let k = -1;

if (hrs >= 8 && hrs <= 12) {
  k = hrs - 8;
} else if (hrs >= 15 && hrs <= 18) {
  k = Math.floor((hrs + 1) / 2) - 2;
}

if (k != -1 && day < 6)
  document.querySelectorAll(".guide-slot_card > h4:first-child")[k + day * 8 - 8].style.color = "darkcyan";
