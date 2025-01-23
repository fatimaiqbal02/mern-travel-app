import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/formImage.png'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  //handling form
  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()
    console.log(credentials)

    dispatch({ type: 'LOGIN_START' })

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      if (!res.ok) {
        alert(result.message)
      }

      console.log(result.data)
      console.log(result.role)

      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: result.data, role: result.role } })
      result.role === 'user' ? navigate('/') : navigate('/adminPage')

    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message })
    }
  }

  return (
    <div className="login__container">

      <div className="login__img">
        <img src={loginImg} alt="" />
      </div>

      <div className="login__form">
        <h2>Login</h2>
        <form onSubmit={handleClick}>
          <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
          <button className='btn secondary__btn auth__btn' type='submit'>Login</button>
          <p>Don't have an account <Link to='/register'>Create One</Link></p>
        </form>
      </div>

    </div>
  )
}

export default Login
