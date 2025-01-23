import React, {useContext} from 'react'
import Header from '../Header/Header'
import HeaderAdmin from '../Header/HeaderAdmin'
import FooterAdmin from '../Footer/FooterAdmin'
import Footer from '../Footer/Footer'
import Routers from '../../router/Routers'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  const {role } = useContext(AuthContext);
  console.log('Role changed:', role);

  return (
    <>
      {role === 'user' || role === null ? <Header/> : <HeaderAdmin/>}
      <Routers/>
      {role === 'user' || role === null ? <Footer/> : <FooterAdmin/>} 
    </>
  )
}

export default Layout
