

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/testing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.9330d882.js","_app/immutable/chunks/scheduler.201f007e.js","_app/immutable/chunks/index.235626ab.js","_app/immutable/chunks/firebase.92351020.js","_app/immutable/chunks/index.252cb1cb.js","_app/immutable/chunks/types.68c5b85d.js"];
export const stylesheets = [];
export const fonts = [];
