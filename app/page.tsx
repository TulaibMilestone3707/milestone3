import Image from "next/image";
import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import Productlist from './components/Productlist';
import Banner from './components/Banner';
import Card from './components/Card';
import MenuList from './components/MenuList';
import Footer from './components/Footer';






export default function APP() {
  return (
    
<div className='bg-gradient-to-r from-black to-grey-700 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Banner/> 
      <Productlist/>
    
      <Card/>
      <MenuList/>
      
      <Footer/>
    </div>
    
  )
  ;
}
