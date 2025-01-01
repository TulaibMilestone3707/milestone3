'use client '
import React, { useEffect, useState}   from 'react'
import Link from "next/link"
import { headers } from 'next/headers';
import { TbHours12 } from 'react-icons/tb';

export default function NavBar() {
  const[currentDateTime, setCurrenDateTime] = useState('');
  useEffect(()=>{
    const updateDataTime=() =>{
      const now = new Date();
      const options: Intl.DateTimeFormatOptions={
        weekday :"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12: false ,
}



    };

updateDataTime();
const interValId =setInterval(updateDataTime, 1000);
return () => clearInterval(interValId)



  },[]);
  
  
  
  
  return (
   <header className='text-gray-400 body-font shadow-lg'>
    <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
<div className='flex-1 text-black'>
  <span>{currentDateTime}</span>
</div>
<nav className='md:ml-auto flex flex-wrap items-center text-black justify-center '>
  <link href={"https://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration:100 transform-10'>
    {" "}
    Home{" "}
  </link>
  <link href={"https://localhost:3000/about"} className='mr-5 hover:text-red-700 transition-colors duration:100 transform-10'>
    {" "}
    About{" "}
  </link>
  <link href={"https://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration:100 transform-10'>
    {" "}
    Blog{" "}
  </link>
  <link href={"https://localhost:3000/contact"} className='mr-5 hover:text-red-700 transition-colors duration:100 transform-10'>
    {" "}
    Contact{" "}
  </link>

</nav>



    </div>
   </header>
  
  )
}



























function updateDataTime() {
  throw new Error('Function not implemented.');
}

