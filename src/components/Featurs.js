import React from 'react'
import FeatureCard from './FeatureCard'
const features = [
    {
        title:"Motion Capture",
        image:"https://www.apogeephoto.com/wp-content/uploads/2016/06/Harry-Fisch_Blur-41454145Myanmar_014_Def_4145.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    },{
        title:"Sound Capture",
        image: "https://blogs.cdn.medel.com/blog.medel.com/uploads/20200225104909/sound-wave.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    },{
        title:"Time Capture",
        image: "https://media.istockphoto.com/photos/spiral-clock-the-flow-of-time-dark-blue-turquoise-picture-id1341635109?b=1&k=20&m=1341635109&s=170667a&w=0&h=G3VCioaHHV-CdEWZIHqcGaGcJEFHkq2wSsYzDGC7wSc=",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    }, {
        title: "Onclick Capture",
        image: "https://www.securitymagazine.com/ext/resources/images/cyber-security-freepik1170x658x6.jpg?1647265825",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    },{
        title:"Secured Storage",
        image: "https://standards.ieee.org/wp-content/uploads/import/visuals/images/agile-cloud-computing.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    }, {
        title: "Image Backup",
        image: "https://blogs.manageengine.com/wp-content/uploads/2019/01/big-data-concept_1302-14918-1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    }, {
        title: "Object Detectation",
        image: "https://business.blogthinkbig.com/wp-content/uploads/sites/2/2019/04/eye-2771174_1920.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    },{
        title: "Email Alert",
        image: "https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/22134115/email.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    }, {
        title: "Application Control",
        image: "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/2ekCOVMSeZ5Ey8PXM5AeoS/4b7a57d414fd73773ec360463333ce2d/shutterstock_552299920__1_.jpg?w=770&h=370&fit=crop",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    }, {
        title: "Camera Control",
        image: "https://www.securitymagazine.com/ext/resources/images/security-cctv-camera-freepik.jpg?1630423268",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatem eum facilis, quae reprehenderit exercitationem fugit consectetur quaerat et aliquam. Molestias veritatis ex quis vero tempore iste quisquam officia!"
    },
]
function Features() {
    return (
        <div className='flex wrap features'>
            {
                features.map((item,index)=>{
                    return <FeatureCard feature={item} key={index+1}/>
                })
            }
        </div>
    )
}

export default Features