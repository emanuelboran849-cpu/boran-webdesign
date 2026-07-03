import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.boran-webdesign.de";

function isLocalHost(host: string) {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("192.168.") ||
    host.startsWith("10.")
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";

  if (!host || host === CANONICAL_HOST || isLocalHost(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon-32.png|apple-touch-icon.png|icon-192.png|icon-512.png|site.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};