import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60 // 30 days
  },
  pages: {
    signIn: '/auth/sign-in'
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT callback: ', { token, user })
      if (user) {
        return {
          ...token,
          ...user
        }
      }
      return token
    },
    async session({ session, token }) {
      console.log('Session callback: ', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string
        }
      }
    }
  }
})
