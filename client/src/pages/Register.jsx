import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import registerImg from '../assets/images/formImage.png'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  //handling form
  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  //handle click
  const handleClick = async e => {
    e.preventDefault()
    console.log(credentials)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      if (!res.ok) {
        alert(result.message)
      }

      //console.log(result)

      dispatch({ type: 'REGISTER_SUCCESS' })
      navigate('/login')

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="login__container">

      <div className="login__img">
        <img src={registerImg} alt="" />
      </div>

      <div className="login__form">
        <h2>Register</h2>

        <form onSubmit={handleClick}>
          <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
          <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
          <button className='btn secondary__btn auth__btn' type='submit'>Create Account</button>
          <p>Already have an account <Link to='/login'>Login</Link></p>
        </form>
      </div>

    </div>
  )
}

export default Register

