import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const roles = (await getSession(req, res))?.user["http://localhost:3000/roles"] as string[];
    if (roles?.includes("Admin") && !req.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}