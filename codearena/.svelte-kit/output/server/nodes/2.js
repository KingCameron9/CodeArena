

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d7584011.js","_app/immutable/chunks/scheduler.201f007e.js","_app/immutable/chunks/index.235626ab.js","_app/immutable/chunks/navigation.653fb3a1.js","_app/immutable/chunks/singletons.b32c5afb.js","_app/immutable/chunks/index.252cb1cb.js"];
export const stylesheets = [];
export const fonts = [];
