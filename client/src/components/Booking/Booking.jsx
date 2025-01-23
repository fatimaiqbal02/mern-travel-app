import React, { useState, useContext } from 'react'
import './booking.css'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'

const Booking = ({ tour, avgRating }) => {

    const { price, reviews, title } = tour
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: '1',
        bookAt: ''
    });

    //handling form
    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    //setting final booking price etc
    const serviceFee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    //sending data to server
    const handleClick = async e => {
        e.preventDefault()
        console.log(booking)

        try {

            if (!user || user === undefined || user === null) {
                return alert("Please sign in first")
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            })

            const result = await res.json()
            if (!res.ok) {
                alert(result.message)
            }
            navigate('/thank-you')

        } catch (err) {
            alert("Booked")
        }
    };

    return (
        <div className="booking">
            {/* ---------------------------- Extra Info --------------------------------------- */}
            <div className="booking__top">
                <h3>${price} <span>/per person</span></h3>

                <span className="tour__rating">
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>
            {/* -----------------x----------- Extra Info ---------x------------------------------ */}
            {/* ---------------------------- Booking Form --------------------------------------- */}
            <div className="booking__form">
                <h5>Information</h5>
                <form className='booking__info-form' onSubmit={handleClick}>

                    <input type="text" name="" id="fullName" placeholder='Full Name'
                        required onChange={handleChange} />

                    <input type="number" name="" id="phone" placeholder='Phone'
                        required onChange={handleChange} />

                    <div className='booking_info'>
                        <input type="date" name="" id="bookAt" required onChange={handleChange} />
                        <input type="number" name="" id="guestSize" placeholder='Guests'
                            required onChange={handleChange} />
                    </div>
                </form>
            </div>
            {/* ---------------x------------ Booking Form -------------x------------------------- */}
            {/* ----------------------------- Booking End --------------------------------------- */}
            <div className="booking__bottom">

                <div className='booking__bottom__details'>
                    <div className='booking_list'>
                        <h5 className='booking_price'>
                            ${price} <i className="ri-close-fill"></i> 1 person
                        </h5>
                        <span>${price}</span>
                    </div>
                    <div className='booking_list'>
                        <h5>Service Charges</h5>
                        <span>${serviceFee}</span>
                    </div>
                    <div className='booking_list'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </div>
                </div>

                <button className='btn primary__btn mt-4 w-100 book_btn' onClick={handleClick}>Book Now</button>

            </div>
            {/* ---------------x------------- Booking End -------------x------------------------- */}
        </div>
    )
}

export default Booking
