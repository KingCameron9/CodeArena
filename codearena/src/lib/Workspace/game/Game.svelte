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
    
    let qn = 0;
    let player;
    let questions: Question[] = [];
    
    questionNumber.subscribe((val: number) => {
        if(questions[val] != null)
            setQuestion(questions[val]);

    })



    

    if($joinInfo.code != '' && $joinInfo.name != '') {
        player = docWrite<Player>('/games/' + $joinInfo.code + '/players/' + $joinInfo.name);
        getDoc(doc(getFirestore(), '/games/' + $joinInfo.code)).then((raw) => {
            let text = raw.data().questions;
            questions =JSON.parse(text);
            setQuestion(questions[qn]);
        });
    }



   
</script>

<div style="color: white">
    <h2>Insecurity questions</h2>

    <p>Code: {$joinInfo.code}</p>
    <p>Name: {$joinInfo.name}</p>
    <p>points: {$player?.points}</p>
    <p>{questions}</p>
</div>


