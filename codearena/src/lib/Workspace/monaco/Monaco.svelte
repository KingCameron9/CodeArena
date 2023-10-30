<script lang="ts">
    import loader from '@monaco-editor/loader';
    import { onDestroy, onMount } from 'svelte';
    import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import { createMonaco } from './monaco';

    let editor: Monaco.editor.IStandaloneCodeEditor;
    let monaco: typeof Monaco;
    let editorContainer: HTMLDivElement;

    onMount(async () => {
        await createMonaco(editorContainer);
    });

    onDestroy(() => {
        monaco?.editor.getModels().forEach((model) => model.dispose());
    });
</script>

<div bind:this={editorContainer} style="height: 100vh;" />
