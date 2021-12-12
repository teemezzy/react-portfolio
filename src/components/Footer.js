import React from 'react'
import twitter from '../assets/png/twitter-ico.png'
import github from '../assets/png/github-ico.png'
import insta from '../assets/png/insta-ico.png'
import linkedin from '../assets/png/linkedin-ico.png'
import yt from '../assets/png/yt-ico.png'

const Footer = () => {
  return (
    <>
      <footer className='main-footer'>
        <div className='main-container'>
          <div className='main-footer__upper'>
            <div className='main-footer__row main-footer__row-1'>
              <h2 className='heading heading-sm main-footer__heading-sm'>
                <span>Social</span>
              </h2>
              <div className='main-footer__social-cont'>
                <a target='_blank' rel='noreferrer' href='#'>
                  <img
                    className='main-footer__icon'
                    src={linkedin}
                    alt='icon'
                  />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <img className='main-footer__icon' src={github} alt='icon' />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <img className='main-footer__icon' src={twitter} alt='icon' />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <img className='main-footer__icon' src={yt} alt='icon' />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <img
                    className='main-footer__icon main-footer__icon--mr-none'
                    src={insta}
                    alt='icon'
                  />
                </a>
              </div>
            </div>
            <div className='main-footer__row main-footer__row-2'>
              <h4 className='heading heading-sm text-lt'>
                David Toromo ThankGod
              </h4>
              <p className='main-footer__short-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                tempora explicabo quae quod deserunt
              </p>
            </div>
          </div>

          {/* <!-- Footer Inscription --> */}
          <div className='main-footer__lower'>
            &copy; Copyright 2021. Made by
            <a rel='noreferrer' target='_blank' href='#'>
              TORTH
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
