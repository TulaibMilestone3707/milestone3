
import React from 'react'
import { BiCategory } from 'react-icons/bi'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-1oo mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Tulaib Ahmad 
        </h2>
        <p></p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 >EXPLORING THE GATEGORIES</h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'></div>
       {[
        "Technology",
        "Artificial Intelligence ",
        "HTML",
        "Next js",
        "Web developer"
       ].map((Category, index)=>(
        <div key={index}
         className='relative group p-6 bg-white rounded-lg shadow-lg shadow-lg hover:bg-sky-300 hover:text-lack transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
<p className='text-center text-lg font-semibold'>{Category}</p>
<div className=''></div>
         </div>
      
      
      
      
      ))}
      </div>
        <p></p>
      </section>
    </div>
  )
}
