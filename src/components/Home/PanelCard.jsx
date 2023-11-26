import React from 'react'
import '../CSS/PanelCard.css'

const PanelCard = (props) => {
  return (
    <div className="inputs">
        <input type='text' ref={props.ref1} className='search' placeholder={props.placeholder1}></input>
        <input type='text' ref={props.ref2} className='search' placeholder='Speech'></input>
    </div>
  )
}

export default PanelCard