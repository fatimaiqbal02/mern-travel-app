import React from 'react'
import './heroSection.css'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImage from '../../assets/images/world.png'
import Subtitle from '../../shared/Subtitle'

export default function HeroSection() {
    return (
        <section className='hero__section'>

            <div className="hero__content">
                <div className="hero__subtitle">
                    <Subtitle subtitle={`Unveil Travel's Charm`} />
                    <img src={worldImage} alt="" />
                </div>
                <h1>Embark on a Journey to Craft Lasting <span className="highlight">memories</span></h1>
                <p>Unlock the secrets of travel with Travigo. Explore new destinations, embrace diverse cultures, and create unforgettable memories.</p>
            </div>

            <div className='image__layout' style={{ top: '44px' }}>
                <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                </div>
            </div>

            <div className='image__layout' style={{ top: '70px' }}>
                <div className="hero__img-box">
                    <video src={heroVideo} controls loop autoPlay/>
                </div>
            </div>

            <div className='image__layout' style={{ top: '110px' }}>
                <div className="hero__img-box">
                    <img src={heroImg02} alt="" />
                </div>
            </div>
            
        </section>
    )
}
