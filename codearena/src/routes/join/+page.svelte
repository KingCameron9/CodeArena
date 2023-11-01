<script lang='ts'>
    import { goto } from "$app/navigation";
    import '$lib/Firebase/firebase'
    import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
    import {joinInfo} from '$lib/Firebase/play/gameInfo'


    let codeInput;
    let nameInput;

    let codeFailed = false;

   
    async function joinGame(){
        
        let code = codeInput.value;
        let name = nameInput.value;

        let path = '/games/' + code;

        let game = await getDoc(doc(getFirestore(), path))

        if(name.length < 1 || code.length < 1) return;

        if(game.exists()){
            path += '/players/' + name;
            joinInfo.set({code: code, name: name});
            await setDoc(doc(getFirestore(), path), {uid: Math.random(),points: 0});
            goto('/game/')
        }else{
            codeFailed = true;
            
            
        }
    }

</script>

<div class='input-page-container'>
    <div class="input-container">
        <p style="font-size: 30px">Helix</p>
        <input bind:this={codeInput} placeholder="code" type='text' class="input-text">
        <input bind:this={nameInput} placeholder="username" type='text' class="input-text">
        <button on:click={joinGame} style="margin: 20px" class="input-text" >Click to join</button>
        {#if codeFailed}

            <p style="color: red; position:fixed; top: 80%">Game not found</p>
        {/if}
    </div>

</div>

<style>
    .input-text{
        width:85%;
        height: 20%;
        border-radius: 10px;
        margin-bottom: 5px;
        font-size: min(3vw, 3vh);
        text-align: center;
        
    }

    .input-page-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: #1E1E1E;
        flex-direction: column;

    }

    .input-container{
        margin: 10px;
        background-color: lightgray;
        border-radius: 10px;
        width: 40vw;
        height: 50vh;
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;



    }

</style>
