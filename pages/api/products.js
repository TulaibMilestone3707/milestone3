export default function handler (req, res ){
    const products=[
        {
            id:1,
            name:"cheese burger",
            price : 10,
            image :"https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
        },
        {
            id:2,
            name:"beef burger ",
            price : 12,
            image :"https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
        },
        {
            id:3,
            name:"chicken  burger",
            price : 100,
            image :"https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
        },
        {
            id:4,
            name:"hot  burger",
            price : 90,
            image :"https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=K8og-hnCVooX43ASkJbzvFzAZB4rLK7HM0zfn-c7IfE="
        },
    ];
    res.status(200).json(product);
}