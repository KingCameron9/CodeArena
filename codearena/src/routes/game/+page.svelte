<script lang='ts'>
    import Workspace from '$lib/Workspace/Workspace.svelte';
    import {joinInfo} from '$lib/Firebase/play/gameInfo'
	import { docWrite } from '$lib/svelteblaze/stores/doc';
	import{ type Game, State, type Player } from '$lib/Firebase/types';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { secondsToTime } from '$lib/Firebase/host/utils';
    import JSConfetti from 'js-confetti'

    let game = null;
    let player = null;
    let code; 
    let show = false;

    if($joinInfo.code == '' || $joinInfo.name == '') 
    {
        onMount(() => {
            goto('join')
        })
    }
    else{
        show = true;
        game = docWrite<Game>('/games/' + $joinInfo.code);
        player = docWrite<Player>('/games/' + $joinInfo.code + '/players/' + $joinInfo.name);
    }
    let confeti = false;
    player?.subscribe((val) => {
        if(val?.points === 3 && !confeti){
            confeti = true;
            console.log('it was done');
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
            $player.points == $game.time+1000;
            $player.finished = true;
            $player.finishedTime = Math.abs($game.time-100);
        }

    })



</script>
{#if show}
    {#if $game?.state == State.playing}
        {#if $player?.points === 3}
        <div style="background-color: rgb(30,30,30); display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; flex-direction: column;">
            {#if $game?.time > 1}
                
                <p style="color: white; font-size: 30px">Congrats, You finished all the problems! Wait till the end to see how you did!</p>
                <p style="color:white">Time left: {secondsToTime($game?.time)}</p>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            {:else}
                <p style="color: white; font-size: 30px">Look up to the board to see how you did</p>
            {/if}
    </div>
        {:else}
            <Workspace/>
        {/if}
    {:else}
        <div style="background-color: rgb(30,30,30); display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; flex-direction: column;">
    <p style="color: white; font-size: 30px">Waiting for host to start</p>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
{/if}
{/if}
<style>
    .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
