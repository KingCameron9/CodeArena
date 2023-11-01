import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape } from "../../../chunks/ssr.js";
import { c as createWritable } from "../../../chunks/firebase.js";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { S as State } from "../../../chunks/types.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $writable, $$unsubscribe_writable;
  let db = getFirestore();
  let path = "/games/2";
  const gameRef = doc(db, path);
  setDoc(gameRef, { score: 100 });
  let writable = createWritable("/games/1", { state: State.waiting, players: [] });
  validate_store(writable, "writable");
  $$unsubscribe_writable = subscribe(writable, (value) => $writable = value);
  $$unsubscribe_writable();
  return `<p>${escape($writable.state)}</p> <button data-svelte-h="svelte-1r4yxvb">click</button>`;
});
export {
  Page as default
};
