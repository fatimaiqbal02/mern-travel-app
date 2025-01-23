import React from 'react'
import Slider from 'react-slick'
import './testimonials.css'
import testimonialData from '../../assets/data/reviews.js'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive : [
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
      {testimonialData.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <p className='testimonial__text'>{testimonial.text}</p>
          <div className="testimonial__user">
            <img src={testimonial.image} className="user__image" alt={testimonial.name} />
            <div>
              <h6>{testimonial.name}</h6>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Testimonials
