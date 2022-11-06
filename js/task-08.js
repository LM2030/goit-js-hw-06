const formInput = document.querySelector(".login-form");
formInput.addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	const formData = {
		email,
		password,
	};

	if (email === "" || password === "") {
		return alert("Всі поля повинні бути заповнені");
	}
	console.log(formData);
	event.currentTarget.reset();
}
