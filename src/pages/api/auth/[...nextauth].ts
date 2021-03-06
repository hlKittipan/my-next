import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import CredentialsProvider from "next-auth/providers/credentials"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"
interface IUser {
    email: string,
    name: string,
    token: string,
    refresh_token: string,
    userRole: string
}
interface IToken {
    token: {
        token: string
        name: string,
        email: string,
        picture: string,
        sub: string,
        user: IUser,
    },
    session: {
        user: IUser
    },
    account: IUser,
    message: string,
    success: boolean,
    user: IUser,
}

interface IAccount {
    message: string,
    success: boolean,
    user: IUser,
}
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// @ts-ignore
// @ts-ignore
export default NextAuth({
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        /* EmailProvider({
             server: process.env.EMAIL_SERVER,
             from: process.env.EMAIL_FROM,
           }),
        // Temporarily removing the Apple provider from the demo site as the
        // callback URL for it needs updating due to Vercel changing domains

        Providers.Apple({
          clientId: process.env.APPLE_ID,
          clientSecret: {
            appleId: process.env.APPLE_ID,
            teamId: process.env.APPLE_TEAM_ID,
            privateKey: process.env.APPLE_PRIVATE_KEY,
            keyId: process.env.APPLE_KEY_ID,
          },
        }),
        */
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_ID,
            clientSecret: process.env.AUTH0_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "user@user.com" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch(process.env.END_POINT + "/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
                // If no error and we have user data, return it
                if (res.ok && data) {
                    return data.user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    theme: {
        colorScheme: "dark",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            user && (token.user = user);
            return token
        },
        session: async ({ session, token, user }: any) => {
            session.user = token.user;  // Setting token in session
            return session;
        },
    },
    pages: {
        // signIn: '/auth/signin',
        // error: '/auth/signin', // Error code passed in query string as ?error=
    },
    secret: process.env.JWT_SECRET,
})
