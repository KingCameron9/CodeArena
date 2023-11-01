import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape, n as each } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import { d as docWrite, a as sortPlayersByScore } from "../../../chunks/utils.js";
import { S as State } from "../../../chunks/types.js";
import { getFirestore, collection, onSnapshot, setDoc, doc } from "firebase/firestore";
import { w as writable } from "../../../chunks/index.js";
import "js-confetti";
let db = getFirestore();
function colRead(path, placeHolder) {
  let ref = collection(db, path);
  console.log("hello");
  const { subscribe: subscribe2 } = writable(placeHolder, (set) => {
    let unsubscribe = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs;
      let arr = [];
      data.forEach((doc2) => {
        arr.push({ id: doc2.id, ...doc2.data() });
      });
      set(arr);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const stringCompression = {
  funcName: "compressString",
  ready: true,
  tests: [
    { args: ["aabcccccaaa"], output: "a2b1c5a3" },
    { args: ["abcdef"], output: "abcdef" },
    { args: ["aabbaa"], output: "a2b2a2" },
    { args: ["aa"], output: "a2" },
    { args: [""], output: "" },
    { args: ["aabbbccc"], output: "a2b3c3" }
  ],
  default: `/**
* @param {string} s
* @return {string} Compressed string
*/

//function must be called "compressString"
function compressString(s) {
    // Write your code here
}
`,
  docs: `
# String Compression Function

This function takes a string as input and compresses it based on the counts of repeated characters. If the compressed string is not smaller than the original string, it should return the original string.

## Parameters:
- **s** (string): The input string.

## Returns:
- (string): Compressed string or the original string if the compressed version is not smaller.

## Example:
\`\`\`
compressString("aabcccccaaa") -> "a2b1c5a3"
compressString("abcdef") -> "abcdef" (Compressed string is not smaller)
\`\`\`
`
};
const longestSubstringWithoutRepeating = {
  funcName: "lengthOfLongestSubstring",
  ready: true,
  tests: [
    { args: ["abcabcbb"], output: 3 },
    { args: ["bbbbb"], output: 1 },
    { args: ["pwwkew"], output: 3 },
    { args: ["abcabcbb"], output: 3 },
    // Example test case
    { args: ["bbbbb"], output: 1 },
    // Example test case
    { args: ["pwwkew"], output: 3 },
    // Example test case
    { args: [""], output: 0 },
    // Empty string, expected output: 0
    { args: ["abcdef"], output: 6 },
    // All distinct characters, expected output: 6
    { args: ["abba"], output: 2 },
    // Repeating characters at the end, expected output: 2
    { args: ["aab"], output: 2 },
    // Repeating characters at the start, expected output: 2
    { args: ["abcabcabcd"], output: 4 },
    // Repeating characters in the middle, expected output: 4
    { args: ["abcdeabcdeabcde"], output: 5 },
    // Repeating pattern, expected output: 5
    { args: ["abcdefghijklmnopqrstuvwxyz"], output: 26 },
    // All alphabet characters, expected output: 26
    { args: ["1122334455"], output: 2 },
    // Repeating digits, expected output: 2
    { args: ["!@#$%^&*"], output: 9 },
    // Special characters, expected output: 9
    { args: ["   "], output: 1 },
    // Spaces, expected output: 1
    { args: ["ab cabcbb"], output: 4 }
  ],
  default: `/**
* @param {string} s
* @return {number} Length of the longest substring without repeating characters
*/

//function must be called "lengthOfLongestSubstring"
function lengthOfLongestSubstring(s) {
    // Write your code here
}
`,
  docs: `
# Longest Substring Without Repeating Characters Function

This function takes a string as input and finds the length of the longest substring without repeating characters.

## Parameters:
- **s** (string): The input string.

## Returns:
- (number): Length of the longest substring without repeating characters.

## Example:
\`\`\`
lengthOfLongestSubstring("abcabcbb") -> 3
lengthOfLongestSubstring("bbbbb") -> 1
lengthOfLongestSubstring("pwwkew") -> 3
\`\`\`
`
};
const pythagorean = {
  funcName: "pythagorean",
  ready: true,
  tests: [
    { args: [3, 4], output: 5 },
    { args: [0, 3], output: 3 },
    { args: [5, 0], output: 5 },
    { args: [5, 12], output: 13 },
    { args: [7, 24], output: 25 }
  ],
  default: `/**
* @param {number} a
* @param {number} b
* @return {number} returns c given the pythagorean theorem sqrt(a^2 + b^2) = c
*/

//function must be called "pythagorean"
function pythagorean(a, b) {
    // Write your code here
}
`,
  docs: `
# pythagorean Function

This function takes two numbers as input and returns them using the pythagorean theorem.

## Parameters:
- **a** (number): The first number.
- **b** (number): The second number.

## Returns:
- (number): c

## Example:
\`\`\`
pythagorean(3, 4) -> 5
pythagorean(0, 3) -> 3
pythagorean(5, 0) -> 5
\`\`\`
`
};
const reverseString = {
  funcName: "reverseString",
  ready: true,
  tests: [
    { args: ["hello"], output: "olleh" },
    { args: ["world"], output: "dlrow" },
    { args: ["12345"], output: "54321" },
    { args: ["drew"], output: "werd" },
    { args: ["sammy"], output: "ymmas" }
  ],
  default: `/**
* @param {string} str
* @return {string} Reversed string
*/

        //function must be called "answer"
const reverseString = function(str){
    // Write your code here
}
`,
  docs: `
# Reverse String Function

This function takes a string as input and returns the reversed string.

## Parameters:
- **str** (string): The input string to be reversed.

## Returns:
- (string): The reversed version of the input string.

## Example:
\`\`\`
reverseString("hello") -> "olleh"
reverseString("world") -> "dlrow"
\`\`\`
`
};
const camelCaseConversion = {
  funcName: "toCamelCase",
  ready: true,
  tests: [
    { args: ["hello_world"], output: "helloWorld" },
    { args: ["hello_world_example"], output: "helloWorldExample" },
    { args: ["some_text"], output: "someText" },
    { args: ["camel_caseString"], output: "camelCaseString" }
  ],
  default: `/**
* @param {string} str
* @return {string} Camel cased string
*/

//function must be called "answer"
const toCamelCase = function(str){
    // Write your code here
}
`,
  docs: `
# Camel Case Conversion Function

This function takes a string as input and converts it into camel case.

## Parameters:
- **str** (string): The input string to be converted to camel case.

## Returns:
- (string): The input string converted to camel case.

## Example:
\`\`\`
toCamelCase("hello_world") -> "helloWorld"
toCamelCase("some_text") -> "someText"
toCamelCase("some_text") -> "someText"
toCamelCase("snake_case_is_cool") -> "snakeCaseIsCool"
\`\`\`
`
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#start-button.s-2B9GJiAItJDh{background-color:rgb(45,45,45);color:white;border:none;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:8px;transition:background-color 0.3s ease}#start-button.s-2B9GJiAItJDh:hover{background-color:rgb(50,50,50)}.player-container.s-2B9GJiAItJDh{padding:2px;margin:10px;display:flex;background-color:#272727;height:min-content;border-radius:10px;width:12%;align-items:center;justify-content:center}.players-container.s-2B9GJiAItJDh{display:flex;flex-direction:row;background-color:#1E1E1E;flex-wrap:wrap;margin:5%;width:80%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $game, $$unsubscribe_game;
  let $players, $$unsubscribe_players;
  let code = Math.round(Math.random() * 1e5);
  setDoc(doc(getFirestore(), "/games/" + code), {
    time: 100,
    state: State.waiting,
    questions: JSON.stringify([
      pythagorean,
      reverseString,
      camelCaseConversion,
      longestSubstringWithoutRepeating,
      stringCompression
    ])
  });
  const game = docWrite("/games/" + code);
  validate_store(game, "game");
  $$unsubscribe_game = subscribe(game, (value) => $game = value);
  let text = "Scorebard";
  const players = colRead("/games/" + code + "/players", []);
  validate_store(players, "players");
  $$unsubscribe_players = subscribe(players, (value) => $players = value);
  $$result.css.add(css);
  $$unsubscribe_game();
  $$unsubscribe_players();
  return `${$game?.state == State.playing ? `<p style="position: absolute; top: 2; left: 2%; color: white; font-size: 25px; ">${escape(code)}</p>` : ``} <div style="color: white; background-color: #1E1E1E; display: flex; align-items: center; width: 100vw; height: 100vh; flex-direction:column;">${$game?.state === State.waiting ? `<p style="color: white; font-size: 30px">${escape(code)}</p> ${`<button id="start-button" class="s-2B9GJiAItJDh" data-svelte-h="svelte-16l6qx9">Start game</button>`} <div class="players-container s-2B9GJiAItJDh">${each($players, (player) => {
    return `<div class="player-container s-2B9GJiAItJDh"><p style="text-align: center; color: white; font-size: 20px">${escape(player.id)}</p> </div>`;
  })}</div>` : ``} ${$game?.state === State.playing ? `<p style="font-size: 30px;">${escape(text)}</p> <div class="player-container s-2B9GJiAItJDh" style="flex-direction: column;width: 50%; overflow: hidden; size: 30px">${each(sortPlayersByScore($players), (player) => {
    return `${player.finishedTime != null ? `<p style="color: green">${escape(player.index)}. ${escape(player.id)} Finished in ${escape(player.finishedTime)}</p>` : `<p>${escape(player.index)}. ${escape(player.id)} ${escape(player.points)}</p>`}`;
  })}</div>` : ``} </div>`;
});
export {
  Page as default
};
