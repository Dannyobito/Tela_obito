import React, {useState} from 'react'
import "./emaillist.css"
import emails from "./emails.js"

// import inbox from "../../assets/inbox.png"
import inbox_blue from "../../assets/inbox-blue.png"
import square from "../../assets/square.png"
import refresh from "../../assets/refresh.png"
// import arrow_left from "../../assets/arrow-left.png"
import arrow_left_grey from "../../assets/arrow-left-grey.png"
import arrow_right from "../../assets/arrow-right.png"
// import arrow_right_grey from "../../assets/arrow-right-grey.png"
import dropdown from "../../assets/arrow-down.png"
import Emailtile from './emailtile'


const Emaillist = () => {
  return (
    <div className='mails'>
      <div className='main'>
        <img src={square} alt='Select' />
        <img src={dropdown} className='dropdown' alt='Dropdown' />
        <img src={refresh} className='refresh' alt='Refresh' />
        <div className='main-right'>
          <p>1-50 of 594</p>
          <img src={arrow_left_grey} alt='Prev' />
          <img src={arrow_right} className='next' alt='Next' />
        </div>
      </div>

      <div className='primary'>
        <img src={inbox_blue} alt='Inbox' />
        <p>Primary</p>
      </div>

      <hr />
{
  emails.map(email => (
    <Emailtile email = { email } />
  ))
}



































      {/* <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>24 May</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>SimpliLearn</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>04 May</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>SimpliLearn</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>04 May</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>SimpliLearn</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>04 May</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>SimpliLearn</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>04 May</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>25 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>22 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div>
      <div className='mail'>
        <img src={square} alt='unchecked' />
        <img src={star} className='star' alt='unstarred' />
        <p className='sender'>Medium Daily Digest</p>
        <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
        <p className='date_time'>07 Apr</p>
      </div> */}
      
      <p className='project'>Project work in progress...</p>
    </div>
  )
}

export default Emaillist
