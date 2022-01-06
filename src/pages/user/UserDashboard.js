import {Box,Text,Button,Flex,Divider} from 'native-base'
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import ViewCapturedImage from './ViewCapturedImage'

function UserDashboard(props) { 
    
    const location = useLocation()
    return (
        <div>
            {props.auth.user && 
                <Header user={props.auth.user} dispatch={props.dispatch} location={location} />
            }
            <Divider bg='gray.500' />
            <Box>
                <ViewCapturedImage />
            </Box>
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps) (UserDashboard)