import React from 'react'
import Slider from './Carousel'
import Register from './Register'

export default function Container() {
   return (

      <div className="container">
         <div className="container-bg">
            <Register />
            <Slider/>
         </div>
      </div>
   )


}
