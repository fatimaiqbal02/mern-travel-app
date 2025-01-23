import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
//import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)
  
  useEffect(()=>{
    if (tourCount.data) {
    const pages  = Math.ceil(tourCount.data/8)
    setPageCount(pages)
    window.scrollTo(0,0)
    }
  },[page, tourCount.data, tours.data])
  

  return (
    <>
      <CommonSection title= {'All tours'}/>

      <SearchBar/>

      <section className='alltours__section'>

          {loading && <h4 className='loading'>Loading...........</h4>}
          {error && <h4 className='error__msg'>{error}</h4>}

          {!loading && !error && <div className='tour-cards-container'>
            {
              tours.data?.map(tour=> 
              <div className='tour-card' key={tour._id}> 
              <TourCard tour={tour}/> 
              </div>
              )
            }
            </div>}

            <div className = 'pagination'>
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setPage(number)} className={page === number? "active__page":" "}>
                  {number+1}
                </span>
              ))}
            </div>

      </section>

      <Newsletter/>
    </>
  )
}

export default Tours
