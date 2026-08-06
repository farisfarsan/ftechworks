// Lets the hero intro start exactly when the preloader begins its exit,
// without coupling the two components. Module state survives client-side
// navigations, so the intro never re-waits after the first load.
let done = false;
const listeners = new Set<() => void>();

export function markPreloaderDone() {
  if (done) return;
  done = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

export function onPreloaderDone(fn: () => void): () => void {
  if (done) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}
