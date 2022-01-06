import React,{useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import UserDashboard from './UserDashboard'
function UserRouter(props) {
    const navigate = useNavigate()
    const location  = useLocation()
    console.log('user router')
    useEffect(()=>{
        console.log(location)
        if(!props.auth.token && !(props.auth.authenticated_as ==='user')){
            navigate(`/login?next=${location.pathname}`)
        }
    },[props.auth,location,navigate])
    return (
        <Routes>
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/profile' element={<UserProfile />} />
        </Routes>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (UserRouter)
