import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Button, } from 'native-base'
import ImageContainer from '../../components/ImageContainer';
import { Refresh, RadioButtonChecked,NavigateNext, NavigateBefore } from '@mui/icons-material'
import { io } from "socket.io-client";
// const socket = io("https://rootrsk-security-api.herokuapp.com/");
const socket = io("http://bce4-117-252-246-193.ngrok.io");
function ViewCapturedImage(props) {
    const [loading,setLoading]  = useState(false);
    const [images,setImages] = useState([])
    const [skip,setSkip] = useState(0)
    const [status,setStatus] = useState(true)
    const [sensors,setSensors] = useState({
        F:true,
        U:true,
        S:true,
    })
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
        /** When Sensor Status is Updated ESP Module */
        socket.on("sensor-update",(data)=>{
            console.log(data)
            setSensors(data)
        })

    },[])
    console.log(props)
    /**
     * Function to Fetch Images from server
     * @param {Number } skip 
     * @returns Captured images
     */
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
    /**
     * Function to Send a Image Capture Request ESP Module. 
     */
    const sendCaptureRequest = () =>{
        socket.emit("capture-image","rootrsk")
    }
    const changeSensorStatue = (sensor) =>{
    
        if(sensor === "flash"){
            socket.emit(sensors.F ? "FF" : "OF")
            setSensors({...sensors,F:!(sensors.F)})
            return
        }
        if(sensor === "sound"){
            setSensors({...sensors,S: !(sensor.S)})
            socket.emit(sensor.S ? "FS" : "OS")
            return
        }
        if(sensor === "uv"){
            socket.emit(sensors.U ? "FU" : "OU")
            setSensors({...sensors,U:!(sensors.U)})
            return
        }
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
            <div>
                <button onClick={sendCaptureRequest} >
                    Capture Image
                </button>
            </div>
            <Button.Group>
                <Button
                    onPress={()=>changeSensorStatue("flash")}
                    leftIcon={
                      <RadioButtonChecked 
                            style={{
                                marginLeft:'10px',
                                color:sensors.F?'rgb(33, 251, 106)':'rgb(251, 33, 33)'
                            }}  
                        />  
                    }
                    bg='white'
                >
                    Flash
                </Button>
            </Button.Group>
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
