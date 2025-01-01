'use client';
import React from 'react';
import CommentSection from '@/app/components/CommentSection';
import AutherCard from '@/app/components/AutherCard';
import { BsPostageFill } from 'react-icons/bs';

const posts=[
    {
    id:"1",
    title:"Mastering HTML",
    image:"",
    description:"html base code "
},
{
    id:"1",
    title:"Mastering HTML",
    image:"",
    description:"html base code "
},

    {
      id: '1',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '2',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '3',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '4',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '5',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '6',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '7',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '8',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '9',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },
    {
      id: '10',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      image: "",

    },

]
export default function Post ({params}: {params:{id:string}}) {
    const {id} =params;
    const post = posts.find((p) => p.id === id);
    if(!post){
        return(
            <h2 className='text-2xl font-bold text-center mt-10'> Post not found </h2>
        );
    }
    const renderParagraphs =(description:string) =>{
        return description.split("/n").map((para, index ) =>(
            <p key={index} className='mt-4 text-justify'> </p>

        ));
    };

    return(
        <div className='max-w-3xl mx-auto p-5'>
            <h1 className='md:text-4xltext-3xl font-bold text-red-600 text-center'>{post.title} {""}</h1>
{post.image &&(
    <img
    src={post.image}
    className='w-full h-auto rounded-md mt-4'/>
)}
      <div className='mt-5 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
        </div>      
<CommentSection postId={''}  />
<AutherCard/>


        </div>
    )
}





















