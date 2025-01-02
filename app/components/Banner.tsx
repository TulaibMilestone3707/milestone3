export default function Banner(){
    return (
        <div className=" relative overflow-hidden hg-gradient-to-r from-black-to-grey-700 font-sans px-6 py-12 mb-7">
            <div className=" absolute insert-0 opacity-20">
                <img src="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
                alt="burger banner"
                className="w-full h-full object-cover"/>
            </div >
            <div className="relative z-10 container mx-auto flex fle-col justify-center item-center text-center"><h2 className="sm:text-5xl font-bold mb-4
        ">Discover the menu</h2><p className="text-lg text-center mb-6 max-w-xl">shop now for exclusive burger discount
            </p>

            <button type="button" className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded"> exiting deal launch at 12</button>
            </div>
        </div>

    )
}