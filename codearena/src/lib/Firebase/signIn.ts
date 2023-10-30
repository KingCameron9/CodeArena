import { getAuth, signInAnonymously } from 'firebase/auth';
import { uid } from './auth';


export async function signIn() {
    const auth = getAuth();

    let credentials = await signInAnonymously(auth);
    uid = credentials.user.uid;
    return true;


}

