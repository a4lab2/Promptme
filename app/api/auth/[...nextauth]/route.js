

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
// User
import { connectToDB } from '@utils/database';
import User from '@models/user';

const handler=NextAuth({
    providers:[GoogleProvider({
        clientId:process.env.GOOGLEID,
        clientSecret:process.env.GOOGLESECRET
    })],
    callbacks:{
        async session ({session}){
            //Handles sessio
            
            const sessionUser=await User.findOne({
                email:session.user.email
            })
            
            session.user.id=sessionUser._id.toString()
            return session
                },
                async signIn ({profile}){
                    try {
                        await connectToDB()
            
                        // check exist 
                    const userExists=await User.findOne({
                        email:profile.email
                    })
            
                        // if not create user 
                    if (!userExists) {
                        await User.create({
                            email:profile.email,
                            username:profile.name.replace(" ","").toLowerCase(),
                            image:profile.picture
                        })
                    }
                    return true
                    } catch (error) {
                        console.log("Error checking if user exists: ", error.message);
                        return false
                    }
                }
    },
    
})
export {handler as GET, handler as POST};