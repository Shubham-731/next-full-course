import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.MONGODB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "919d7b1e8f59a653b0dd3a9c8fc32f39f6fcb246",
  },
});
