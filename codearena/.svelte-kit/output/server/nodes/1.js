

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e7669c4c.js","_app/immutable/chunks/scheduler.201f007e.js","_app/immutable/chunks/index.235626ab.js","_app/immutable/chunks/singletons.b32c5afb.js","_app/immutable/chunks/index.252cb1cb.js"];
export const stylesheets = [];
export const fonts = [];
