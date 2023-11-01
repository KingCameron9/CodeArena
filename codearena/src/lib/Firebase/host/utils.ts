import type { Player } from '../types';
export function secondsToTime(seconds: number) {
	var minutes = Math.floor(seconds / 60);
	var remainingSeconds = seconds % 60;
	var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
	return formattedMinutes + ':' + formattedSeconds;
}

export function sortPlayersByScore(players: Player[]) {
	let sorted = players.sort((a, b) => b.points - a.points);

	let rt: any[] = [];

	sorted.forEach((player, index) => {
		rt.push({ ...player, index: index + 1 });
	});

	return rt;
}
