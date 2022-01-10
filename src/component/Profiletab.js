import React, { useState } from 'react'
import './Profiletab.css'

function Profiletab() {
   const [btnNum, setBtn] = useState(0)
   const btnArr = [
      'Overview',
      'About',
      'Products',
      'Posts',
      'Jobs',
      'People',
      'Videos',
   ]
   const btnHandler = (val) => {
      setBtn(val)
   }

   console.log(btnNum)

   return (
      <div className="profiletab-container">
         <div className="profiletab-btngroup">
            {btnArr.map((btn, index) => {
               return (
                  <button
                     className={
                        'profiletab__btn ' +
                        (btnNum === index
                           ? 'profiletab-btn__active'
                           : ' ')
                     }
                     onClick={() => btnHandler(index)}
                     key={index}>
                     {btn}
                  </button>
               )
            })}
         </div>
      </div>
   )
}

export default Profiletab
