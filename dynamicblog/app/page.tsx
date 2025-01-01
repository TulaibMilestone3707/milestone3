import React from 'react';
import NavBar from './components/NavBar';
import AutherCard from './components/AutherCard';
import Footer from './components/Footer';
import Mega from './components/Mega';
import Feature from './components/Feature';
import CommentSection from './components/CommentSection';
import BlogCard from './components/BlogCard';

export default function Home() {
  return (
    <div>
      <NavBar/>
    <Feature/>
    <Mega/>
      <AutherCard/>
      <BlogCard post={{
        id: '',
        title: '',
        description: '',
        date: '',
        imageUrl: ''
      }} isDarkBackground={false}/>
<CommentSection postId={''} />

      <Footer/>

    </div>
  );
}