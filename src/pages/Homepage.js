import React,{ useState } from 'react'
import { Link } from'react-router-dom'
import { Box, Button, Heading, Divider, Modal} from 'native-base'
import { useNavigate,useLocation } from'react-router-dom'
import Header from '../components/Header'

import ViewCapturedImage from './user/ViewCapturedImage'
import Footer from '../components/Footer'
import Features from '../components/Featurs'

function Homepage() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Box  >
            <Header  />
            <Divider bg='gray.700' />
            <div>
                <div className="landing-div">
                    <div className='div-1'>
                        <p className='main-text' >Capture Automate <br/> and Secure</p>
                        <p className='main-text-helper'>Welcome to Cloud Vision! One place to control, capture and store securely images in cloud under different scenarios</p>
                        <button onClick={()=>navigate("/signup")} >Get Started</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/jJv1FC0/pngwing-com.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="empty-box" style={{marginTop:'30vh',marginBottom:'30vh'}}>
                <p>Website is under construction.</p>
            </div> */}

            <Features />
            <Footer/>
        </Box>
    )
}

export default Homepage
