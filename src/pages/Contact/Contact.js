import React from 'react';
import './Contact.scss';
import { PiPhoneCallBold } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function Contact() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div className='contact'>
        <section>
            <div className='contact_inner'>
                <input type='text' placeholder='Fname' />
                <input type='text' placeholder='Lname' />
                <textarea />
                <div className='contact_tarmoqlar'>
                    <div className='contact_call'>
                        <PiPhoneCallBold />
                        <p>+99999 999-99-99</p>
                    </div>
                    <div className='contact_tarmoq'>
                        <FaSquareFacebook />
                        <BsTelegram />
                        <ImInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className='contact_btns'>
                    <button onClick={() => {dispatch(countHeaderFunction(0)); navigate('/')}}>Bekor qilish</button>
                    <button>Sms ni jo'natish</button>
                </div>
            </div>
        </section>
    </div>
  )
}
