import {getAuth, signInAnonymously} from 'firebase/auth'

export let authenticated = false;
export let uid = '';

export async function signIn() {
    const auth = getAuth();

    let credentials = await signInAnonymously(auth)
    uid = credentials.user.uid;
    return true;

    
}
