import type { Player } from '../types';

export function sortPlayersByScore(players: Player[]) {
	let sorted = players.sort((a, b) => b.points - a.points);

	let rt: any[] = [];

	sorted.forEach((player, index) => {
		rt.push({ ...player, index: index + 1 });
	});

	return rt;
}
