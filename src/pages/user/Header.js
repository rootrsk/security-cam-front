import React from 'react'
import { Box, Flex,Text,Button } from 'native-base'
import Ripples from 'react-ripples'
import { useNavigate,Link } from'react-router-dom'
import { MdPostAdd } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { Typography, Avatar } from '@mui/material'
function Header({user,setCreateModal,createModal,dispatch,location}) {
    const navigate = useNavigate()
    const navigateHandler = () =>{
        dispatch({
            type : 'ADD_USER',
            user : null,
            aunthenticated_as : '',
            token : null
        })
        navigate('/')
    }
    return (
        <Box p='2' style={{backgroundColor:'#131D25'}}>
            <Flex direction='row' justify='space-between' alignItems='center' >
                    <div className="">
                        <img 
                            className='logo' 
                            src="https://i.ibb.co/k5qmS2j/Group-1.png "
                            alt="logo"
                            onClick={()=>navigate('/')}
                        />
                    </div>
                <Flex direction='row' placeItems='center' alignItems='center'  >
                    <ul className='flex' >
                        <li 
                            className={`${location.pathname==='/' ? 'list active-list': 'list'}`}
                        >
                            <Link to='/'>Home</Link>
                        </li>
                        <li 
                            className={`${location.pathname==='/app/dashboard' ? 'list active-list': 'list'}`}
                        >
                            <Link to='/app/dashboard'>Dashboard</Link>
                        </li>
                        <li className='list'>Logout</li>
                    </ul>
                    {/* <Box pr='10px' >
                         <p>{user.fullname}</p>  
                    </Box> */}
                    {(user.profile && user.profile.avatar )?
                        <Avatar 
                            sx={{ width: 50, height: 50,maring:'auto',cursor:'pointer',marginRight:2 }}
                            src={user.profile.avatar}
                            onClick={()=>navigate('/app/profile')}
                        >
                        </Avatar> :
                        <Avatar 
                            sx={{ width: 50, height: 50,maring:'auto',cursor:'pointer',marginRight:2 }}
                            onClick={()=>navigate('/app/profile')}
                        >
                            {user.username[0].toUpperCase()}
                        </Avatar>
                    }
                    
                    
                </Flex>
            </Flex>
            
        </Box>
    )
}

export default Header