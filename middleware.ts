export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/projects/:path*',
    '/api/billing/:path*',
    '/api/analytics/:path*',
    '/api/support/:path*',
  ],
};