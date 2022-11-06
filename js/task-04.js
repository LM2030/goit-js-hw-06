const refs = {
	decrease: document.querySelector('[data-action="decrement"]'),
	increase: document.querySelector('[data-action="increment"]'),
	counterValue: document.querySelector("#value"),
};

const counter = {
	value: 0,
	increment() {
		this.value += 1;
	},
	decrement() {
		this.value -= 1;
	},
};

refs.increase.addEventListener("click", function () {
	counter.increment();
	refs.counterValue.textContent = counter.value;
});
refs.decrease.addEventListener("click", function () {
	counter.decrement();
	refs.counterValue.textContent = counter.value;
});
