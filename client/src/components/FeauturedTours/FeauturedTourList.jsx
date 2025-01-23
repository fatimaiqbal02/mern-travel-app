import React from 'react'
import TourCard from '../../shared/TourCard'
import Subtitle from '../../shared/Subtitle'
//import tourData from '../../assets/data/tours'
import './featuredtour.css'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeauturedTourList = () => {

  const { data: feauturedTour, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
  console.log(feauturedTour)

  return (
    <section className='tour__section'>
      <div className='tour__title'>
        <Subtitle subtitle={'Explore'} />
        <h2 className="section__title">Our featured tours</h2>
      </div>

      <div className="featured-tour-list">
        {loading && <h4>Loading...........</h4>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="tour-cards-container">
            {feauturedTour.data?.map((tour) => (
              <div className="tour-card" key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        )}
      </div>

    </section>

  )
}

export default FeauturedTourList
