import React from 'react'
import './Profile.css'
import {
   VisibilityOutlined as Follow,
   ArrowForwardRounded as Arrow,
   LaunchOutlined as Launch,
   MoreHorizOutlined as More,
} from '@mui/icons-material'
import Profiletab from './Profiletab'
import About from './About'

function Profile() {
   const iconStyle = {
      fontSize: '1.1rem',
      fontWeight: '600',
   }

   return (
      <div className="profile-container">
         <div className="profile-background"></div>
         <div className="profile-image"></div>
         <div className="profile__info">
            <h1 className="profile__title content">Figma</h1>
            <p className="profile__description content">
               A design platform for teams who build products together
            </p>
            <p className="profile__keypoint content">
               <span>Design</span>
               <div className="bullet"></div>
               <span>San Francisco, CA</span>
               <div className="bullet"></div>
               <span>101,282 follower</span>
            </p>
            <p className="profile__highlight content">
               <small>See all 358 employees on Linkedin</small>
               <Arrow sx={{fontSize: '1rem', ml: '5px'}} />
            </p>
            <div className="profile-buttons">
               <button className="profile__btn active">
                  <Follow sx={iconStyle} />
                  <span>Follow</span>
               </button>
               <button className="profile__btn outline">
                  <Launch sx={iconStyle} />
                  <span>Visit website</span>
               </button>
               <button className="profile__btn faded">
                  <More sx={{ fontSize: '1.5rem' }} />
               </button>
            </div>
         </div>
         <Profiletab />
         <About />
      </div>
   )
}

export default Profile
