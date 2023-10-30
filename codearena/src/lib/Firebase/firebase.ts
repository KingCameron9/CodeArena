// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { writable, type Writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyAsybai_myIDX0K3B1Wss_NtrlMo7YJtVQ",
  authDomain: "powerschool-37afb.firebaseapp.com",
  databaseURL: "https://powerschool-37afb-default-rtdb.firebaseio.com",
  projectId: "powerschool-37afb",
  storageBucket: "powerschool-37afb.appspot.com",
  messagingSenderId: "84034177129",
  appId: "1:84034177129:web:0387463a0825fb91f1faf8",
  measurementId: "G-PEB550TFMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export enum Type{
    // doc,
    // collection
// }

export function createWritable<T>(path: string, initialValue: T){
    const db = getFirestore();

    let write = writable(initialValue);


    let ref = doc(db, path);
    setDoc(ref, initialValue as object);
    onSnapshot(ref, (pdata) => {
        let data: T = pdata.data() as T;
        write.set(data);
        
        
    })

    write.subscribe((data) => {
        setDoc(ref, data as object);
    })

    return write;
    
}
