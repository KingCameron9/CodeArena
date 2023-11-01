import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";
import { w as writable } from "./index.js";
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
initializeApp(firebaseConfig);
function createWritable(path, initialValue) {
  const db = getFirestore();
  let write = writable(initialValue);
  let ref = doc(db, path);
  setDoc(ref, initialValue);
  onSnapshot(ref, (pdata) => {
    let data = pdata.data();
    write.set(data);
  });
  write.subscribe((data) => {
    setDoc(ref, data);
  });
  return write;
}
export {
  createWritable as c
};
