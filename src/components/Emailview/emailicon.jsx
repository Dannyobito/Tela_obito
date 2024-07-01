import React from 'react'

import dropdown from "../../assets/arrow-down.png"

const EmailIcon = ({ onClick }) => {
  return (
    <div>
        <img className="email-icon" onClick={onClick} src={dropdown} alt='Dropdown' />
    </div>
  )
}

export default EmailIcon
