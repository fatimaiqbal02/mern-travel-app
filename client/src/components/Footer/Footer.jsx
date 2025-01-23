import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'

const quick__links = [
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

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  }

]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
<footer className="footer">
  <div className="footer__links">
  <div className="footer__column">
    <div className="logo">
      <img src={logo} alt="" />
      <p>Explore new destinations and embrace diverse cultures with Travigo.</p>
      <div className="social__links">
        <a href="#"><i className="ri-youtube-line"></i></a>
        <a href="#"><i className="ri-github-fill"></i></a>
        <a href="#"><i className="ri-facebook-circle-line"></i></a>
        <a href="#"><i className="ri-instagram-line"></i></a>
      </div>
    </div>
  </div>

  <div className="footer__column">
    <h5 className="footer__link_title">Discover</h5>
    <ul className="footer__quick-links">
      {quick__links.map((item, index) => (
        <li key={index}>
          <a href={item.path}>{item.display}</a>
        </li>
      ))}
    </ul>
  </div>

  <div className="footer__column">
    <h5 className="footer__link_title">Quick Links</h5>
    <ul className="footer__quick-links">
      {quick__links2.map((item, index) => (
        <li key={index}>
          <a href={item.path}>{item.display}</a>
        </li>
      ))}
    </ul>
  </div>

  <div className="footer__column">
    <h5 className="footer__link_title">Contact</h5>
    <ul className="footer__contact-info">
      <li>
        <span><i className="ri-map-pin-line"></i></span>
        <p>Lahore, Pakistan</p>
      </li>
      <li>
        <span><i className="ri-mail-line"></i></span>
        <p>fatimaiqbalmirza002@gmail.com</p>
      </li>
      <li>
        <span><i className="ri-phone-fill"></i></span>
        <p>030812180789</p>
      </li>
    </ul>
  </div>

  </div>
  
  <div className="footer__column">
    <p className="copyright">Copyright {year}, designed and developed by Fatima Iqbal Mirza. All rights reserved</p>
  </div>
</footer>

  )
}

export default Footer
