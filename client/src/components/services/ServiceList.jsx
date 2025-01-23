import React from 'react'
import ServiceCard from './ServiceCard'
import weatherImg from '../../assets/images/weather.png'
import guideImg from '../../assets/images/guide.png'
import customizationImg from '../../assets/images/customization.png'
import Subtitle from '../../shared/Subtitle'
import './serviceList.css'

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Seamless Transport",
    desc: "Smooth and hassle-free transfers ensuring comfortable travel experiences.."
  },
  {
    imgUrl: guideImg,
    title: "Expert Tour Guide",
    desc: "Expert Guides providing insightful commentary and local expertise."
  },
  {
    imgUrl: customizationImg,
    title: "Tailored Tours",
    desc: "Customized travel itineraries designed to fit your interests perfectly."
  }
]

const ServiceList = () => {
  return (
    <section className='services__section'>
      <div className='services__heading'>
        <Subtitle subtitle={`Services`} />
        <h2 className='section__title'>Discover our excellence here</h2>
      </div>

      <div className="service-list">
        {serviceData.map((item, index) => (
          <div key={index}>
            <ServiceCard item={item} />
          </div>
        ))}
      </div>
    </section>


  );
};

export default ServiceList;
