import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [{ email: "test@example.com", password: "password123" }];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize(credentials) {
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (user) return user;
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
