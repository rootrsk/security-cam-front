import React,{useState} from 'react'
import { Box, Flex,Center,Button,Input,useToast,Modal } from 'native-base'
import axios from 'axios'

function UploadImage(props) {
    const toast = useToast()
    const [open,setOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const [image,setImage] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    
    
    const profilePicUpdateHandler = async() =>{
        setLoading(true)
        const formData = new FormData();
        formData.append(
            "img",
            image,
        );
        const response = await axios({
            url: 'https://rootrsk-security-api.herokuapp.com/arduino/upload-image',
            method:'POST',
            data: formData,
        })
        // if(response.data && response.data.error){
        //     toast.show({
        //         title:'Error',
        //         description: response.data.error,
        //         status:'error',
        //         duration:1000,
        //         placement:'bottom-right'
        //     })
        // }             
        // diviyanshuh
        
        console.log(response.data)
        setLoading(false)
    }

    const onFileChange = event => {
        setImage(event.target.files[0])
        setImageUrl(URL.createObjectURL(event.target.files[0]))
    };

    
    return (
        <div>
            <input type='file' onChange={onFileChange} />
            <Button onPress={profilePicUpdateHandler} isLoading={loading} >
                Upload
            </Button>
            {image && <img src={imageUrl} alt="" width='100px' height={'100px'} />}
        </div>
    )
}
export default UploadImage
