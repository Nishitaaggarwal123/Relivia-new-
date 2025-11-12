/* Select the input element for username and password */

const userId = document.querySelector("#userid");
const userPass = document.querySelector("#password");
function login() {
	if (userId.value == "Punit Kumar" && userPass.value == "Admin") {
		sessionStorage.setItem("userName", "Punit Kumar");
		sessionStorage.setItem("password", "Admin");
		window.location = "/";
	} else {
		alert("incorrect password!");
	}
}
