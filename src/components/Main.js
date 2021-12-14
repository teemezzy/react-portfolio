import React from 'react'
import { Link } from 'react-router-dom'
import twitter from '../assets/png/twitter-ico.png'
import github from '../assets/png/github-ico.png'
import insta from '../assets/png/insta-ico.png'
import linkedin from '../assets/png/linkedin-ico.png'
import yt from '../assets/png/yt-ico.png'

const Main = () => {
  return (
    <>
      <section className='home-hero'>
        <div className='home-hero__content'>
          <h1 className='heading-primary'>
            Hi, My name is David Toromo ThankGod
          </h1>
          <div className='home-hero__info'>
            <p className='text-primary'>
              A React Frontend Developer with more than 4 years experience
              working with ReactJS and 6 years of experience as Link Frontend
              Developer.
            </p>
          </div>
          <div className='home-hero__cta'>
            <Link className='btn btn--bg' to='/#projects'>
              Projects
            </Link>
          </div>
        </div>

        {/* <!-- Socials Link On The Left --> */}
        <div className='home-hero__socials'>
          {/* <!-- LinkedIn --> */}
          <div className='home-hero__social'>
            <a href='#' className='home-hero__social-icon-link'>
              <img
                src={linkedin}
                alt='icon'
                className='home-hero__social-icon'
              />
            </a>
          </div>

          {/* <!-- GitHub --> */}
          <div className='home-hero__social'>
            <a
              href='https://www.github.com/teemezzy'
              className='home-hero__social-icon-link'
            >
              <img
                src={github}
                alt='icon'
                className='home-hero__social-icon'
              />
            </a>
          </div>

          {/* Twitter */}
          <div className='home-hero__social'>
            <a
              href='https://twitter.com/teemezzy'
              className='home-hero__social-icon-link'
            >
              <img
                src={twitter}
                alt='icon'
                className='home-hero__social-icon'
              />
            </a>
          </div>
          {/* YouTube */}
          <div className='home-hero__social'>
            <a href='#' className='home-hero__social-icon-link'>
              <img
                src={yt}
                alt='icon'
                className='home-hero__social-icon'
              />
            </a>
          </div>

          {/* Instagram */}
          <div className='home-hero__social'>
            <a
              href='https://www.instagram.com/_torth'
              className='home-hero__social-icon-link home-hero__social-icon-link--bd-none'
            ></a>
            <img
              src={insta}
              alt='icon'
              className='home-hero__social-icon'
            />
          </div>
        </div>
        {/* <!--  --> */}

        {/* Mouse Icon */}
        <div className='home-hero__mouse-scroll-cont'>
          <div className='mouse'></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id='about' className='about sec-pad'>
        <div className='main-container'>
          <h2 className='heading heading-sec heading-sec__mb-med'>
            <span className='heading-sec__main'>About Me</span>
            <span className='heading-sec__sub'>
              Prolific, frontend web developer with a passion for metrics and
              beating former "best-yets." Prototyped 25 new product features per
              year for MyadCenter, Inc. Decreased rework by 22% and costs by
              15%. Consistently receive high user experience scores for all web
              development projects, including a 55% increase for MyadCenter,
              Inc. Passionate about building world className web applications.
              One of my sites received a 2020 Webby for Best Navigation and
              Structure.
            </span>
          </h2>
          <div className='about__content'>
            <div className='about__content-main'>
              <h3 className='about__content-title'>Get to know me!</h3>
              <div className='about__content-details'>
                <p className='about__content-details-para'>
                  Hi! It's <strong>Toromo</strong> and I'm a{' '}
                  <strong>React Frontend Web Developer</strong> located in
                  Lagos, Nigeria. I've done
                  <strong> remote </strong>
                  projects for agencies, consulted for startups, and
                  collaborated with talented people to create{' '}
                  <strong>digital products </strong>
                  for both business and consumer use.
                </p>
                <p className='about__content-details-para'>
                  I'm a bit of a digital product junky. Over the years, I've
                  used more than seventy web apps in different industries and
                  verticals. Feel free to <strong>contact</strong> me here.
                </p>
              </div>
              <Link
                href='./#contact'
                className='btn btn--med btn--theme dynamicBgClr'
              >
                Contact
              </Link>
            </div>
            <div className='about__content-skills'>
              <h3 className='about__content-title'>My Skills</h3>
              <div className='skills'>
                <div className='skills__skill'>HTML</div>
                <div className='skills__skill'>CSS</div>
                <div className='skills__skill'>JavaScript</div>
                <div className='skills__skill'>SASS</div>
                <div className='skills__skill'>REACTJS</div>
                <div className='skills__skill'>BOOTSTRAP</div>
                <div className='skills__skill'>TAILWINDCSS</div>
                <div className='skills__skill'>GRAPHQL</div>
                <div className='skills__skill'>REDUX</div>
                <div className='skills__skill'>GIT</div>
                <div className='skills__skill'>OPENGRAPH</div>
                <div className='skills__skill'>SHOPIFY</div>
                <div className='skills__skill'>WORDPRESS</div>
                <div className='skills__skill'>GOGGLE ADS</div>
                <div className='skills__skill'>FACEBOOK ADS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PROJECT SECTION --> */}
      <section id='projects' className='projects sec-pad'>
        <div className='main-container'>
          <h2 className='heading heading-sec heading-sec__mb-bg'>
            <span className='heading-sec__main'>Projects</span>
            <span className='heading-sec__sub'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora explicabo quae quod deserunt eius sapiente
            </span>
          </h2>

          <div className='projects__content'>
            <div className='projects__row'>
              <div className='projects__row-img-cont'>
                <img
                  src='./assets/jpeg/project-mockup-example.jpeg'
                  alt='Software Screenshot'
                  className='projects__row-img'
                  loading='lazy'
                />
              </div>
              <div className='projects__row-content'>
                <h3 className='projects__row-content-title'>Project 1</h3>
                <p className='projects__row-content-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href='./project-1.html'
                  className='btn btn--med btn--theme dynamicBgClr'
                  target='_blank'
                >
                  Case Study
                </Link>
              </div>
            </div>
            <div className='projects__row'>
              <div className='projects__row-img-cont'>
                <img
                  src='./assets/jpeg/project-mockup-example.jpeg'
                  alt='Software Screenshot'
                  className='projects__row-img'
                  loading='lazy'
                />
              </div>
              <div className='projects__row-content'>
                <h3 className='projects__row-content-title'>Project 2</h3>
                <p className='projects__row-content-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href='./project-2.html'
                  className='btn btn--med btn--theme dynamicBgClr'
                  target='_blank'
                >
                  Case Study
                </Link>
              </div>
            </div>
            <div className='projects__row'>
              <div className='projects__row-img-cont'>
                <img
                  src='./assets/jpeg/project-mockup-example.jpeg'
                  alt='Software Screenshot'
                  className='projects__row-img'
                  loading='lazy'
                />
              </div>
              <div className='projects__row-content'>
                <h3 className='projects__row-content-title'>Project 3</h3>
                <p className='projects__row-content-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium.
                </p>
                <Link
                  href='./project-3.html'
                  className='btn btn--med btn--theme dynamicBgClr'
                  target='_blank'
                >
                  Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='contact sec-pad dynamicBg'>
        <div className='main-container'>
          <h2 className='heading heading-sec heading-sec__mb-med'>
            <span className='heading-sec__main heading-sec__main--lt'>
              Contact
            </span>
            <span className='heading-sec__sub heading-sec__sub--lt'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora explicabo quae quod deserunt eius sapiente
            </span>
          </h2>
          <div className='contact__form-container'>
            <form action='#' className='contact__form'>
              <div className='contact__form-field'>
                <label className='contact__form-label' for='name'>
                  Name
                </label>
                <input
                  required
                  placeholder='Enter Your Name'
                  type='text'
                  className='contact__form-input'
                  name='name'
                  id='name'
                />
              </div>
              <div className='contact__form-field'>
                <label className='contact__form-label' for='email'>
                  Email
                </label>
                <input
                  required
                  placeholder='Enter Your Email'
                  type='text'
                  className='contact__form-input'
                  name='email'
                  id='email'
                />

                
              </div>


              
              <div className='contact__form-field'>
                <label className='contact__form-label' for='message'>
                  Message
                </label>
                <textarea
                  required
                  cols='30'
                  rows='10'
                  className='contact__form-input'
                  placeholder='Enter Your Message'
                  name='message'
                  id='message'
                ></textarea>
              </div>
              <button type='submit' className='btn btn--theme contact__btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
