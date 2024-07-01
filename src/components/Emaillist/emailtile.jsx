import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import square from "../../assets/square.png";
import square_check from "../../assets/square-check.png";
import star from "../../assets/star-light.png"
import star_full from "../../assets/star-full.png"

const Emailtile = ({ email }) => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isStarred, setIsStarred] = useState(false);
  
    return (
      <div className='mail'>
          <img onClick={()=>setIsChecked(!isChecked)} src={isChecked ? square_check :square} alt={isChecked ? 'checked': 'unchecked'} />
          <img onClick={()=>setIsStarred(!isStarred)} src={isStarred ? star_full : star} className='star' alt='Star Button' />
          <p onClick={()=>{navigate(`${email.id}`)}} className='sender cursor-grab'>{email.sender}</p>
          <p onClick={()=>{navigate(`${email.id}`)}} className='subject cursor-grab'>{email.subject}</p>
          <p onClick={()=>{navigate(`${email.id}`)}} className='date_time cursor-grab'>{email.date}</p>
      </div>
    )
}

export default Emailtile
