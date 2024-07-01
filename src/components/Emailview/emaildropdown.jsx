import React, { useState } from 'react'
import EmailIcon from './emailicon'
import EmailDetails from './emaildetails'

const EmailDropdown = ({ emailData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`email-dropdown ${isOpen ? "open": ""}`}>
            <EmailIcon onClick={()=>{setIsOpen(!isOpen)}} />
            <EmailDetails emailData={emailData} />
            {/* {isOpen && <EmailDetails emailData={emailData} />} */}
        </div>
    )
}

export default EmailDropdown
