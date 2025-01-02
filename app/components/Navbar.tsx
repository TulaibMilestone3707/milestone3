import React from 'react'
import { FaBolt } from 'react-icons/fa';
import { FaHamburger, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
export default function Navbar() {
    return (
        <div>
            <div className="grid xl:grid-cols-1 grid-cols-1">
                <div className="p-5">
                    <div className="py-3 px-3 rounded-xl border w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-items-center items-center gap-2">
                                <FaHamburger/>
                                <div style={{ position: "relative" }}>
                                    <input className="rounded-3xl py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block" placeholder="search for your favourite burger from menu" />
                                    <FaSearch/>
                                </div>

                            </div>
<div className=" flex justify-center items-center gap-2">


<FaBolt />
<p className="text-sm text-white hidden lg:block md:block">order now and get it <span className=" text-amber-400">15 minutes</span></p>
</div>
<FaCartShopping/>
<img
className="inline-block w-8 h-8 rounded-full ring-2 ring-sky hover:text-amber-400"
src="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
alt="user avtar"/>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}