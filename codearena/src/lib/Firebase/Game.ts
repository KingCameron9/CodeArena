import type { Writable } from "svelte/store";
import { createWritable } from "./firebase";
import { State, type Game } from "./types";

class Game{
    game: Writable<Game>;

    constructor(code: number){
        this.game = createWritable<Game>('/games/' + code, {state: State.waiting, players: []})
    }

}


export function connectToGame(code: number){
}
