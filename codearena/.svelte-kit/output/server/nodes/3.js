

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ad420bbf.js","_app/immutable/chunks/scheduler.201f007e.js","_app/immutable/chunks/index.235626ab.js","_app/immutable/chunks/index.fa9ef138.js","_app/immutable/chunks/index.252cb1cb.js","_app/immutable/chunks/firebase.92351020.js","_app/immutable/chunks/dev-browser.becde89a.js","_app/immutable/chunks/gameInfo.024111f2.js","_app/immutable/chunks/navigation.653fb3a1.js","_app/immutable/chunks/singletons.b32c5afb.js","_app/immutable/chunks/types.68c5b85d.js"];
export const stylesheets = ["_app/immutable/assets/3.42cd88ce.css"];
export const fonts = [];
