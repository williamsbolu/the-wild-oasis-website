import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // next auth is going to call this authorized function whenever a users tries to access the route that has been protected in the middleware "matcher": "/account"
  callbacks: {
    authorized({ auth, request }) {
      // if(auth?.user) {
      //     return true;
      // } else {
      //     return false;
      // }
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        // if there is no existing guest, we want to create a new guest
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch (err) {
        // with returning false, the user is not going to be logged in
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);

      // then we add the logged in guest id/user id to the session to be available appwide
      session.user.guestId = guest.id;
      return session;
    },
  },
  // Let auth.js know about the login page
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

// session calllback runs after the signIn callback, and also each time the session is checked out
