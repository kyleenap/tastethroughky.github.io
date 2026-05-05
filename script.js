/*
Student name: Kyleena P
File Name: scripts.js
Date: 05/01/2026
*/

//Hamburger menu function
function menu() {
    var menu = document.getElementById("nav-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block") {
			menu.style.display = "none";
			logo.style.display = "block";
	} else {
			menu.style.display = "block";
			logo.style.display = "none";
	}

}