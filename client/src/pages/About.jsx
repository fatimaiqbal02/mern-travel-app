import React from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/about.css'

export const About = () => {
    return (
        <>
            <CommonSection title={"About Us"} />
            <section className='about_info'>
                <p>At Travigo, we're passionate about exploring the world and helping others create unforgettable travel experiences. Founded with the vision of making travel accessible and enjoyable for everyone, we strive to provide personalized services and curated itineraries that cater to the diverse interests of our customers.
                    <br /><br />
                    Our team of experienced travel enthusiasts is dedicated to delivering exceptional service and ensuring that every journey with us is seamless and memorable. Whether you're embarking on a solo adventure, planning a romantic getaway, or organizing a group tour with friends and family, we're here to make your travel dreams a reality.
                    <br /><br />
                    With a wide range of destinations to choose from and flexible booking options, we empower travelers to customize their trips according to their preferences and budget. From breathtaking landscapes to cultural treasures, we'll guide you through the planning process and provide valuable insights to enhance your travel experience.
                    <br /><br />
                    At Travigo, we believe that travel has the power to enrich lives, broaden perspectives, and create lasting memories. Join us on this journey of discovery, and let's explore the world together!!
                </p>
                <hr />
            </section>
        </>
    )

}
