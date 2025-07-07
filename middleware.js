import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.headers.get('authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic') {
      const [user, pass] = atob(encoded).split(':')
      if (user === 'admin' && pass === 'secret123') {
        return NextResponse.next()
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
}
