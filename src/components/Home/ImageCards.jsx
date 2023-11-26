import React from 'react'
import '../CSS/ImageCards.css'

const ImageCards = (props) => {
  return (
    <div className="default-image" id={props.id}>
        <img src={props.imageURL} alt='genImg'></img>
        <div className="links">
            <a href={props.Prev}>Prev</a>
            <a href={props.Next}>Next</a>
        </div>
    </div>
  )
}

export default ImageCards