import { QuerySnapshot, collection, getFirestore, onSnapshot } from "firebase/firestore";
import { readable, writable, derived } from "svelte/store";
import { type Game, State } from "../types";

let defaultGameState: Game = {
    players: [],
    state: State.waiting
    
}

const thisGameState = writable(defaultGameState);

export const gameState = derived(thisGameState, (state) => {return state});

export function connect(code: string){
    let db = getFirestore();
    let path = '/games/' + code + '/players';

    const playersRef = collection(db, path);

    thisGameState.subscribe(write);

    onSnapshot(playersRef, update);
}

function write(current: Game){
    

}

function update(data: QuerySnapshot){
    let state: Game = {
        players: [],
        state: State.none
    };

    data.forEach((doc) => {
        let data = doc.data();
        console.log('Pre-data:' + JSON.stringify(data));
        state.players.push({
            score: data.score,
            name: data.name
        })
    })

    thisGameState.set(state);
}

