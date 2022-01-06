import React,{ useState } from 'react'
import { Modal,Box } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Button } from 'native-base'
import axios from 'axios'
function ImageContainer({uri,key,_id,captured_at,setImages}) {
    const [open,setOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const date = new Date(captured_at).toString()
    const datetime = date.split('GMT')
    const timezone = datetime[1].replace(/[0-9,+]/g, '')
    const deleteHandler = async() =>{
        setLoading(true)
        try{
            const response = await axios({
                url: 'https://rootrsk-security-api.herokuapp.com/user/image',
                method:'DELETE',
                data:{ _id }
            })
            console.log(response)
            if(response.data && response.data.error){
                return console.log(response.data.error)
            }
            if(response.data && response.data.status==='success'){
                if(setImages){
                    setImages((prevState)=>{
                        const images = prevState.filter((image) => image._id !== _id)
                        return images
                    })
                }
            }
        } catch (error) {
            
        }
        setLoading(false)
    }
    return (
        <div>
            <div className='image-container' >
                <img src={uri} alt={key} onClick={()=>setOpen(true)} style={{cursor:'pointer'}}  />
                <p>{datetime[0].toString()} <br/> {timezone.toString()}</p>
            </div>
            <div className='' >
                <Modal 
                    open={open}
                    onClose={()=>setOpen(false)} 
                >
                    <Box sx={style}>
                        <img src={uri} alt={key} width='100%' />
                        <Button
                            isLoading={loading}
                            onPress={deleteHandler}
                            bg='black'
                            leftIcon={<Delete />}
                        >
                            Delete
                        </Button>
                    </Box> 
                </Modal>
            </div>
        </div>
        
    )
}

export default ImageContainer

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    // border: '1px solid #000',
    boxShadow: 2,
    p: 1,
    maxWidth:'1000px',
    // borderRadius:'1px'
};