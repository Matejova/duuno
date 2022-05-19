import { navigateTo } from "./router.js";
console.log("app.js is running!");

function login() {
	const mail = document.querySelector("#login-mail").value;
	const password = document.querySelector("#login-password").value;

	if (mail === "1" && password === "1") {
		localStorage.setItem("userIsAuthenticated", true);
		document.querySelector(".login-message").innerHTML = "";
		navigateTo("#/");
	} else {
		document.querySelector(".login-message").innerHTML = "User not found. Wrong name or password.";
	}
}

function logout() {
	localStorage.removeItem("userIsAuthenticated");
	navigateTo("#/login");
}

document.querySelector("#btn-login").onclick = () => login();
document.querySelector("#btn-logout").onclick = () => logout();
