import { writable } from "svelte/store"

const defaultPlayerState = {
    score: 0,
    name: '',
    uid: ''

}

export const playerState = writable(defaultPlayerState)

