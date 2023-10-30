<script lang='ts'>
    import '$lib/Firebase/firebase'
	import { makeGame } from '$lib/Firebase/host/makeGame';
    import type { Game, Player } from '$lib/Firebase/types';
    import { sortPlayersByScore } from '$lib/Firebase/host/utils';
    import {State} from '$lib/Firebase/types'
    import { docWrite } from '$lib/svelteblaze/stores/doc';
    import { colRead } from '$lib/svelteblaze/stores/col';
	import { doc, getFirestore, setDoc } from 'firebase/firestore';

    let code = "12345"/* Math.round(Math.random()*7); */

    setDoc(doc(getFirestore(), '/games/'+code), {state: State.waiting})

    const game = docWrite<Game>('/games/' + code);

    const players = colRead<Player[]>('/games/' + code + '/players', []);

</script>

{#if $game?.state == State.playing}
    <p style="
position: absolute;
top: 2;
left: 2%;
color: white;
font-size: 25px;
">{code}</p>
{/if}

<div style="color: white; background-color: #1E1E1E; display: flex; align-items: center; width: 100vw; height: 100vh; flex-direction:column;">
    {#if $game?.state === State.waiting}
        <p style="color: white; font-size: 30px">{code}</p>
        <button style="
            width: 15%;
            height: 7%;
            border-color: rgb(0,0,0);
            background-color: rgb(70,70,70);
            border-width: 3px;
            " 
        on:click={() => {$game.state = State.playing}}>Start game</button>

        <div class="players-container">
                {#each $players as player}
                    <div class='player-container'>
                        <p style="text-align: center; color: white; font-size: 20px">{player.id}</p>
                    </div>
                {/each}
        </div>
    {/if}

    {#if $game?.state === State.playing}
        <p style="font-size: 30px;">Scoreboard</p>

        <div class='player-container' style='flex-direction: column;width: 50%; overflow: hidden; size: 30px'>
            {#each sortPlayersByScore($players) as player}
                <p>{player.index}. {player.id} {player.points}</p>
            {/each}
        </div>

    {/if}
</div>

<style>
    .player-container{
        padding: 2px;
        margin: 10px;
        display: flex;
        background-color: #272727;
        height: min-content;
        border-radius: 10px;
        width: 12%;
        align-items: center;
        justify-content: center;
    }

    .players-container{

        display: flex;
        flex-direction: row;
        background-color: #1E1E1E;
        flex-wrap: wrap;
        margin: 5%;
        width: 80%;
    }
</style>
