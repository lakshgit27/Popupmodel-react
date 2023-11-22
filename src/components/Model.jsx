import React, { useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react';

const Model = ({onclose}) => {
   const modelRef = useRef();
   const closeModel=(e)=>{
    if(modelRef.current===e.target){
        onclose();
    }
   }
   
  return (
    <div ref={modelRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onclose} className='place-self-end'><X size={30}/></button>
        </div>
        <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
            <h1 className='text-3xl font-extrabold'>DOWNLOAD FREE eBOOK</h1>
            <p className='text-3xl font-bold max-w-md text-center'>Want to learn how to crack Web Development Interviews Like a Pro!</p>
            <form>
                <input type='email' placeholder='Enter your email' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md'></input>
                <button  className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'><Download/>Download eBook</button>
            </form>
        </div>
    </div>
  )
}



export default Model