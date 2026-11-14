import { useCallback, useSyncExternalStore } from "react";

const EVENT = "td-pref-change";

/**
 * A string preference kept in localStorage. Returns `fallback` on the server and during hydration,
 * and re-renders when the value changes in this tab or another one.
 */
export function useLocalPref(key: string, fallback: string, isValid: (v: string | null) => boolean) {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const getSnapshot = () => {
    try {
      const v = window.localStorage.getItem(key);
      return isValid(v) ? (v as string) : fallback;
    } catch {
      return fallback;
    }
  };

  const value = useSyncExternalStore(subscribe, getSnapshot, () => fallback);

  const set = useCallback(
    (next: string) => {
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // storage unavailable: the preference lasts until reload
      }
      window.dispatchEvent(new Event(EVENT));
    },
    [key],
  );

  return [value, set] as const;
}
