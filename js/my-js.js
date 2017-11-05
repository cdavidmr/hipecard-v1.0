function btnToggle() {
	var y = document.getElementById("btn-x");
    var x = document.getElementById("side");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.classList.remove("icon-menu");
        y.classList.add("icon-x");
    } else {
        x.style.display = "none";
        y.classList.remove("icon-x");
        y.classList.add("icon-menu");
    }
}