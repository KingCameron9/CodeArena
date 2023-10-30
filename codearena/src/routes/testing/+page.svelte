<script lang='ts'>

    import '$lib/Firebase/firebase'
	import { createWritable } from '$lib/Firebase/firebase';
	import { makeGame } from '$lib/Firebase/host/makeGame';
	import { type Game, State } from '$lib/Firebase/types';
	import { doc, getFirestore, setDoc } from "firebase/firestore";
    let db = getFirestore();
    let path = '/games/' + 2;
    const gameRef = doc(db, path);
    setDoc(gameRef, {score: 100});



    let writable = createWritable<Game>('/games/1', {state: State.waiting, players: []});



</script>

<p>{$writable.state}</p>

<button on:click={() => {$writable.state = State.playing}}>click</button>
