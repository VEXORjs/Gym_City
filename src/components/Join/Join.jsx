import React from 'react';
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oq192mm', 'template_ru4ieh9', form.current, 'bP0JEZol3OykNs9aj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>lorem lorem</span>
                    <span>lorem lorem</span>
                </div>
                <div>
                    <span>lorem lorem</span>
                    <span className='stroke-text'>lorem lorem</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form}
                    action=""
                    className="email-container"
                    onSubmit={sendEmail}>
                    <input type="email"
                        name='user_email'
                        placeholder='Podaj swój adres e-mail' />
                    <button className='btn btn-j'>Dolacz teraz</button>
                </form>
            </div>
        </div>
    )
}

export default Join