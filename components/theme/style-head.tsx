import { DEFAULT_LAYOUT, LAYOUT_STORAGE_KEY, SITE_LAYOUTS } from "@/lib/themes/layouts";
import { STYLES, STYLE_STORAGE_KEY, buildStyleCss } from "@/lib/themes/styles";

const css = buildStyleCss();
const layoutIds = JSON.stringify(SITE_LAYOUTS.map((l) => l.id));
const ids = JSON.stringify(STYLES.map((s) => s.id));

// Runs before first paint so the saved style never flashes.
const script = `try{var s=localStorage.getItem(${JSON.stringify(STYLE_STORAGE_KEY)});if(s&&${ids}.indexOf(s)>-1&&s!==${JSON.stringify(STYLES[0].id)})document.documentElement.setAttribute("data-style",s)}catch(e){}try{var l=localStorage.getItem(${JSON.stringify(LAYOUT_STORAGE_KEY)});if(l&&${layoutIds}.indexOf(l)>-1&&l!==${JSON.stringify(DEFAULT_LAYOUT)})document.documentElement.setAttribute("data-layout",l)}catch(e){}`;

/** Server component: the generated style CSS plus the pre-paint script. Render inside <head>. */
export function StyleHead() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
