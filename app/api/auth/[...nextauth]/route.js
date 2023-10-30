

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'


const handler=NextAuth({
    providers:[GoogleProvider({
        clientId:process.env.GOOGLEID,
        clientSecret:process.env.GOOGLESECRET
    })],
    async session ({session}){

    },
    async signIn ({session}){

    }
})
export {handler as GET, handler as POST};