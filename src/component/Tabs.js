import React from 'react'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutlined'
import WorkIcon from '@mui/icons-material/WorkOutlineOutlined'
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined'
import './Tabs.css'

function Tabs() {
   const iconStyle = {
      color: '#777373f3',
   }
   
   return (
      <div className="tab-container">
         <div className="tab-btn">
            <HomeIcon sx={iconStyle} />
            <span>Home</span>
         </div>
         <span className="divider"></span>
         <div className="tab-btn">
            <PeopleIcon sx={iconStyle} />
            <span>My network</span>
         </div>
         <span className="divider"></span>
         <div className="tab-btn">
            <WorkIcon sx={iconStyle} />
            <span>Job offers</span>
         </div>
         <span className="divider"></span>
         <div className="tab-btn">
            <ProfileIcon sx={iconStyle} />
            <span>My profile</span>
         </div>
      </div>
   )
}

export default Tabs
