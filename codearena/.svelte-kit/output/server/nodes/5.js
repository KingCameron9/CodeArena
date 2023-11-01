

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/join/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3992e014.js","_app/immutable/chunks/scheduler.201f007e.js","_app/immutable/chunks/index.235626ab.js","_app/immutable/chunks/navigation.653fb3a1.js","_app/immutable/chunks/singletons.b32c5afb.js","_app/immutable/chunks/index.252cb1cb.js","_app/immutable/chunks/firebase.92351020.js","_app/immutable/chunks/gameInfo.024111f2.js"];
export const stylesheets = ["_app/immutable/assets/5.c1195c28.css"];
export const fonts = [];
