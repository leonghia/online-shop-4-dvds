import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const roles = (await getSession(req, res))?.user["http://localhost:3000/roles"] as string[];
    if (roles?.includes("Admin")) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
    matcher: ['/dashboard/:path*'],
}