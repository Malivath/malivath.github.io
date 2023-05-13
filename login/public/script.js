// Sign-up function
function signup() {
	// Get the user's sign-up information
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const confirm_password = document.getElementById("confirm-password").value;

	// Validate the user's input
	if (email === "" || password === "" || confirm_password === "") {
		alert("Please fill out all fields.");
		return;
	}
	if (password !== confirm_password) {
		alert("Passwords do not match.");
		return;
	}

	// Send a POST request to the server-side script with the user's sign-up information
	fetch('/signup', {
		method: 'POST',
		body: JSON.stringify({email: email, password: password}),
		headers: {'Content-Type': 'application/json'}
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			// If the server-side script returns a success message, redirect to page2.html
			window.location.href = "page2.html";
		} else {
			// If the server-side script returns an error message, display the message to the user
			alert(data.message);
		}
	})
	.catch(error => console.error(error));
}

// Login function
function login() {
	// Get the user's login information
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	// Send a POST request to the server-side script with the user's login information
	fetch('/login', {
		method: 'POST',
		body: JSON.stringify({email: email, password: password}),
		headers: {'Content-Type': 'application/json'}
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			// If the server-side script returns a success message, redirect to page2.html
			window.location.href = "page2.html";
		} else {
			// If the server-side script returns an error message, display the message to the user
			alert(data.message);
		}
	})
	.catch(error => console.error(error));
}