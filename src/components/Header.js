import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { Flex, Box } from 'native-base'
function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <Box p='2' style={{backgroundColor:'#131D25'}}>
            <Flex direction='row' justify='space-between' alignItems='center' >
                    <div className="">
                        <img 
                            className='logo' 
                            src = {window.innerWidth > 600 ?
                                "https://i.ibb.co/tDSrDKs/Cloud-Vision.png":
                                "https://i.ibb.co/MGHD64p/Exclude.png"
                            }
                            alt="logo"  
                            onClick={()=>navigate('/')}
                            style={{
                                width:200,
                                height:25
                            }}
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
                            className={`${location.pathname==='/about-us' ? 'list active-list': 'list'}`}
                        >
                            <Link to='/about-us'>About</Link>
                        </li>
                        <li 
                            className={`${location.pathname==='/login' ? 'list active-list': 'list'}`}
                        >
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </Flex>
            </Flex>
            
        </Box>
    )
}

export default Header
