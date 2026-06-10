import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang?.includes("bn")) return "bn";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Skip static files, api, and Next.js internals
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
