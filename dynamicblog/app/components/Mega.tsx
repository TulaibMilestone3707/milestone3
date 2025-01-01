import React from 'react'
import BlogCard from './BlogCard';



export default function Mega() {
  const post = [
    {
      id: '1',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '2',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '3',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '4',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '5',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '6',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '7',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '8',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '9',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
    {
      id: '10',
      title: "HTML Block of Webdevelopment",
      description: "Explore the HTML, , the backbone of all the the websites",
      date: "2024-11-28",
      imageUrl: "",

    },
  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the world of AI </h1>


<div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
  {post.map((post, index) =>(
    <div className='fade-in' key={post.id}>
      <div className='blog-card'>
        <BlogCard post={post} isDarkBackground={index % 2 ===0}/>

      </div>
    </div>
  ))}
</div>
    </div>
  )
}



























