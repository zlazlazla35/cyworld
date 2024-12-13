import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "../../../utill/database";


export const authOptions = {
    providers: [
        // github OAuth
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret : process.env.NEXTAUTH_SECRET,
    adapter : MongoDBAdapter(connectDB);
}
export default NextAuth(authOptions)