const refs = {
	input: document.querySelector("#font-size-control"),
	textChange: document.querySelector("#text"),
};

refs.input.addEventListener("input", fontSizeChange);
function fontSizeChange(event) {
	refs.textChange.style.fontSize = refs.input.value + "px";
}
