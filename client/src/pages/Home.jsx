import React from 'react'
import '../styles/Home.css'
import HeroSection from '../components/HeroSection/HeroSection'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../components/services/ServiceList'
import FeauturedTourList from '../components/FeauturedTours/FeauturedTourList'
import MasonaryImagesGallery from '../components/image-gallery/MasonaryImagesGallery'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../shared/Newsletter'
import ExperienceSection from '../components/ExperienceSection/ExperienceSection'

const Home = () => {
  return (
    <>
      {/* -----------------------------------Home section ------------------------------------------- */}

      <HeroSection/>
      {/* -----------------------x----------- Home section -----------x------------------------------- */}

      
      <SearchBar />
     
      {/* ----------------------------------- Services section --------------------------------------- */}
       <ServiceList/>
      {/* -----------------------x----------- Services section -----------x--------------------------- */}

      {/* ----------------------------------- Tours section --------------------------------------- */}
       <FeauturedTourList/>

      {/* -----------------------x------------ Tours section ---------x---------------------------- */}
      {/* ----------------------------------- Experience section ---------------------------------- */}
      <ExperienceSection/>
      {/* ----------------------x------------ Experience section ---------x------------------------ */}
      {/* ----------------------------------- Gallery section ---------------------------------- */}
      <section className='gallery__section'>
        <div>
          <Subtitle subtitle={'Gallery'} />
          <h2 className="section__title">Visit our customer tour gallery</h2>
        </div>

        <div>
          <MasonaryImagesGallery />
        </div>
      </section>
      {/* ----------------------x------------ Gallery section ---------x------------------------ */}
      {/* --------------------------------- Testimonials section ------------------------------- */}
      <section className='testimonial__section'>
        <div>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className="section__title">What our fans say about us</h2>
        </div>

        <div>
          <Testimonials />
        </div>
      </section>
      {/* --------------------x------------ Testimonials section ---------x--------------------- */}
      {/* --------------------------------- Newsletter section ------------------------------- */}
      <Newsletter />
      {/* --------------------x------------ Newsletter section ---------x--------------------- */}
    </>
  )
}

export default Home
