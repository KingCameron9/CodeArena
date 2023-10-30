import { editor } from "$lib/Workspace/monaco/monaco";
import Docs from '$lib/Workspace/docs/Docs.svelte'
import type { Question } from "./types";
import { writable } from 'svelte/store'


let initialQuestion: Question = {
    ready: false,
    solutionFun: () => {},
    default: '',
    tests: [[]],
    docs: ''
};

export const questionStore = writable(initialQuestion);

export async function setQuestion(question: Question){
    questionStore.set(question)

    if(editor){
        editor.setValue(question.default);
    }
    else{
        setTimeout(() => {editor.setValue(question.default)}, 2000)

    }

    

}
