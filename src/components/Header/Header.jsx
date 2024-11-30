import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <>
       <div className='main'>
          <div className='one'> <img width='80px' height='50px' src='./img/web.webp' alt='loading..' /> </div>
        
          <nav>
            <ul className='items'>
              <li> <Link target='_blank' to="/"> Home </Link></li>
              <li> <Link target='_blank' to="/About "> About </Link></li>
              <li> <Link  target='_blank' to="/Contact "> Contact </Link></li>
              <li> <Link target='_blank'  to="/Skills "> Skills </Link></li>
              <li> <Link  target='_blank' to="/Login "> Login </Link></li>
              <li> <Link target='_blank' to="/Signup "> Signup </Link></li>
            </ul>
          </nav>
          <div><button className='two'>Logout</button></div>
        </div>
    </>
  )
}

export default Header;

