import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default (req:NextApiRequest, res:NextApiResponse) => NextAuth(req, res, {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      scope: "read:user"
    })   
    // ...add more providers here
  ]
  

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});


