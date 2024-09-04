import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: 'login'
  },
  providers: [],
  callbacks: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }

      return token;
    },
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    authorized({ auth, request }: any) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      if (isOnBlogPage && !user) {
        return false;
      }

      if (isOnLoginPage && user) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
      }

      return true;
    }
  }
};
