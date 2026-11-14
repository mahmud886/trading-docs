import { useSyncExternalStore } from "react";

interface Store {
  now: Date | null;
  listeners: Set<() => void>;
  timer: ReturnType<typeof setInterval> | null;
}

const stores = new Map<number, Store>();

function getStore(ms: number): Store {
  let store = stores.get(ms);
  if (!store) {
    store = { now: null, listeners: new Set(), timer: null };
    stores.set(ms, store);
  }
  return store;
}

function subscribeTo(ms: number, onChange: () => void): () => void {
  const store = getStore(ms);
  store.listeners.add(onChange);
  if (!store.timer) {
    store.timer = setInterval(() => {
      store.now = new Date();
      store.listeners.forEach((l) => l());
    }, ms);
  }
  store.now = new Date();
  onChange();
  return () => {
    store.listeners.delete(onChange);
    if (store.listeners.size === 0 && store.timer) {
      clearInterval(store.timer);
      store.timer = null;
    }
  };
}

/** Current Date, refreshed every `ms`. Null on the server and during hydration. */
export function useNow(ms: number): Date | null {
  return useSyncExternalStore(
    (onChange) => subscribeTo(ms, onChange),
    () => getStore(ms).now,
    () => null,
  );
}
