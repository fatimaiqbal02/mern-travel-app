import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const HeaderAdmin = () => {

  const navigate = useNavigate()
  const{user, dispatch} = useContext(AuthContext)

  const logOut = ()=>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }

  return (
    <div>
      <div>HEADER OF THE ADMIN</div>
      <button className='btn btn-dark' onClick={logOut}>Log Out</button>
    </div>
  )
}

export default HeaderAdmin
