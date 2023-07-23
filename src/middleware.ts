import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
    let cookieToken = request.cookies.get('token')
    let cookieRole = request.cookies.get('role')

    console.log('cookie role', cookieRole);

    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/account/login'

    if (!cookieToken && request.nextUrl.pathname.startsWith('/favorites') ||
        !cookieToken && request.nextUrl.pathname.startsWith('/admin-dashboard') ||
        cookieToken && request.nextUrl.pathname.startsWith('/admin-dashboard') && cookieRole?.value.toLowerCase() != 'admin'
    ) { return NextResponse.rewrite(loginUrl) }
}
