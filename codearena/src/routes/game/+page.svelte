<script lang='ts'>
    import Workspace from '$lib/Workspace/Workspace.svelte';
    import {joinInfo} from '$lib/Firebase/play/gameInfo'
	import { docWrite } from '$lib/svelteblaze/stores/doc';
	import{ type Game, State } from '$lib/Firebase/types';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    
    let game = null;
    let code; 

    onMount(() => {
        if($joinInfo.code == '' || $joinInfo.name == '') 
        {
            goto('join')
        }
        else{
            game = docWrite<Game>('/games/' + $joinInfo.code);
        }


    })

</script>

{#if $game?.state == State.waiting}
    <div style="background-color: rgb(30,30,30); display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh">
        <p style="color: white; font-size: 30px">Waiting for host to start</p>
    </div>
{:else}
    <Workspace/>
{/if}
