import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
    interface JWT {
        /** The user's role. */
        userRole?: "admin"
        email?: string,
        name?: string,
        token?: string,
        refresh_token?: string,
    }
}

/** Example on how to extend the built-in session types */
declare module "next-auth" {
    interface Session {
        /** The user's role. */
        userRole?: "admin"
        email?: string,
        name?: string,
        token?: string,
        refresh_token?: string,
    }
}
