import React from 'react'
import './About.css'

function About() {
   return (
      <div className="about-container">
         <p className='about__title'>About</p>
         <p className='about__info'>
            Figma is the first professional-grade online tool created
            specifically for interface design. Born on the web, Figam helps the
            entire product team create, test and ship better designs, faster.
         </p>
         <div className="about-cards">
            <div className="about__card">
               <p className='card__title'>&nbsp;</p>
               <p className='card__head'>Website URL</p>
               <a className='card__link' href="https://www.figma.com/">Figma.com</a>
            </div>
            <div className="about__card">
               <p className='card__title'>Funding via Crunchbase</p>
               <p className='card__head'>Series D</p>
               <a className='card__link' href="#self" id="self">
                  US$ 50M
               </a>
            </div>
         </div>
         <p className="about__link">
            <a href="#seeAll" id='seeAll'>See all details</a>
         </p>
      </div>
   )
}

export default About
