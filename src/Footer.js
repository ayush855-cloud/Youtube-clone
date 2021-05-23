import React from 'react'
import './Footer.css'

function Footer({Icon,Title}) {
    return (
        
        <div className="FooterRoW">
            <Icon className="footer__icon"/>
            <h2 className="footer__title">{Title}</h2>
        </div>
            
        
    )
}

export default Footer
