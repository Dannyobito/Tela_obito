import React from 'react'

const EmailDetails = ({ emailData }) => {
    const { from, to, date, subject, mailed_by } = emailData;

    return (
        <div className='email-details'>
            <p>from: <span>{from}</span></p>
            <p>to: <span>{to}</span></p>
            <p>date: <span>{date}</span></p>
            <p>subject: <span>{subject}</span></p>
            <p>mailed_by: <span>{mailed_by}</span></p>
        </div>
    )
}

export default EmailDetails
