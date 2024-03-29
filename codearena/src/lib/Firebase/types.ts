import type { Question } from '$lib/Questions/types';

export type Player = {
	points: number;
	uid: string;
	id: string;
};

export type Game = {
	questions: string;
	state: State;
	time: number;
};

export enum State {
	waiting,
	playing
}
