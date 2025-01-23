import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetail from '../pages/TourDetail'
import SearchResultList from '../pages/SearchResultList'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Thankyou from '../pages/Thankyou'
import UserPage from '../adminPages/UserPage'
import { About } from '../pages/About'

const Routers = () => {
  return (
    <Routes>
        <Route path = '/' element = {<Navigate to = '/home'/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/tours' element = {<Tours/>} />
        <Route path = '/tours/:id' element = {<TourDetail/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/thank-you' element = {<Thankyou/>} />
        <Route path = '/tours/search' element = {<SearchResultList/>} />
        <Route path = '/adminPage' element = {<UserPage/>} />

    </Routes>
  )
}

export default Routers
