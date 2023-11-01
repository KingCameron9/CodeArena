import { w as writable } from "./index.js";
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";
let db = getFirestore();
function docWrite(path, placeHolder, opts) {
  let ref = doc(db, path);
  let store = writable(placeHolder, (set2) => {
    let unsubscribe = onSnapshot(ref, (snapshot) => {
      console.log("read");
      let data = snapshot.data();
      if (data == null)
        return;
      set2(data);
    });
    return () => unsubscribe();
  });
  const { subscribe } = store;
  const set = (value) => {
    console.log("read");
    setDoc(ref, value);
  };
  return {
    subscribe,
    set
  };
}
function secondsToTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  return formattedMinutes + ":" + formattedSeconds;
}
function sortPlayersByScore(players) {
  let sorted = players.sort((a, b) => b.points - a.points);
  let rt = [];
  sorted.forEach((player, index) => {
    rt.push({ ...player, index: index + 1 });
  });
  return rt;
}
export {
  sortPlayersByScore as a,
  docWrite as d,
  secondsToTime as s
};
