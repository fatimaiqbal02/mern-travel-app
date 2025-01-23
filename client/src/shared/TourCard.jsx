import React from 'react'
import { Link } from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'

const TourCard = ({ tour }) => {

    const { _id, title, city, photo, price, featured, reviews } = tour
    const { totalrating, avgRating } = calculateAvgRating(reviews)

    /* const totalrating = reviews?.reduce((acc,item)=> acc + item.rating,0);
    const avgRating = totalrating == 0? "": totalrating ==1? totalrating: totalrating/reviews?.length; */

    return (
        <div className="tour__card">
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>

            <div className='card__content'>

                <div className="card__top">

                    <span className="tour__location">
                        <i className="ri-map-pin-line"></i> {city}
                    </span>

                    <span className="tour__rating">
                        <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                        {totalrating === 0 ? ('Not Rated') : (<span>({reviews.length})</span>)}
                    </span>

                </div>

                <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

                <div className="card__bottom ">
                    <h5>${price}<span> /person</span></h5>
                    <Link className=" primary__btn booking__btn" to={`/tours/${_id}`}> Book now </Link>
                </div>

            </div>

        </div>
    )
}

export default TourCard
