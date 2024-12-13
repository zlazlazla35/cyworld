import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        // github OAuth
        GithubProvider({
            clientId: 'Ov23liQhKFsCYfEF01pm',
            clientSecret: 'abcdefghijk16c81e1150cde5c6d75f9683364457244975402d',
        }),
    ],
    secret : 'aabbcc2376'
}
export default NextAuth(authOptions)