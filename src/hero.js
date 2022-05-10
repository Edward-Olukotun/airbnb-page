import React from 'react'
import Pic1 from './images/1.png'
import Pic2 from './images/2.png'
import Pic3 from './images/3.png'
import Pic4 from './images/4.png'
import Pic5 from './images/5.png'
import Pic6 from './images/6.png'
import Pic7 from './images/7.png'
import Pic8 from './images/8.png'
import Pic9 from './images/9.png'

function hero() {
  return (
    <div className='hero'>
       <div className='pics'>
        <img src={Pic1} alt=''className='1'/>
        <img src={Pic2} alt='' className='2'/>
        <img src={Pic3} alt='' className='3'/>
        <img src={Pic4} alt='' className='4'/>
        <img src={Pic5} alt='' className='5'/>
        <img src={Pic6} alt='' className='6'/>
        <img src={Pic7} alt='' className='7'/>
        <img src={Pic8} alt='' className='8'/>
        <img src={Pic9} alt='' className='9'/>
       </div>
       <h3>Online Experiences</h3>
       <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>

    </div>
  )
}

export default hero