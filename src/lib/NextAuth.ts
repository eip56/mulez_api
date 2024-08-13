import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60 // 30 days
  },
  pages: {
    signIn: '/auth/sign-in'
  },
  callbacks: {
    async jwt({ token, user }) {
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
