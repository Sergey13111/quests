import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  const isAuth: boolean = req.cookies.get('auth')?.value === 'true';

  if (isAuth) {
    if (pathname === '/sign-in' || pathname === '/sign-up') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  } else {
    if (pathname !== '/sign-in' && pathname !== '/sign-up') {
      return NextResponse.redirect(new URL('/sign-up', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
