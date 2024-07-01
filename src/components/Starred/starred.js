import React, { useState } from 'react'
import Emailview from '../Emailview/emailview'

const Starred = () => {
    const [emails, setEmails] = useState([

    ]);

    const [starredEmails, setStarredEmails] = useState([]);

    const handleStarToggle = (emailId, isNowStarred) => {
        setEmails(
            emails.map((email) => (email.id === emailId ? { ...email, starred: isNowStarred } : email))
        );
        setStarredEmails(isNowStarred ? [...starredEmails, emailId] : starredEmails.filter((id) => id !== emailId));
    };

    return (
        <div>
            <h2>Your Emails</h2>
            <ul>
                {emails.map((email) => (
                    <Emailview key={email.id} emailGet={email} onStarToggle={handleStarToggle} />
                ))}
            </ul>

            <div>
                <h3>Starred Emails</h3>
            </div>
        </div>
    )
}

export default Starred
