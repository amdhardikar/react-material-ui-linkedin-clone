import React from 'react'
import linkedin from '../assets/images/linkedin.svg'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SmsIcon from '@mui/icons-material/Sms'
import AppsIcon from '@mui/icons-material/Apps'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'

function Header() {
   const iconStyle = {
      color: 'white',
      fontSize: '30px', 
      cursor: 'pointer'
   }

   return (
      <div className="header-container">
         <div className="header-logo">
            <img src={linkedin} alt="linkedin" className="header__logo" />
         </div>
         <div className="header-search">
            <SearchIcon sx={{ color: 'white', fontSize: '25px' }}></SearchIcon>
            <input type="text" name="search" id="" placeholder="Search" />
         </div>
         <div className="header-icons">
            <NotificationsIcon sx={iconStyle}></NotificationsIcon>
            <SmsIcon sx={iconStyle}></SmsIcon>
            <AppsIcon sx={iconStyle}></AppsIcon>
         </div>
         <div className="header-image">
            <img
               src="https://thispersondoesnotexist.com/image"
               alt="profile"
               srcset=""
            />
         </div>
         <div className="header-btn">
            <button className="header__btn">upgrade to premium</button>
         </div>
      </div>
   )
}

export default Header
