import React from 'react'
import FeatureCard from './FeatureCard'
const features = [
    {
        title:"Motion Capture",
        image:"https://www.apogeephoto.com/wp-content/uploads/2016/06/Harry-Fisch_Blur-41454145Myanmar_014_Def_4145.jpg",
        description: " Motion capture allow camera to detect any object in front of camera and capture it.A time limit is also set to to reduce the overlapping of image capture.We are using ultrasonic sensor of this purpose."
    },{
        title:"Sound Capture",
        image: "https://blogs.cdn.medel.com/blog.medel.com/uploads/20200225104909/sound-wave.jpg",
        description: "Sound Detect Moude is listening to all kind of sound and noises around it, Any sound over a fixed intensity result in capturing image.This features helps users in case of noise movement."
    },{
        title:"Time Capture",
        image: "https://media.istockphoto.com/photos/spiral-clock-the-flow-of-time-dark-blue-turquoise-picture-id1341635109?b=1&k=20&m=1341635109&s=170667a&w=0&h=G3VCioaHHV-CdEWZIHqcGaGcJEFHkq2wSsYzDGC7wSc=",
        description: "A time duration has been set to the device which captures images at a regular interval of time and save it to the database.This keeps track of all kind of things happing around."
    }, {
        title: "Onclick Capture",
        image: "https://www.securitymagazine.com/ext/resources/images/cyber-security-freepik1170x658x6.jpg?1647265825",
        description: "Whenever user want to capture image from installed device, he/she can capture from anywhere in world by just one click using mobile application.Image will be quickly sent to the user."
    },{
        title:"Secured Storage",
        image: "https://standards.ieee.org/wp-content/uploads/import/visuals/images/agile-cloud-computing.jpg",
        description: "All the image which are being caputed and uploaded to the server is completely secured. Only authenticated user can perform any kind of operations such as edit , delete."
    }, {
        title: "Image Backup",
        image: "https://blogs.manageengine.com/wp-content/uploads/2019/01/big-data-concept_1302-14918-1.jpg",
        description: "All the images which are being captured  are  stored in aws s3 bucket, so we don’t have to worry about the data loss even if we loose our database our image will be safe in the bucket."
    }, {
        title: "Object Detectation",
        image: "https://business.blogthinkbig.com/wp-content/uploads/sites/2/2019/04/eye-2771174_1920.jpg",
        description: "All the objects in the images is being scanned before saving to the databases are labeled with all the object appearing in that particular image."
    },{
        title: "Email Alert",
        image: "https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/22134115/email.jpg",
        description: "This feature is currently in progress.If we get any kind of weapons or related object detected in image then immediately an alert email will be send to the users."
    }, {
        title: "Application Control",
        image: "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/2ekCOVMSeZ5Ey8PXM5AeoS/4b7a57d414fd73773ec360463333ce2d/shutterstock_552299920__1_.jpg?w=770&h=370&fit=crop",
        description: "Users also have the access of mobile application from where authenticated users can perform all kind of necessary operations such as capturing image controlling camera sensors etc."
    }, {
        title: "Camera Control",
        image: "https://www.securitymagazine.com/ext/resources/images/security-cctv-camera-freepik.jpg?1630423268",
        description: "Users have various control over camera , he/she can control flash , motion sensor and sound sensor form anywhere in the world according to their requirement."
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