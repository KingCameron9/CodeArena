<script lang='ts'>
	import { onMount } from "svelte";
	import { evaluate } from "./evaluate";
	import { questionStore, setQuestion } from "$lib/Questions/set";
    import type {Question, ReturnMessage} from '$lib/Questions/types'

    onMount(() => {
    })

    let question: Question;

    questionStore.subscribe((sq) => {question = sq})

    let message: ReturnMessage; 
    let ran: boolean;

    function run(){
        ran=  true;
        message = evaluate(question);
        

    }
</script>

{#if question.ready }
    
    <button on:click={run}>run</button>


{/if}
{#if ran}
    {#if message.success}
        <p style='font-size: 30px; color: green'>Correct Answer</p>   

    {:else}
        <p style='font-size: 30px; color: red'>Incorrect Answer in case {message.caseNumber}</p>   
        <p style='color: white; font-size: 20px'> Input: {message.input}</p>
        {#if message.errored}
            <p style='color: red; font-size: 20px'>Output: {message.error}</p>
        {:else}
            <p style='color: white; font-size: 20px' >Output: {message.output}</p>
        {/if}
        <p style='color: white; font-size: 20px' >Expected Output: {message.expectedOutput}</p>
        
    {/if}
        
{:else}
    <p style="color: white">Run some code to see it's output</p>

{/if}

