// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  
  // Check if the user is authenticated
  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  // Check if the user is an admin for admin routes
  if (request.nextUrl.pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  // Existing verification check
  if (request.nextUrl.pathname.startsWith("/admin") && !token.isVerified) {
    return NextResponse.redirect(new URL("/verify/" + token.username, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};