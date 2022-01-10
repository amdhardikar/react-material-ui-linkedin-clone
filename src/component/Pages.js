import React from 'react'
import './Pages.css'
import invision from '../assets/images/invision.svg'
import sketch from '../assets/images/sketch.svg'
import dribble from '../assets/images/dribble.svg'
import behance from '../assets/images/behance.svg'
import overlapstudio from '../assets/images/overlapstudio.svg'
import medium from '../assets/images/medium.svg'
import adobe from '../assets/images/adobe.svg'
import slack from '../assets/images/slack.svg'
import { VisibilityOutlined as Follow } from '@mui/icons-material'
import Links from './Links'

function Pages() {
   const svgArr = [
      {
         logo: invision,
         name: 'Invision',
         category: 'Internet',
         follower: '137K',
         color: '#dc395f',
         size: '50px 50px',
      },
      {
         logo: sketch,
         name: 'Sketch',
         category: 'Design',
         follower: '33K',
         color: 'transparent',
         size: '55px 55px',
      },
      {
         logo: dribble,
         name: 'Dribble',
         category: 'Design',
         follower: '162K',
         color: '#fff',
         size: '60px 60px',
      },
      {
         logo: behance,
         name: 'Behance',
         category: 'Internet',
         follower: '67K',
         color: '#1769ff',
         size: '50px 50px',
      },
      {
         logo: overlapstudio,
         name: 'Overlap Studio',
         category: 'Services',
         follower: '105',
         color: 'transparent',
         size: '60px 60px',
      },
      {
         logo: medium,
         name: 'Medium',
         category: 'Online',
         follower: '101K',
         color: 'black',
         size: '40px 40px',
      },
      {
         logo: adobe,
         name: 'Adobe',
         category: 'Software',
         follower: '2.68M',
         color: '#ff0000',
         size: '70px 70px',
      },
      {
         logo: slack,
         name: 'Slack',
         category: 'Software',
         follower: '582K',
         color: '#292640',
         size: '40px 40px',
      },
   ]

   return (
      <div className='right-container'>
         <div className="pages-container">
            <p className="pages__title">Pages people also viewed</p>
            <div className="pages-cards">
               {svgArr.map((svg, index) => {
                  const svgStyle = {
                     backgroundImage: `url(${svg.logo})`,
                     backgroundColor: `${svg.color}`,
                     backgroundSize: `${svg.size}`,
                  }

                  return (
                     <div className="page__card" key={index}>
                        <div className="pagecard__logo" style={svgStyle}></div>
                        <div className="pagecard__info">
                           <div className="pagecard__body">
                              <p className="pagecard__title">{svg.name}</p>
                              <div className="pagecard__highlight">
                                 <span>{svg.category}</span>
                                 <div className="bullet"></div>
                                 <span>{svg.follower} followers</span>
                              </div>
                           </div>
                           <div className="pagecard__follow">
                              <Follow sx={{ color: '#0b66c3' }} />
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
         <Links />
      </div>
   )
}

export default Pages
