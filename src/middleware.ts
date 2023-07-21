import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
    let cookieToken = request.cookies.get('token')
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/account/login'
    console.log('ct', cookieToken)
    if (!cookieToken && request.nextUrl.pathname.startsWith('/favorites') ||
        !cookieToken && request.nextUrl.pathname.startsWith('/admin-dashboard')
    ) return NextResponse.rewrite(loginUrl)
}

