import React from 'react'
import './newsletter.css'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className="newsletter__content">
                <h2>Subscribe now to get valuable travel insights.</h2> <br />
                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'><i className="ri-send-plane-2-line"></i></button>
                </div>
                <p>Get insider access to our latest travel guides, deals, and destination recommendations!!</p>
            </div>

            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
        </section>
    )
}

export default Newsletter
