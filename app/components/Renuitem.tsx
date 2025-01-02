'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "./Productcard"
import { Product } from "@/pages/types"
import React from 'react'
export function Renuitem(){
const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)
    const router = useRouter();


    useEffect(() => {
       let prevcart:any
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }

        fetchProducts();

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

    }, []);


    const OnAddCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart,product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;

    })


        const toggleCart = () => {
            setShowCart((prev) => !prev);

        };

        const goToCheckout = () => {
            setIsCheckout(true);
        };

        const clearCart = () => {
            setCart([]);
            localStorage.removeItem("cart");

        };

        return (
            <div className="relative min-h-screen py-6">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                    style={{
                        backgroundImage: "https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
                    }}>

                </div>


                <div className="relative z-10">
                    <div className="max-w-6xl mx-auto text-center mb-a">
                        <h1 className="text-4xl font-bold text-white mb-4">Delicious Burgers in our menu</h1>

                    </div>

                    <div>
                        {products.map((product) => (
                            <ProductCard key={product.id}
                                {...product}
                                OnAddCart={OnAddCart} />
                        )

                        )}
                    </div>


                    <div className="max-w-6xl mx-auto mt-8"><button onClick={toggleCart} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out">
                        {showCart ? 'HideCart' : 'ViewCart'} ({cart.length} items)</button>
                        (showCart && 
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg"><h2 className="text-4xl font-bold mb:4 text-blue-600">Your Cart Item Location </h2>
                                {cart.length > 0 ? (
                                   <div><ul>
                                        {cart.map((product, index) => (
                                            <li key={index} className="flex item-center justify-center mb-6 trensform transition-all duration-300 ease-in-out">
                                                <img src={product.image}
                                                    alt={product.image}
                                                    className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out" />
                                                <span className="ml-4 text-lg font-medium text-slate-600">{product.name} - ${product.price}</span>
                                            </li>
                                        ))}</ul>


                                        <div className="flex justify-between items-center mt-6 text-black">
                                            <span className="font-semibold text-xl">Total: ${cart.reduce((total, product) => total + product.price, 0)}</span>
                                            <div>
                                                <button onClick={goToCheckout} className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-m3 hover:green-700 transition duration-300 ease-in-out text-white transform hover:scale-110">
                                                    Proceed to Checkout
                                                </button>
                                                <button onClick={clearCart} className="bg-red-600 py-3 px-8 rounded-lg text-lg shadow-m3 hover:green-700 transition duration-300 ease-in-out text-white transform hover:scale-110">
                                                    Clear Cart
                                                </button>
                                            </div>
                                        </div>

  </div>
                                ):(
                                    <p className="text-lg text-slate-600">Your Card Is Empty</p>
                                )}
</div>
                        )

                    </div>








{isCheckout &&(
    <div className="fixed insert-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm-w-96">
            <h2 className="text-4xl font-bold text-blue-600 mb-4"> CheckOut</h2>
            <p className="text-lg text-red-600"> Please confirm your Order bfore procedding</p>
            <div> <ul>
                {cart.map((product, index)=>(
                    <li key={index} className="flex justify-between nmb-4">
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                    </li>
                ))}
                </ul>

                <div className="flex justify-betwwen mt-4">
                    <span className="font-semibold">Total</span>
                    <span>${cart.reduce((total,product)=> total + product.price, 0)}</span>





                </div>
                </div>

<div>
    <button onClick={()=>setIsCheckout(false)}
    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow md hover:bg-slate-600 transition duration-300"> close</button>
 <button onClick={()=>alert('order confirm.. will deliver soon...')}
    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow md hover:bg-slate-600 transition duration-300"> Confirm order </button>


</div>


        </div>
    </div>


)
                }


                </div>
            </div>
        


            

        );
            

};

};
};





















}

