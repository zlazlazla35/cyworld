import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        // github OAuth
        GithubProvider({
            clientId: 'Ov23liQhKFsCYfEF01pm',
            clientSecret: '8dc9c165fe6efca41c680983569b03aec8a8ee68',
        }),
    ],
    secret : 'aabbcc2376'
}
export default NextAuth(authOptions)