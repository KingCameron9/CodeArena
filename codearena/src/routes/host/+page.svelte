<script lang='ts'>
    import '$lib/Firebase/firebase'
    import type { Game, Player } from '$lib/Firebase/types';
    import { sortPlayersByScore } from '$lib/Firebase/host/utils';
    import {State} from '$lib/Firebase/types'
    import { docWrite } from '$lib/svelteblaze/stores/doc';
    import { colRead } from '$lib/svelteblaze/stores/col';
	import { doc, getFirestore, setDoc } from 'firebase/firestore';
	import { camelCaseConversion, pythagorean, reverseString, longestSubstringWithoutRepeating, stringCompression } from '$lib/Questions/questions';
    import JSConfetti from 'js-confetti'

    let code = "ABC" //Math.round(Math.random()*100000);

    setDoc(doc(getFirestore(), '/games/'+code), {time: 100, state: State.waiting, questions: JSON.stringify([pythagorean, reverseString, camelCaseConversion, longestSubstringWithoutRepeating, stringCompression ])});

    const game = docWrite<Game>('/games/' + code);

    let wait = -1;


    function startGame(){

        wait = 5;
        const setWait = async () => {
            setTimeout(() => {
                wait--;
                if(wait > 0){
                    setWait();
                } 
                else{
                    $game.state = State.playing;
                    const time = async () => {
                     setTimeout(() => {
                        console.log('time');
                        $game.time -= 1;
                        if($game.time < 1){
                            const jsConfetti = new JSConfetti();
                            jsConfetti.addConfetti();
                            
                        }
                        else{
                            time();
                        }
                        
                     }, 1000)
                    }
                    time();
                }
            }, 1000);


        }

        setWait();
        

    }


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

        {#if wait == -1}
            <button id="start-button" on:click={startGame}>Start game</button>
        {:else}
            <p style="font-size: 25px; margin-bottom: 0">Starting in... {wait}</p>
        {/if}

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

    #start-button {
        background-color: rgb(45,45,45);
        color: white;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    #start-button:hover {
        background-color: rgb(50,50,50);
    }

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
