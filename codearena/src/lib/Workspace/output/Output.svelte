<script lang='ts'>
	import { onMount } from "svelte";
	import { evaluate } from "./evaluate";
	import { questionStore, setQuestion } from "$lib/Questions/set";
    import type {Question} from '$lib/Questions/types'
    import type {FuncResult} from '$lib/Workspace/output/evaluate'
    import {questionNumber} from '$lib/Workspace/game/game'
    let message: FuncResult | true; 

    function run(){
        message = evaluate($questionStore);
        console.log(JSON.stringify(message));

        if(message.success){
            $questionNumber += 1;
        }
    }
</script>



{#if $questionStore.ready }
    
    <button id='start-button' on:click={run}>run</button>
    <button on:click={() => {$questionNumber += 1}}>skip</button>


{/if}

{#if message!=null}
    {#if message.success}
        <p style='font-size: 30px; color: green'>Correct Answer</p>   

    {:else}
        <p style='color: white; font-size: 20px'> Input: {message.res.input}</p>
        {#if message.res.errored}
            <p style='color: red; font-size: 20px'>Output: {message.res.errorMessage}</p>
        {:else}
            <p style='color: white; font-size: 20px' >Output: {message.res.output}</p>
        {/if}
        <p style='color: white; font-size: 20px' >Expected Output: {message.res.expectedOutput}</p>
        
    {/if}
        
{:else}
    <p style="color: white">Run some code to see it's output</p>

{/if}

<style>

    #start-button {
        background-color: rgb(45,45,45);
        color: white;
        border: none;
        padding: 10px 15px;
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

</style>

