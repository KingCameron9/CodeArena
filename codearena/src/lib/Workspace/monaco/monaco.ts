import loader from '@monaco-editor/loader';
import { onDestroy, onMount } from 'svelte';
import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

export let editor: Monaco.editor.IStandaloneCodeEditor;
let monaco: typeof Monaco;
let editorContainer: HTMLDivElement;

export async function awaitMonaco(){
    
    return true;
}

export async function createMonaco(div: HTMLDivElement){
    editorContainer=div;

    // Remove this line to load the monaco editor from a CDN
    // see https://www.npmjs.com/package/@monaco-editor/loader#config
    loader.config({ paths: { vs: '/node_modules/monaco-editor/min/vs' } });

    monaco = await loader.init();
    
    editor = monaco.editor.create(editorContainer, {
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        value: 'const answer = function(){\n    //your answer here\n}'
    }, );
}