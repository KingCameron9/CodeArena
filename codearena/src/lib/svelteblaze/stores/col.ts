import { collection, getDocs, getFirestore, onSnapshot } from 'firebase/firestore';
import { writable } from 'svelte/store';
let db = getFirestore();
interface ColRead<T> {
	subscribe: (cb: (value: T | null) => void) => void | (() => void);
}

export function colRead<T = object[] | any[]>(path: string, placeHolder?: T[]): ColRead<T> {
	let ref = collection(db, path);
	console.log('hello');

	const { subscribe } = writable(placeHolder, (set) => {
		// 	console.log('hello');
		let unsubscribe = onSnapshot(ref, (snapshot) => {
			const data = snapshot.docs;
			let arr: any[] = [];
			data.forEach((doc) => {
				arr.push({ id: doc.id, ...doc.data() });
			});
			set(arr);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}
