import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production',
    });

    const { pathname, origin } = req.nextUrl;

    // Allow access to the login page for unauthenticated users
    if (pathname === '/login') {
        return NextResponse.next();
    }

    // Redirect unauthenticated users to the login page
    if (!session) {
        return NextResponse.redirect(`${origin}/login`);
    }

    // Allow access to authenticated users
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};