import React from 'react'
import './experienceSection.css'
import experienceImg from '../../assets/images/experience.png'
import Subtitle from '../../shared/Subtitle';

export default function ExperienceSection() {

  const counters = [
    { value: '15k+', label: 'Successful trips' },
    { value: '2k+', label: 'Regular clients' },
    { value: '10', label: 'Years experience' },
  ];

  return (
    <section className='experience__section'>

      <div className='experience__left'>
        <div className="experience__content">
          <Subtitle subtitle={'Experience'} />
          <h2 className='section__title'>With our vast experience <br /> we will serve you</h2>
          <p>Our team is here to make your travel dreams a reality. With personalized attention and attention to detail, <br />we ensure every trip is tailored to your needs.</p>
        </div>

        <div className="counter__wrapper">
          {counters.map((counter, index) => (
            <div className="counter__box" key={index}>
              <span>{counter.value}</span>
              <h6>{counter.label}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className='experience__right'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
      </div>

    </section>
  )
}
