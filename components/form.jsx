import Link from 'next/link'
import React from 'react'

const Form = ({type,
  post,
  setPost,
  submitting,
  handleSubmit}) => {
  return (
    
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
          <span className='blue_gradient'>{type} Post</span>
        </h1>
        <p className=' desc text-left max-w-md'>
          {type} and share amazing promp with tehfsdfdhjsfdjif fdnujfdhfeuhifde fjreffuhfreiu
        </p>
        <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism' action="">
          <label >
<span className='font-satoshi font-semibold text-base text-gray-700'>
  Your AI Prompt

</span>

<textarea  value={post.prompt} onChange={(e)=>setPost({...post, prompt:e.target.value})} placeholder='Write your promp here' required className='form_textarea'/>
          </label>
        </form>
        <span className="blue_gradient">{type }</span></section>
  )
}

export default Form