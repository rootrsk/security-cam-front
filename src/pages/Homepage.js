import React,{ useState } from 'react'
import { Link } from'react-router-dom'
import { Box, Button, Heading, Divider, Modal} from 'native-base'
import { useNavigate,useLocation } from'react-router-dom'
import Header from '../components/Header'

import ViewCapturedImage from './user/ViewCapturedImage'
import Footer from '../components/Footer'

function Homepage() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const location = useLocation()
    console.log(location)
    
    return (
        <Box  >
            <Header  />
            <Divider bg='gray.500' />
            <div className="empty-box" style={{marginTop:'30vh',marginBottom:'30vh'}}>
                <p>Website is under construction.</p>
            </div>
                
            <Footer/>
        </Box>
    )
}

export default Homepage
