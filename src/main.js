import React from 'react'
import Star from './images/star.png'

function main(props) {
  let badgeText 
  if (props.spot ===0){
    badgeText = 'SOLD OUT'
  } else if (props.country === 'online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className='bottom'>
      {badgeText &&<div className='badge'>{badgeText}</div>}
      <div className='main'>
        <img src={props.img} alt=''  />
      </div>
      <div className='first'>
        <img src={Star} alt=''/>
        <p>{props.rating} .</p>
        <p>  ({props.number})  </p>
        <p>   {props.country}</p>
      </div>
      <div className='last'>
        <p>{props.experience}</p>
        <p> From $ {props.price} / person</p>
    </div>
    </div>
  )
}

export default main