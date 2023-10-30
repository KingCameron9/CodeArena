export type Player = {
	points: number;
	uid: string;
	id: string;
};

export type Game = {
	state: State;
};

export enum State {
	waiting,
	playing
}
