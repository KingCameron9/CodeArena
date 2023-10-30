<script lang='ts'>
    import '$lib/Firebase/firebase'
    import { setQuestion } from "$lib/Questions/set";
    import {mult, reverseString, camelCaseConversion} from '$lib/Questions/questions'
    import { onMount } from 'svelte';
    import {docWrite} from '$lib/svelteblaze/stores/doc'
    import type {Player} from '$lib/Firebase/types';
	import { joinInfo } from '$lib/Firebase/play/gameInfo';
    import { goto } from '$app/navigation';

    
    

    let write;

    if($joinInfo.code != '' && $joinInfo.name != '') {
        write = docWrite<Player>('/games/' + $joinInfo.code + '/players/' + $joinInfo.name);
    }



    onMount(() => {
        setQuestion(mult);
    })

   
</script>

<div style="color: white">
    <h2>Insecurity questions</h2>

    <p>Code: {$joinInfo.code}</p>
    <p>Name: {$joinInfo.name}</p>
    <p>points: {$write?.points}</p>
</div>


