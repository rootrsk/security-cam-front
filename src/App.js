import React,{  } from 'react'
import './css/main.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { connect } from 'react-redux'
import UserRouter from './pages/user/UserRouter'
import Login from './pages/user/Login'
import Signup from './pages/user/Signup'
import About from './pages/About'
function App(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Homepage />} exact />
                <Route path='/home' element = {<Homepage />} exact />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/app/*' element={<UserRouter />}  />
                <Route path='/about-us' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (App)
