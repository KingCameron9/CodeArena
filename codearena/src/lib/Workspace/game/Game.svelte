<script lang='ts'>
    import '$lib/Firebase/firebase'
    import { setQuestion } from "$lib/Questions/set";
    import {docWrite} from '$lib/svelteblaze/stores/doc'
    import type {Game, Player} from '$lib/Firebase/types';
	import { joinInfo } from '$lib/Firebase/play/gameInfo';
    import { goto } from '$app/navigation';
	import type { Question } from '$lib/Questions/types';
	import { doc, getDoc, getFirestore } from 'firebase/firestore';
	import { questionNumber } from './game';
	import { onMount } from 'svelte';
	import { secondsToTime } from '$lib/Firebase/host/utils';
    
    let player;
    let game;
    let questions: Question[] = [];



    

    if($joinInfo.code != '' && $joinInfo.name != '') {
        player = docWrite<Player>('/games/' + $joinInfo.code + '/players/' + $joinInfo.name);
        console.log($joinInfo.code);
        game = docWrite<Game>('/games/' + $joinInfo.code);
        getDoc(doc(getFirestore(), '/games/' + $joinInfo.code)).then((raw) => {
            let text = raw.data().questions;
            questions =JSON.parse(text);
            setQuestion(questions[0]);
            questionNumber.subscribe((qi)=>{
                $player.points = qi;
                setQuestion(questions[qi])
            });
        });
    }




   
</script>

<div style="color: white; font-size: 20px;">
    <h2>Game</h2>
    <p>Time left: {secondsToTime($game?.time)} </p>
    <p>questions completed: {$player?.points | 0} / 3</p>
    <p>Code: {$joinInfo.code}</p>
    <p>Name: {$joinInfo.name}</p>
</div>


