import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Text} from 'native-base'
import ImageContainer from '../../components/ImageContainer';
import { Refresh, RadioButtonChecked,NavigateNext, NavigateBefore } from '@mui/icons-material'
import { io } from "socket.io-client";
// const socket = io("https://rootrsk-security-api.herokuapp.com/");
const socket = io("https://rootrsk-cloudvision.herokuapp.com");
function ViewCapturedImage(props) {
    const [loading,setLoading]  = useState(false);
    const [images,setImages] = useState([])
    const [page,setPage] = useState(1)
    const [status,setStatus] = useState(false)
    const [prev,setPrev] = useState({loading:false,disabled:true})
    const [next,setNext] = useState({loading:false,disabled:true})
    const [sensors,setSensors] = useState({
        F:true,
        U:true,
        S:true,
    })
    console.log(socket)
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
            setStatus(true)
        })
        socket.on('disconnect', () => {
            console.log('hii')
            setStatus(false)
        })
        /** When Sensor Status is Updated ESP Module */
        socket.on("sensor-update",(data)=>{
            console.log(data)
            setSensors(data)
            setStatus(true)
        })

    },[])
    console.log(props)
    /**
     * Function to Fetch Images from server
     * @param {Number } skip 
     * @returns Captured images
     */
    const fetchImage = async (page) => {
        setLoading(true)
        try {
            const response = await axios({
                url: '/user/images?page='+page,
                method: 'get',
            })
            console.log(response.data)
            if(response.data && response.data.error){
                return alert(response.data.error)
            }
            if(response.data && response.data.savedImages){
                setImages(response.data.savedImages)
                if (page < 2){
                    setPrev({...prev,disabled:true})
                }else{
                    setPrev({...prev,disabled:false})
                }
                if(response.data.savedImages.length < 50){
                    setNext({...next,disabled:true})
                }else{
                    setNext({...next,disabled:false})
                }
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
        fetchImage(1)
        setPage(1)
        if(socket && socket.connected){
            setStatus(true)
        }
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
                    <div className='flex'style={{ alignItems:'center'}} >
                        <Button
                            leftIcon={<NavigateBefore />}
                            variant='outline'
                            isLoading={loading}
                            isDisabled={prev.disabled}
                            // onPress={fetchImage}
                            onPress={()=>{
                                fetchImage(page-1)
                                setPage(page-1)
                            }}
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
                        <Text
                            ml='2'
                            color='white'
                            fontSize={20}
                        >{page}</Text>
                        <Button
                            leftIcon={<NavigateNext />}
                            variant='outline'
                            ml='2'
                            isLoading={loading}
                            isDisabled={next.disabled}
                            onPress={()=>{
                                fetchImage(page+1)
                                setPage(page+1)
                            }}
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
                        onPress={()=>{
                            fetchImage(1)
                            setPage(1)
                        }}
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
            {/* <div>
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
            </Button.Group> */}
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
