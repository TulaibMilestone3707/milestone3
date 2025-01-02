import React from "react";

const floatingImageContentBlock=() => {
    return(
        <section className='container mx-auto py-10 flex flex-col md-flex-rox items-center'>
            <div className='md:w-1/2 md:pr-10'>
                <h2 className=' text-3xl font-bold mb-4 text-white'>delicious burger</h2>
                <p className='text-white mb-4'>xpeince the juciest burger in town only on our outlet</p>
                <button className=' bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transit duration-200'>Order now </button>
           <h3 className=' text-2xl font-semibold mt-6 mb-2 text-center text-white'> {""}Our burger is launching soon {""}</h3>
           <ul>
            <li> <strong> cheesy bbq burger </strong></li><br/>
            <li> <strong> spicy jalepeno burger </strong></li><br/>
            <li> <strong> veggie burger  </strong></li><br/>
            <li> <strong> chicken burger  </strong></li><br/>
           </ul>

<div className=' md:w-1/2 mt-6 md:mt-0'>
    <img src="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
    alt=" burger "
    className="-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"/>
</div>



            </div>
        </section>
    );
};


export default floatingImageContentBlock