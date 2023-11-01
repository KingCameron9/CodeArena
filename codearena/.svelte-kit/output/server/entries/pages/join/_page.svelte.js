import { c as create_ssr_component, j as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-text.s-kxj4EvwaIzwE{width:85%;height:20%;border-radius:10px;margin-bottom:5px;font-size:min(3vw, 3vh);text-align:center}.input-page-container.s-kxj4EvwaIzwE{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;background-color:#1E1E1E;flex-direction:column}.input-container.s-kxj4EvwaIzwE{margin:10px;background-color:lightgray;border-radius:10px;width:40vw;height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let codeInput;
  let nameInput;
  $$result.css.add(css);
  return `<div class="input-page-container s-kxj4EvwaIzwE"><div class="input-container s-kxj4EvwaIzwE"><p style="font-size: 30px" data-svelte-h="svelte-9jl68k">Helix</p> <input placeholder="code" type="text" class="input-text s-kxj4EvwaIzwE"${add_attribute("this", codeInput, 0)}> <input placeholder="username" type="text" class="input-text s-kxj4EvwaIzwE"${add_attribute("this", nameInput, 0)}> <button style="margin: 20px" class="input-text s-kxj4EvwaIzwE" data-svelte-h="svelte-19pwk96">Click to join</button> ${``}</div> </div>`;
});
export {
  Page as default
};
