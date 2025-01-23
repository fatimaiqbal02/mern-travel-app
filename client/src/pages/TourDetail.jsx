import React, {useEffect, useRef, useState, useContext} from 'react'
import loadingSpinner from '../../src/assets/images/loadingSpinner.svg'
import '../styles/tour-details.css'
import { Container, Row, Col, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
//import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const TourDetail = () => {

  const reviewMsgRef = useRef('')
  const[tourRating, setTourRating] = useState(null)
  
  const {user} = useContext(AuthContext)

  const { id } = useParams()
  
  const {data: tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour.data]) 

  if (loading) {
    return <img src={loadingSpinner} alt="Loading..." />
  }

  if (!tour || !tour.data) {
    return <p>Error loading tour data.</p>;
  }
  
  const { photo, desc, title, maxGroupSize, address, distance, city, reviews, price } = tour.data
  const{totalrating, avgRating} = calculateAvgRating(reviews)
  const options = {day:'numeric', month: 'long', year: 'numeric'}

  const submitHandler = async e =>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    //alert(`${reviewText} , ${tourRating}`);

    try{

      if(!user || user === undefined || user === null ){
        return alert("Please sign in first")
      }

      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating
      }

      console.log(reviewObj)

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers:{
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(!res.ok){
        alert(result.message)
      }
      alert('Review Submitted')
      window.location.reload();

    }catch(err){
      alert(err.message)
    }
  }

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...........</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          { !loading && !error && <Row>

            <Col lg='8'>  
              <div className="tour__content">

                <img src={photo} alt="" />

                {/* -------------------------------------- Tour Info ------------------------------------- */}
                <div className="tour__info">

                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{color: 'var(--icons-color)'}}></i> 
                      {avgRating === 0 ? null : avgRating}
                      {totalrating === 0 ? ('Not Rated') : (<span>({reviews?.length})</span>)}
                    </span>

                    <span><i className="ri-map-pin-user-fill"></i>{address}</span>
                  </div>

                  <div className="tour__extra-details">
                    <span><i className="ri-map-pin-2-line"></i>{city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i>${price} /per person</span>
                    <span><i className="ri-map-pin-time-line"></i>{distance} k/m</span>
                    <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>

                </div>
                {/* ---------------------x---------------- Tour Info -----------x--------------------------- */} 
                {/* ----------------------------------- Tour Review form ----------------------------------- */} 
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <form onSubmit={submitHandler}>

                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <span onClick={()=>{setTourRating(1)}} >1 <i className="ri-star-line"></i></span>
                      <span onClick={()=>{setTourRating(2)}} >2 <i className="ri-star-line"></i></span>
                      <span onClick={()=>{setTourRating(3)}} >3 <i className="ri-star-line"></i></span>
                      <span onClick={()=>{setTourRating(4)}} >4 <i className="ri-star-line"></i></span>
                      <span onClick={()=>{setTourRating(5)}} >5 <i className="ri-star-line"></i></span>
                    </div>

                    <div className="review__input">
                      <input type="text" name="" id="" ref={reviewMsgRef} required placeholder='share your thoughts'/>
                      <button className='btn primary__btn text-white' type='submit'>Submit</button>
                    </div>

                  </form>
                  {/* ---------------------x--------------- Tour Review Form ---------x----------------------- */} 
                  {/* ------------------------------------- User Reviews ------------------------------------- */} 
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map((reviews, index)=>(
                        <div className="review__item" key={index}>
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">

                              <div>
                                <h5>{reviews.username}</h5>
                                <p>{new Date(reviews.createdAt).toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {reviews.rating}<i className="ri-star-s-fill"></i>
                              </span>

                            </div>

                            <h6>{reviews.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                  {/* -----------------x------------------- User Reviews -------------x----------------------- */} 
                </div>

              </div>
            </Col>

            <Col lg='4'>
              <Booking tour = {tour.data} avgRating = {avgRating}/>
            </Col>

          </Row>}
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetail

