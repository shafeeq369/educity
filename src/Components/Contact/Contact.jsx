import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />contact@shafeeqdev.com</li>
                <li> <img src={phone_icon}alt="" />8736950200</li>
                <li> <img src={location_icon} alt="" />malappuram,kavannor,kerala</li>
            </ul>
        </div>
        <div className="contact-col">
            <form >
                <label htmlFor="">your name</label>
                <input type="text" name="name" placeholder='enter your name' required/>
                <label htmlFor="">phone number</label>
                <input type="tele" name="phone" placeholder='enter your phone number' required />
                <label >Write your message here</label>
                <textarea name='message' id='' cols="30" rows="10" required></textarea>
                <button type="submit" className='btn dark-btn'>send now <img src={white_arrow} alt="" /></button>
            </form>
        </div>

    </div>
  )
}

export default Contact