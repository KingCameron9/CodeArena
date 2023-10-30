import { gameInfo } from '$lib/Firebase/play/gameInfo';
import type { Player } from '$lib/Firebase/types';
import { playerState } from '$lib/Firebase/play/playerState';
import { doc, getFirestore, setDoc, onSnapshot, getDoc } from 'firebase/firestore';

export async function connectToGame(code: string, name: string) {
	let path = '/games/' + code;

	let game = await getDoc(doc(getFirestore(), path));

	if (game.exists()) {
		gameInfo.set({ code: code, ready: true });
	}
}
