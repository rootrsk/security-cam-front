import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Button, } from 'native-base'
import ImageContainer from '../../components/ImageContainer';
import { Refresh, RadioButtonChecked,NavigateNext, NavigateBefore } from '@mui/icons-material'
import { io } from "socket.io-client";
const socket = io("https://rootrsk-security-api.herokuapp.com/");
function ViewCapturedImage(props) {
    const [loading,setLoading]  = useState(false);
    const [images,setImages] = useState([])
    const [skip,setSkip] = useState(0)
    const [status,setStatus] = useState(true)
    
    
    useEffect(()=>{
        socket.on('connect', () => {
            console.log('hii')
            setStatus(true)
        })
        socket.on('new-image-uploaded', (image) => {
            console.log(image)
            console.log('worked')
            setImages(prevState=>{
                return [image,...prevState]
            })
        })
        socket.on('disconnect', () => {
            console.log('hii')
            setStatus(false)
        })

    },[])
    console.log(props)
    const fetchImage = async (skip) => {
        setLoading(true)
        try {
            const response = await axios({
                url: 'https://rootrsk-security-api.herokuapp.com/user/images?skip='+skip,
                method: 'get',
            })
            console.log(response.data)
            if(response.data && response.data.error){
                return alert(response.data.error)
            }
            if(response.data && response.data.savedImages){
                setImages(response.data.savedImages)
                setSkip(parseInt(skip) + parseInt((response.data.savedImages).length))
            }

        } catch (error) {
            
        }
        setLoading(false)
        
    }
    useEffect(() => {
        fetchImage(0)
        return () => {}
    }, [])
    return (
        <div>
            <div className = "notification-card" >
                <div className='flex ac sb' >
                    <div className='flex ac' >
                        <p>{status?'Connected':'Disconnected'}</p> 
                        <p>
                            
                        </p>
                        
                        <RadioButtonChecked 

                            style={{
                                marginLeft:'10px',
                                color:status?'rgb(33, 251, 106)':'rgb(251, 33, 33)'
                            }}  
                        />
                    </div>
                    <div className='flex' >
                        <Button
                            leftIcon={<NavigateBefore />}
                            variant='outline'
                            isDisabled={true}
                            isLoading={loading}
                            // onPress={fetchImage}
                            borderColor='white'
                            borderRadius='2px'
                            fontSize='22px'
                            _text={{
                                background:'white'
                            }}
                            _focus={{
                                background:'black'
                            }}
                            _hover={{
                                background:'black'
                            }}
                        >
                        </Button>
                        <Button
                            leftIcon={<NavigateNext />}
                            variant='outline'
                            ml='2'
                            isLoading={loading}
                            onPress={()=>fetchImage(skip)}
                            borderColor='white'
                            borderRadius='2px'
                            fontSize='22px'
                            _text={{
                                background:'white'
                            }}
                            _focus={{
                                background:'black'
                            }}
                            _hover={{
                                background:'black'
                            }}
                        >
                        </Button>
                    </div>
                    <Button
                        leftIcon={<Refresh />}
                        variant='outline'
                        // pl='10'
                        // pr='10'
                        isLoading={loading}
                        onPress={()=>fetchImage(0)}
                        borderColor='white'
                        borderRadius='2px'
                        fontSize='22px'
                        _text={{
                            background:'white'
                        }}
                        _focus={{
                            background:'black'
                        }}
                        _hover={{
                            background:'black'
                        }}
                    >
                    </Button>
                    
                    
                </div>
            </div>
            <div className="flex sa wrap">
                {
                    images.map((image)=>{
                        return <ImageContainer {...image} key={image._id} setImages={setImages}  />
                    })
                }
            </div>
            
        </div>
    )
}

export default ViewCapturedImage
