import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const SearchResultList = () => {

  const location = useLocation();
  const [data] = useState(location.state)

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        {data.length === 0 ? (<h4 className='text-center'>No tour Found</h4>) : (data?.map(tour => (
          <div key={tour._id}> <TourCard tour={tour} /></div>
        )))}
      </section>
      <Newsletter />
    </>
  )
}

export default SearchResultList
