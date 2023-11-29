"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Profile from '@components/profile'
import Router from 'next/router'


const Myprofile = () => {
    const router=useRouter()
    const {data:session}=useSession()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts=async ()=>{
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data=await response.json()

            setPosts(data)
        }
        if(session?.user.id) fetchPosts();
        
    }, []);
    const handleEdit=(post)=>{
        // console.log("Clicked edt")
        router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete=()=>{

    }

  return (
        <Profile 
        name="My" 
        desc="Welcome to your personalized  profile page" 
        data={posts} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete}
        />  
        )
}

export default Myprofile