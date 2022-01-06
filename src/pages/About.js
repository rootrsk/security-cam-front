import React from 'react'
import Header from '../components/Header'
import { Divider } from 'native-base'
import Footer from '../components/Footer'

function About() {
    return (
        <div>
            <Header  />
            <Divider bg='gray.500' />
            <h2>About Page</h2>
            <div className="empty-box">
                <p>Full Description will be available soon</p>
            </div>

            <Footer />
        </div>
    )
}

export default About
