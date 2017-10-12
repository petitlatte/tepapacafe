function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//NAV BAR RESPONSIVE
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//CART CONTAINER BUG FIX
$(document).on('click', '.add', function() {
	$('#CartContainer').show();
});
