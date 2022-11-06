const refs = {
	inputStyle: document.querySelector("#validation-input"),
	styleChange: document.querySelector("input"),
};

function task() {
	if (refs.styleChange.value.length === Number(refs.styleChange.dataset.length)) {
		refs.inputStyle.classList.remove("invalid");
		refs.inputStyle.classList.add("valid");
	} else {
		refs.inputStyle.classList.remove("valid");
		refs.inputStyle.classList.add("invalid");
	}
}
refs.styleChange.addEventListener("blur", task);
