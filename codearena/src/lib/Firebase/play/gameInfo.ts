import { writable } from 'svelte/store';

export type JoinInfo = {
	code: string;
	name: string;
};

const defaultJoinInfo: JoinInfo = {
	code: '',
	name: ''
};

export const joinInfo = writable(defaultJoinInfo);
