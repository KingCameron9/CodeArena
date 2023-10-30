<script lang='ts'>
	import { questionStore } from '$lib/Questions/set';
	import type { Question } from '$lib/Questions/types';
    import SvelteMarkdown from 'svelte-markdown'
    
    let source = '# Docs'

    questionStore.subscribe((value) => {
        console.log(value);
        source = value.docs;
        
    })

    export function setDocText(md: string){
        source = md;

    }
</script>


<div style="height: 100%; width: 100%; color:lightgray">
            <SvelteMarkdown source={source}></SvelteMarkdown>

</div>
