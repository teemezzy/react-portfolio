import React from 'react'
import torth from '../assets/torth.png'
import { Link } from 'react-router-dom'
import Ham  from '../assets/svg/ham-menu.svg'

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <nav className='header__content'>
          <div className='header__logo-container'>
            {/* Portfolio Profile Picture  */}
            <div className='header__logo-img-cont'>
              <img src={torth} alt='Torth-Logo' className='header__logo-img' />
            </div>
            <span className='header__logo-sub'>TORTH</span>
          </div>

          {/* NAV RIGHT SIDE */}
          <div className='header__main'>
            <ul className='header__links'>
              <li className='header__link-wrapper'>
                <Link to='./index.html' className='header__link'>
                  Home
                </Link>
              </li>
              <li className='header__link-wrapper'>
                <Link to='./index.html#about' className='header__link'>
                  About
                </Link>
              </li>
              <li className='header__link-wrapper'>
                <Link to='./index.html#projects' className='header__link'>
                  Projects
                </Link>
              </li>
              <li className='header__link-wrapper'>
                <Link to='./index.html#contact' className='header__link'>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='header__main-ham-menu-cont'>
              <img
                src={Ham}
                alt='hamburger menu'
                className='header__main-ham-menu'
              />
            </div>
          </div>
        </nav>

        {/*  NAV RIGHT SMALLER SCREEN  */}
        <div className='header__sm-menu'>
          <div className='header__sm-menu-content'>
            <ul className='header__sm-menu-links'>
              <li className='header__sm-menu-link'>
                <Link to='./index.html'> Home </Link>
              </li>

              <li className='header__sm-menu-link'>
                <Link to='./index.html#about'> About </Link>
              </li>

              <li className='header__sm-menu-link'>
                <Link to='./index.html#projects'> Projects </Link>
              </li>

              <li className='header__sm-menu-link'>
                <Link to='./index.html#contact'> Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
