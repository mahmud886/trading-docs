import { STYLES, STYLE_STORAGE_KEY, buildStyleCss } from "@/lib/themes/styles";

const css = buildStyleCss();
const ids = JSON.stringify(STYLES.map((s) => s.id));

// Runs before first paint so the saved style never flashes.
const script = `try{var s=localStorage.getItem(${JSON.stringify(STYLE_STORAGE_KEY)});if(s&&${ids}.indexOf(s)>-1&&s!==${JSON.stringify(STYLES[0].id)})document.documentElement.setAttribute("data-style",s)}catch(e){}`;

/** Server component: the generated style CSS plus the pre-paint script. Render inside <head>. */
export function StyleHead() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
