export default function Carousel() {
    return (
        <div>
            <section className="bg-gradient-to-r from-black to-gray-700">
                <div className=" py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md_grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-2 sm:col-span-2 bg-gradient-to-r from-balck to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE=" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
                                    alt="burger"
                                    className="absolute insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className=" absolute insert-0 bg-gradient-to-b from-grey-900/25 to grey-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4xs:text-xl md:text-0xl">classic bites</h3>
                            </a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700">
                            <a href="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE=" className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4" >
                                <img src="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE=" alt="burger2"
                                    className="absolute insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className=" absolute insert-0 bg-gradient-to-b from-grey-900/25 to grey-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4xs:text-xl md:text-0xl">goldmate grills</h3>
                            </a>
                            <div className="grid gap-4 grid-col-2 sm:grid-col-2  lg:grid-cols-2">
                                <a href="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE=" className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src=""
                                        alt="burger3"
                                        className="absolute insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-100 ease-in-out" />
                                    <div className="absolute insert-0 bg-gradient-to-b fom-grey-900/25 to-grey-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4xs:text-xl md:text-0xl">spicy masala</h3>
                                </a>
                                <a href="https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE=" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}