import { writable } from 'svelte/store';

export const questionNumber = writable(0);

questionNumber.subscribe((val) => {
	console.log('question Number: ' + val);
});
