import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmailDropdown from './emaildropdown'
import "./emailview.css"
import "./emaildropdown.css"

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

const emailData = { // Replace with your actual email data
    from: 'John Doe <john.doe@example.com>',
    to: 'aeo2003@gmail.com',
    date: '9 Jun 2024, 16:42',
    subject: 'Important Update',
    mailed_by: 'gmail.com',
};

const Emailview = () => {
    const navigate = useNavigate()
  return (
    <div className='view'>
        <div className='main'>
            <img onClick={()=>{navigate("/mailbox")}} src={back} alt='Back' />
            <div className='main-right'>
                <p>8 of 594</p>
                <img src={arrow_left_grey} alt='Prev' />
                <img src={arrow_right} className='next' alt='Next' />
            </div>
        </div>

        <div className='subject-head'>
            <p className='subject'>How to classify your design system-a framework | Joy Speaks at UX Collective</p>
            <div>
                <img src={print} alt='Print' />
            </div>
        </div>

        <div className='primary'>
            <div className='first'>
                <img src={sender} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Medium Daily Digest</p>
                        <p className='sender-email'>mediumdd@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to me</p>
                        <EmailDropdown emailData={emailData} /> 
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 13.27 (7 days ago)</p>
                <img src={star} alt='Star Button' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-green'></div>
            </div>    
        </div>

        <div className='body'>
            <p>Hello</p>
        </div>

        
        <div className='primary'>
            <div className='first'>
                <img src={user} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Loreta Calisto</p>
                        <p className='sender-email'>loretacodes@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to Medium</p>
                        <EmailDropdown emailData={emailData} />
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 14:45 (7 days ago)</p>
                <img src={star} alt='Star Button' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-amber'></div>
            </div>    
        </div>

        <div className='body'>
            <p>The product and company known as Zouse today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>
        </div>
        
        
        {/* <div className='primary'>
            <div className='first'>
                <img src={user} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Loreta Calisto</p>
                        <p className='sender-email'>loretacodes@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to Medium</p>
                        <EmailDropdown emailData={emailData} />
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 14:45 (7 days ago)</p>
                <img onClick={changeStar} src={isStarred ? star : star_full} alt='Unstarred' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-red'></div>
            </div>    
        </div>

        <div className='body'>
            <p>The product and company known as Zouse today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>
        </div>
        
        
        <div className='primary'>
            <div className='first'>
                <img src={user} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Loreta Calisto</p>
                        <p className='sender-email'>loretacodes@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to Medium</p>
                        <EmailDropdown emailData={emailData} />
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 14:45 (7 days ago)</p>
                <img onClick={changeStar} src={isStarred ? star : star_full} alt='Unstarred' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-green'></div>
            </div>    
        </div>

        <div className='body'>
            <p>The product and company known as Zouse today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>
        </div>
        
        
        <div className='primary'>
            <div className='first'>
                <img src={user} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Loreta Calisto</p>
                        <p className='sender-email'>loretacodes@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to Medium</p>
                        <EmailDropdown emailData={emailData} />
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 14:45 (7 days ago)</p>
                <img onClick={changeStar} src={isStarred ? star : star_full} alt='Unstarred' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-green'></div>
            </div>    
        </div>

        <div className='body'>
            <p>The product and company known as Zouse today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>
        </div>
        
        
        <div className='primary'>
            <div className='first'>
                <img src={user} className='sender-icon' alt='Sender' />
                <div className='details'>
                    <div className='sender-details'>
                        <p className='sender-name'>Loreta Calisto</p>
                        <p className='sender-email'>loretacodes@gmail.com</p>
                    </div>
                    <div className='to-receiver'>
                        <p>to Medium</p>
                        <EmailDropdown emailData={emailData} />
                    </div>
                </div>
            </div>

            <div className='second'>
                <p className='date_time'>24 May 2024, 14:45 (7 days ago)</p>
                <img onClick={changeStar} src={isStarred ? star : star_full} alt='Unstarred' />
                <img src={reply} className='reply' alt='Reply' />
                <div className='indicator-amber'></div>
            </div>    
        </div>

        <div className='body'>
            <p>The product and company known as Zouse today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>
        </div> */}


        <div className='reply-forward'>
            <button>
                <img src={reply} alt='Reply' />
                <p>Reply</p>
            </button>
            <button>
                <img src={forward} alt='Forward' />
                <p>Forward</p>
            </button>
        </div>

    </div>
  )
}

export default Emailview
