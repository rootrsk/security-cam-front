import React from 'react'
import { Facebook,LinkedIn, YouTube, Instagram,Twitter  } from '@mui/icons-material'
function Footer() {
    return (
        <div className="footer">
            <div className="social-icon-container flex wrap center">
                <YouTube className="footer-icon"/>
                <Twitter className="footer-icon"/>
                <Facebook className="footer-icon"/>
                <LinkedIn className="footer-icon"/>
                <Instagram className="footer-icon"/>
            </div>

        </div>
    )
}

export default Footer
