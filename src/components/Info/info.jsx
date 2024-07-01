import React from 'react'
import "../Emailview/emailview.css"
import "./info.css"

import back from "../../assets/back.png"
// import arrow_left from "../../assets/arrow-left.png"
import arrow_left_grey from "../../assets/arrow-left-grey.png"
import arrow_right from "../../assets/arrow-right.png"
// import arrow_right_grey from "../../assets/arrow-right-grey.png"
import print from "../../assets/print.png"
import sender from "../../assets/sender.png"
import star from "../../assets/star-light.png"
// import star_full from "../../assets/star-full.png"
import reply from "../../assets/reply.png"
import forward from "../../assets/forward.png"
import user from "../../assets/user.jpg"
import vid from "../../assets/hello.mp4"

const Info = () => {
  return (
    <div className='view'>
        <div className='main'>
            <h1>Knowledge Base</h1>
        </div>

        <div className='subject-head'>
            <p>A Simple Overview</p>
        </div>

        <div className='overview'>
          <div className='break'>
            <p>Imagine your email is like a special mailbox, but instead of letters, it carries messages back and forth. To keep your mailbox safe, here are some things to know like a super spy!</p>
          </div>
          <div className='break'>
            <h5>Good Guys vs. Bad Guys:</h5>
            <p><span className='bold'>Good Guys:</span> These are people you know and trust, like your family, friends, or teachers. They send you nice emails with pictures, games, or funny jokes.</p>
            <p><span className='bold'>Bad Guys:</span> These are people who pretend to be someone they're not. They might try to trick you into opening something bad for your computer.</p>
          </div>
          <div className='break'>
            <h5>Spotting The Bad Guys' Tricks</h5>
            <p><span className='bold'>Phishing:</span> Pretend letters! Bad guys might send emails that look like they're from a bank, a game company, or even your parents! But they're not! They want to steal your information.</p>
            <p><span className='bold'>Suspicious Links:</span> These are hidden tricks inside emails. Clicking them can take you to a fake website that looks real, but it can steal your information or make your computer sick!</p>
            <p><span className='bold'>Unfamiliar Attachments:</span> Attachments are like extra gifts in emails, but be careful! If it's from someone you don't know, it could be a virus that can make your computer unhappy.</p>
          </div>
          <div className='break'>
            <h5>Being a Super Secure Email Agent:</h5>
            <p><span className='bold'>Double-check the Sender:</span> Make sure the email really is from who it says it is. Ask a grown-up if you're unsure!</p>
            <p><span className='bold'>Don't Click on Weird Links:</span> If a link looks strange or you don't know where it goes, don't click on it!</p>
            {/* <p><span className='bold'>Unfamiliar Attachments:</span> Attachments are like extra gifts in emails, but be careful! If it's from someone you don't know, it could be a virus that can make your computer unhappy.</p> */}
          </div>
          <div className='break'>
            <p><span className='bold'>Remember:</span> Your email is like your special fort! Keep bad guys out by following these tips and being super smart!</p>
          </div>
        </div>

        <div className='subject-head'>
            <p>Helpful Video Resources</p>
        </div>

        <div className='overview'>
          <div className='break video-grid'>
            <video src={vid} controls autoplay loop class="gal-vid"></video>
            <h3>Email Security Awareness Training</h3>
            <h4>By Service Sanitation</h4>
          </div>
          <div className='break video-grid'>
            <video src={vid} controls autoplay loop class="gal-vid"></video>
            <h3>Security Awareness Training: Email Security and Phishing Threats</h3>
            <h4>By Terranova</h4>
          </div>
          <div className='break video-grid'>
            <video src={vid} controls autoplay loop class="gal-vid"></video>
            <h3>Email Security Awareness Training</h3>
          </div>
        </div>

    </div>
  )
}

export default Info
