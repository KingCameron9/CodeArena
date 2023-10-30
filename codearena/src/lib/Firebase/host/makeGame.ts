import { getFirestore, doc, setDoc } from "firebase/firestore";

export function makeGame(code: string, uid: string){
    let db = getFirestore();
    let path = '/games/' + code;

    const gameRef = doc(db, path);

    setDoc(gameRef, {score: 100});
}