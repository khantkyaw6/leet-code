/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let initialValue = init;
	return {
		increment: () => {
			return (initialValue += 1);
		},
		decrement: () => {
			return (initialValue -= 1);
		},
		reset: () => {
			return (initialValue = init);
		},
	};
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
// console.log(counter.decrement());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
