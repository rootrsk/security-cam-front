import React,{useState,useEffect} from 'react'
import {Box,Input,Button,Heading,useToast,Center,Image} from 'native-base'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {useNavigate,useLocation} from'react-router-dom'
import  queryString  from 'query-string'
import { Grid, Avatar } from '@mui/material'
import {AiOutlineUser} from 'react-icons/ai'
import {BiLock} from 'react-icons/bi'

function Login(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const search = queryString.parse(location.search);
    console.log(location)
    const toast = useToast()
    const [username,setUsername] = useState('')
    const [loading,setLoading] = useState(false)
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const loginHandler = async({token}) => {
        setLoading(true)
        const response = await axios({
            url: token ? '/user/me':'/login',
            method : 'POST',
            data : {id:username,password}
        })
        setLoading(false)
        console.log(response.data)
        if(response.data.error){
            toast.show({
                title : 'ERROR!!!',
                description : response.data.error,
                status : 'error'
            })
            return 
        } 
        axios.defaults.headers.common['authorization'] = response.data.token;
        localStorage.setItem('token',JSON.stringify(response.data.token))
        props.dispatch({
            type : 'ADD_USER',
            user : response.data.user,
            aunthenticated_as : 'student',
            token : response.data.token
        })
        if(search.next){
            navigate(search.next)
        }else{
            navigate('/app/dashboard')
        }
        
        setLoading(false)
        
        
    }
    console.log(search)
    useEffect(()=>{
        console.log(props.auth)
        if(props.auth.user){
            navigate('/app/dashboard')
        }
        const token = localStorage.getItem('token')
        if (token){
            const parsed_token = JSON.parse(token)
            axios.defaults.headers.common['authorization'] = parsed_token;
            loginHandler({token:parsed_token})
        }
        return () =>{}
    },[])
    return (
        <div className='login-page flex sb center' >
            <div className='login-container'>
                <Grid container spacing={2} style={{position:'absolute',top:0,left:0,right:0,bottom:0}} >
                    {/* <Grid item md={7} height='100%' >
                        <div className='login-left-container' >
                            <div className='flex center' >
                                <img className="login-logo" src="https://i.ibb.co/jwBHMRv/logo-free-file.png"/>
                            </div>
                            <div className="login-ill-container">
                                <img className='login-ill' src="https://svgshare.com/i/dAS.svg" />
                            </div>
                        </div>
                        
                    </Grid> */}
                    <Grid item xs={12} >
                        <div className='login-form-container' >
                            <Box pt='80px' >  
                                <Center>
                                    <Avatar 
                                        src='https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg' 
                                        sx={{ width: 80, height: 80,background:'transparent',marginBottom: 2 }} 
                                    >
                                        R
                                    </Avatar>
                                </Center>
                                
                                <h2 className='h22'>
                                    Login
                                </h2>
                                <Box p='5' pt='0' maxWidth='700px' m='auto' width='90%' >
                                    <Input
                                        mt= '3'
                                        placeholder = 'Username/Email ID'
                                        value = {username}
                                        // _focus={{background:'gray.800'}}
                                        // _hover={{background:'gray.800'}}
                                        // color='white'
                                        width='100%'
                                        bg='white'
                                        onChangeText = {setUsername}
                                        InputLeftElement={
                                            <AiOutlineUser className='input-icon' />
                                        }
                                    />
                                    <Input
                                        mt  = '4'
                                        placeholder = 'Password'
                                        value = {password}
                                        onChangeText = {setPassword}
                                        type = 'password'
                                        // _focus={{background:'gray.800'}}
                                        // _hover={{background:'gray.800'}}
                                        // color='white'
                                        bg='white'
                                        InputLeftElement={
                                            <BiLock className='input-icon' />
                                        }
                                    />
                                    <Button 
                                        onPress = {loginHandler}
                                        isLoading = {loading}
                                        _text={{color: 'white'}}
                                        bg={'black'}
                                        _hover={{bg:'blueGray.900'}}
                                        isLoadingText = 'Logging in...'
                                        mt = '4'>
                                        Login
                                    </Button>
                                    <Center mt = '2'>
                                    <Link className='underlined-link' to ='/signup'>
                                        New User ? click here!
                                    </Link>
                                    </Center>
                                </Box>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </div>
            
           
        </div>
    )
}


const mapStateToProps = state => state

export default connect(mapStateToProps) (Login)
