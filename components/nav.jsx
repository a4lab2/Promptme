"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { use } from "bcrypt/promises"

const Nav = () => {
    const isUserloggedIn=true
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false);
    useEffect(() => {
        const setProviders=async()=>{
            const response=await getProviders();
            setProviders(response)
        }
        setProviders()
        
    }, []);
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" alt="" width={30} height={30} className="object-contain"/>
            <p className="logo-text">Promptopia</p>
            </Link>

            <div className="sm:flex hidden">
                {isUserloggedIn?(
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">Create Post</Link>
                        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile"/>
                        </Link>
                    </div>
                ):(
                <>
                
                {providers && Object.values(providers).map((provider)=>(

                    <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="black_btn">
                        Sign In
                    </button>
                )
                
                )}
                
                </>)}
            </div>
            {/* mobile */}
            <div className="sm:hidden flex relative">
                {isUserloggedIn?(

                    <div className="flex">
                        <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile" onClick={()=>settoggleDropdown((prev)=>
                            !prev
                            )}/>

                            {toggleDropdown && (
                                <div className="dropdown">
                                    <Link href="/profile" className="dropdown_link" onClick={()=>settoggleDropdown(false)}>My Profile</Link>
                                    <Link href="/create-prompt" className="dropdown_link" onClick={()=>settoggleDropdown(false)}>Create prompt</Link>
                                    <button type="button" className="mt-5 w-full black_btn" onClick={()=> {settoggleDropdown(false);signOut()}}>Sign Out</button>
                                    

                                </div>
                            )}
                    </div>
                ):(<>
                            
                    {providers && Object.values(providers).map((provider)=>(

                        <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="black_btn">
                            Sign In
                        </button>
                    )
                    
                    )}
                    
                    </>)}
            </div>


        </nav>
    )
}

export default Nav