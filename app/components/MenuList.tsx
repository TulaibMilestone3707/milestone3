import React from "react";
var length:any 
import { FaShoppingCart } from "react-icons/fa";
let index :any 
const productCardGrid = () => {
const productImages:any ={
};
return(
    <div className="relative text-center p-10">
<div className="absolute insert-0"
style={{
    backgroundImage:"url('')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    zIndex:0,
    opacity:0.1,
}}/>
    <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>Most requisted item </h1>
<h1 className='text-3xl text-white z-10 relative'>Order now</h1>

<section  id='projects'className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-item-center gap-y 20 gap-x-12 mt-10 mb-5'>
[Array.from({length= 6}).map() ={">"}; {
<div
    key={index} ><a href="#">
        <img src={productImages[index]} alt={`Product ${index +1}`} className='h-90 w-72 object-cover rouded-t-xl'/>
        <div className='px-4 py-3 w-72'>
            <span className='text-slate-500 mr-3 uppercase text-xs'>Categary</span>
            <p className='text-lg font-bold text-red-700 trancate block captilize'>Burger name  {index+1}</p>
            <div className='flex item-center'>
                <p className="text-lg font-semibold text-block my-3 cursor-auto">$188</p>
                <del>
                    <br/>
                    <p className='text-sm text-blue-800 cursor-auto ml-2'>$189</p>
                </del>
                <div className='ml-auto'>
                    <FaShoppingCart />
                </div>
            </div>
        </div>
    </a>
</div>
} ]

</section>

</div>
    
)

}

export default productCardGrid;