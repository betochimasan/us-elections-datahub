
openInfoBox = function(seat) {
    var allSeats = document.getElementsByClassName("popup");
    for (var i = 0; i < allSeats.length; i++) {
      allSeats[i].style.display = "none";
    }
    var desired = document.getElementById(seat);
    desired.style.display = "block";
};
