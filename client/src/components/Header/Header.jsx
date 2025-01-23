import React, {useRef, useEffect, useContext} from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { AuthContext } from '../../context/AuthContext'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }

]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const{user, dispatch} = useContext(AuthContext)

  const logOut = ()=>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }

  console.log(user)
 
  const headerStickyFunction = ()=>{
    window.addEventListener('scroll', ()=>{
      if(headerRef.current){
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }}
    })
  }

  useEffect(()=>{
    headerStickyFunction()

    return window.removeEventListener('scroll',headerStickyFunction)
  })

  const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header" ref={headerRef}>
          <div className="nav__wrapper">
          
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">

                {nav__links.map((item, index)=>(
                  <li className="nav__item" key= {index}>
                    <NavLink to = {item.path} className= {navClass => navClass.isActive? "active__link": ""} 
                    >{item.display}</NavLink>
                  </li>
                ))}

              </ul>
            </div>

            <div className="nav__right ">
              <div className="nav__btns ">   
                  {user? 
                  (<>
                    <h5 className='mb-0'>{user.username}</h5>
                    <button className='primary__btn' onClick={logOut}>Log Out</button>
                  </>) :
                  (<>
                    <Link to = '/login' className='primary__btn'>Sign In</Link>
                  </>)
                  }
                  
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
    </header>
  )
}

export default Header