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

        if(message.success){
            $questionNumber += 1;
        }
    }
</script>

{#if $questionStore.ready }
    
    <button on:click={run}>run</button>


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

